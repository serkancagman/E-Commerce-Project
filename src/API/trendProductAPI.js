import axios from "axios";

axios.interceptors.request.use(
  function (config) {
    const {origin} = new URL(config.url);

    const allowedOrigins = [process.env.REACT_APP_BACKEND_ENDPOINT];

    const token = localStorage.getItem("access-token");
    if (allowedOrigins.includes(origin)) {
      config.headers.authorization = token;
    }

    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

export const trendProductAPI = async () => {
  const { data } = await axios.get(
    `${process.env.REACT_APP_BACKEND_ENDPOINT}/product`
  );

  return data;
};

export const getProductDetail = async (product_id) => {
  const { data } = await axios.get(
    `${process.env.REACT_APP_BACKEND_ENDPOINT}/product/${product_id}`
  );

  return data;
};
export const getProductByCategory = async ({ pageParam = 1 }) => {
  const { data } = await axios.get(
    `${process.env.REACT_APP_BACKEND_ENDPOINT}/product?page=${pageParam}`
  );

  return data;
};

// REGİSTRATION API
export const registerUser = async (userData) => {
  const { data } = await axios.post(
    `${process.env.REACT_APP_BACKEND_ENDPOINT}/auth/register`,
    userData
  );

  return data;
};

// LOGİN API
export const loginUser = async (userData) => {
  const { data } = await axios.post(
    `${process.env.REACT_APP_BACKEND_ENDPOINT}/auth/login`,
    userData
  );
  
  return data;
};
// PROFILE API

export const getMe = async () => {
  const { data } = await axios.get(
    `${process.env.REACT_APP_BACKEND_ENDPOINT}/auth/me`
  );
  
  return data;
};

//LOGOUT API
export const logoutUser = async () => {
  const { data } = await axios.get(
    `${process.env.REACT_APP_BACKEND_ENDPOINT}/auth/logout`
  ,{
    refreshToken: localStorage.getItem("refresh-token")
  });
  return data;
}

// ORDER API
export const getOrder = async (input) => {
  const { data } = await axios.post(
    `${process.env.REACT_APP_BACKEND_ENDPOINT}/order`,input);
  
  return data;
}
// GET ORDER DATA
export const getOrderData = async () => {
  const { data } = await axios.get(
    `${process.env.REACT_APP_BACKEND_ENDPOINT}/order`
  );
  console.log(data);
  return data;
}