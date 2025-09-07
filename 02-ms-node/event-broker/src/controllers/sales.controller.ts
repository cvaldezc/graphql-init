import axios from "axios";

const salesApi = axios.create({
    baseURL: 'http://localhost:3004/sales'
});

export const getAllSales = async () => {
    const { data } = await salesApi.get('/all');

    if (!data) {
        throw new Error('Not found sales');
    }
    return data;
}

export const createSales = async (payload: any) => {
    const { data } = await salesApi.post('/create', {
        data: payload
    });

    if (!data) {
        throw new Error("Cannot created the sale");
    }
    return data;
}

