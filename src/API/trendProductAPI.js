import axios from 'axios';


export const trendProductAPI = async () => {
    const {data} = await axios.get("http://localhost:4000/product");
    console.log(data);
    return data
};

export const getProductDetail = async (product_id) => {
    const {data} = await axios.get(`http://localhost:4000/product/${product_id}`);
    console.log(data);
    return data
}
