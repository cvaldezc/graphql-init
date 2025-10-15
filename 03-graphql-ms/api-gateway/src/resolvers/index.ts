import { EventBrokerMutation } from "./eventBroker.mutation";

 
export const resolvers = {
    Query: {
        service: () => "API Gateway"
    },
    Mutation: {
        ...EventBrokerMutation
    }
}