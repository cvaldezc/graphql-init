export const typeDefs =  `#graphql
    
    input EventBrokerInput {
        type: String!
        event: String!
        queryData: String
    }

    type Product {
        name: String
        price: Int
    }

    type Query {
        service: String!
    }
    
    union Response = Product

    type Mutation {
        sendEvent(input: EventBrokerInput!): Response!
    }
`;