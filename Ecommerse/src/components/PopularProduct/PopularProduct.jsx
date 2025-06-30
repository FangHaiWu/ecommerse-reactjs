import React from "react";
import styles from "./styles.module.scss";
import ProductItem from "@components/HeadingListProducts/ProductItem/ProductItem.jsx";
import MainLayout from "@components/Layout/Layout.jsx";

const PopularProduct = ({ data }) => {
    const { container } = styles;
    return (
        <>
            <MainLayout>
                <div className={container}>
                    {data.map((item, index) => (
                        <ProductItem
                            src={item.images[0]}
                            prevSrc={item.images[1]}
                            price={item.price}
                            name={item.name}
                        />
                    ))}
                </div>
            </MainLayout>
        </>
    );
};

export default PopularProduct;
