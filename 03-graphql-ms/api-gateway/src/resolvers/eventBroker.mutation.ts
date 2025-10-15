export const EventBrokerMutation = {
    sendEvent: (_, {input}, context) => {
        const { type, event, queryData } = input;
        
        return {
            __typename: type, 
            name: "Teclado mecanico",
            price: 234
        }
    }
}