import Header from "@components/Header/Header";
import Banner from "@components/Banner/Banner";
import styles from "./styles.module.scss";
import Info from "../Info/Info";
import AdvanceHeadling from "../AdvanceHeadling/AdvanceHeadling";
import HeadingListProducts from "../HeadingListProducts/HeadingListProducts";
import { useEffect, useState } from "react";
import { getProducts } from "@/apis/productsService.js";
import PopularProduct from "@components/PopularProduct/PopularProduct.jsx";

const HomePage = () => {
    const { container } = styles;
    const [listProducts, setListProducts] = useState([]);

    useEffect(() => {
        getProducts().then((res) => {
            setListProducts(res.contents);
        });
    }, []);
    console.log(listProducts);
    return (
        <div className={container}>
            <Header />
            <Banner />
            <Info />
            <AdvanceHeadling />
            <HeadingListProducts data={listProducts.slice(0, 2)} />

            <PopularProduct data={listProducts.slice(2)} />
        </div>
    );
};

export default HomePage;
