import React from "react";
import MainLayout from "@components/Layout/Layout";

import styles from "./styles.module.scss";
import CountdownBanner from "./CountdownBanner/CountdownBanner";
const HeadingListProducts = () => {
    const { containerHeadingListProduct } = styles;
    return (
        <MainLayout>
            <div className={containerHeadingListProduct}>
                <CountdownBanner />
                <div>
                    <div>1</div>
                    <div>2</div>
                </div>
            </div>

        </MainLayout>
    );
};

export default HeadingListProducts;
