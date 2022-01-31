import axios from 'axios';


const trendProductAPI = async () => {
    const {data} = await axios.get("http://localhost:4000/product");
    console.log(data);
    return data
};

export default trendProductAPI;
