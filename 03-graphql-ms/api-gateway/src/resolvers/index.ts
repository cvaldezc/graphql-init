import { booksQuery } from "./booksResolver";

 
export const resolvers = {
    Query: {
        ...booksQuery 
    } 
}