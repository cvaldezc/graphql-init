import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import dotenv from "dotenv";
import { typeDefs } from "./typeDefs";
import { resolvers } from "./resolvers";

dotenv.config()  

const server = new ApolloServer({
    typeDefs ,
    resolvers 
});

const { url } = await startStandaloneServer(server, {
    listen: {
        port: parseInt(process.env.PORT), 
    }
});

console.log(`Graphql api gateway started: ${url}`  );

