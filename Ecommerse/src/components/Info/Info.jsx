import React from "react";
import MainLayout from "@components/Layout/Layout";
import { dataInfo } from "./constant";
import InfoCard from "./InfoCard/InfoCard";
import styles from "./styles.module.scss";
const Info = () => {
    const { container, layoutInfo } = styles;
    return (
        <div className={layoutInfo}>
            <div className={container}>
                {dataInfo.map((item, index) => (
                    <InfoCard
                        key={index}
                        title={item.title}
                        description={item.description}
                        src={item.src}
                    />
                ))}
            </div>
        </div>
    );
};

export default Info;
