import axios from "axios";
export const getProducts = async () => {
    try {
        const api = await axios.get('https://fakestoreapi.com/products');
        console.log('api', api);
        return api.data;
    }
    catch (err) {
        console.log(err);
    }
};
