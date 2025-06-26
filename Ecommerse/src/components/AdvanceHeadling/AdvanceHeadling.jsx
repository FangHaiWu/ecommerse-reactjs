import React from "react";
import MainLayout from "@components/Layout/Layout";
import styles from "./styles.module.scss";
const AdvanceHeadling = () => {
    const { containerAdvanceHeadling, headline, titleAdvanceHeading } = styles;
    return (
        <MainLayout>
            <div className={containerAdvanceHeadling}>
                <div className={headline}></div>
                <div className={titleAdvanceHeading}>
                    <span>don't miss super offers</span>
                    <h2>Our best products</h2>
                </div>

                <div className={headline}></div>
            </div>
        </MainLayout>
    );
};

export default AdvanceHeadling;
