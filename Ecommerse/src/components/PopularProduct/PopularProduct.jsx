import React from 'react';
import styles from "./styles.module.scss";
import ProductItem from "@components/HeadingListProducts/ProductItem/ProductItem.jsx";
import MainLayout from "@components/Layout/Layout.jsx";

const PopularProduct = () => {
    const {container} = styles;
    return (
        <>
            <MainLayout >
                <div className={container}>
                    <ProductItem/>
                    <ProductItem/>
                    <ProductItem/>
                    <ProductItem/>
                    <ProductItem/>
                    <ProductItem/>
                    <ProductItem/>
                    <ProductItem/>
                    <ProductItem/>
                </div>

            </MainLayout>
        </>

    );
};

export default PopularProduct;