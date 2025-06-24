import React from "react";
import styles from "./styles.module.scss";
const InfoCard = ({ title, description, src }) => {
    console.log("src :>> ", src);
    const { imgInfoCard, containerInfoCard, containerContent, containerTitle, containerDescription, imgIcon } = styles;
    return (
        <div className={containerInfoCard}>
            <div className={imgInfoCard}>
                <img className={imgIcon} src={src} alt="" />
            </div>
            <div className={containerContent}>
                <div className={containerTitle}>{title}</div>
                <div className={containerDescription}>{description}</div>
            </div>
        </div>
    );
};

export default InfoCard;
