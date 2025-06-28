import React from "react";
import MainLayout from "@components/Layout/Layout";

import styles from "./styles.module.scss";
import CountdownBanner from "./CountdownBanner/CountdownBanner";
import ProductItem from "@components/HeadingListProducts/ProductItem/ProductItem.jsx";
const HeadingListProducts = () => {
    const { containerHeadingListProduct, containerItem } = styles;
    return (
        <MainLayout>
            <div className={containerHeadingListProduct}>
                <CountdownBanner />
                <div className={containerItem}>
                    <ProductItem/>
                    <ProductItem/>
                </div>
            </div>

        </MainLayout>
    );
};

export default HeadingListProducts;
