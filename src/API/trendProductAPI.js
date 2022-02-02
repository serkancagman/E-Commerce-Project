import axios from 'axios';


export const trendProductAPI = async ({ pageParam = 0 }) => {
    const {data} = await axios.get(`${process.env.REACT_APP_BACKEND_ENDPOINT}/product`);
    console.log(data);
    return data
};

export const getProductDetail = async (product_id) => {
    const {data} = await axios.get(`${process.env.REACT_APP_BACKEND_ENDPOINT}/product/${product_id}`);
    console.log(data);
    return data
}
