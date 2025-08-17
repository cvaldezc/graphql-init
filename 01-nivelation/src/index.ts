import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { GraphQLError } from "graphql";
import { PokemonAPI } from "./datasources/pokemon-api.ts";

const typeDefs = `#graphql
    type Book {
        title: String
        author: String
    }
    
    type PokemonResult {
        name: String!
        url: String!
    }
    
    type Pokemon {
        count: Int
        next: String
        previous: String
        results: [PokemonResult]
    }
    
    type Query {
        books: [Book]
        pokemons: Pokemon!
    }

    input BookInput {
        title: String!
        author: String!
    }
    
    type Mutation {
        addBook(input: BookInput!): Book
    }
`;

const books = [
  {
    title: 'The Awakening',
    author: 'Kate Chopin',
  },
  {
    title: 'City of Glass',
    author: 'Paul Auster',
  },
];


const resolvers = {
  Query: {
    books: () => books,
    pokemons: async (_, __, context) => {
        return context.dataSources.pokemonApi.getAllPokemons();
    },
  },
  Mutation: {
    addBook: (_, { input }) => {
        const { title, author } = (input);
        if (title.trim () == "" || author.trim() == "") {
            throw new GraphQLError("Invalid Input", {
                extensions: {
                    code: 'BAB_REQUEST',
                }
            });
        }
        const book = {
            title: title,
            author: author,
        }
        books.push(book);
        return book;
    }
  }
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

const { url } = await startStandaloneServer(server, {
  listen: { port: 4000 },
  context: async () => {
    const {cache} = server;
    
    return {
        dataSources: {
            pokemonApi: new PokemonAPI({ cache })
        },
    };
  },
});

console.log(`🚀  Server ready at: ${url}`);
