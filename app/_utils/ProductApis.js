// app/_utils/ProductApis.js

const { default: axiosClient } = require("./axiosClient");

const getLatestProducts = () => {
    return axiosClient.get('/products?populate=*');
};

export default {
    getLatestProducts,
};
