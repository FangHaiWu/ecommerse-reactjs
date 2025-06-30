import React from "react";
import MainLayout from "@components/Layout/Layout";

import styles from "./styles.module.scss";
import CountdownBanner from "./CountdownBanner/CountdownBanner";
import ProductItem from "@components/HeadingListProducts/ProductItem/ProductItem.jsx";
const HeadingListProducts = ({ data }) => {
    const { containerHeadingListProduct, containerItem } = styles;
    return (
        <MainLayout>
            <div className={containerHeadingListProduct}>
                <CountdownBanner />
                <div className={containerItem}>
                    {data.map((item, index) => (
                        <ProductItem
                            src={item.images[0]}
                            prevSrc={item.images[1]}
                            price={item.price}
                            name={item.name}
                        />
                    ))}
                </div>
            </div>
        </MainLayout>
    );
};

export default HeadingListProducts;
