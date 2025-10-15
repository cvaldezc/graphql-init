export const productsQuerys = {
    getAllProducts: (_, { input: { event } }, context) => {

        console.log(event);

        return {
            name: "Mechanic keyboard",
            price: 150,
        }
    }
}