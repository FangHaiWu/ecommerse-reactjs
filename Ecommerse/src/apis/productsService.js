import axiosClient from "@/apis/axiosClient.js";

const getProducts = async () =>{
    const res = await axiosClient.get("/product");
    return res.data;

}

export {getProducts}