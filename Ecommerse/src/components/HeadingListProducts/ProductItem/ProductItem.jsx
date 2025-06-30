import React from "react";
import styles from "./styles.module.scss";
import reLoadIcon from "@icons/svgs/rlIcon.svg";
import heartIcon from "@icons/svgs/heart.svg";
import cartIcon from "@icons/svgs/cart.svg";
const ProductItem = ({ src, prevSrc, price, name }) => {
    const {
        containerImg,
        boxImg,
        showWhenHover,
        priceItem,
        titleItem,
        showFnWhenHover,
        boxIcon,
        boxImgFn,
    } = styles;
    return (
        <div className={containerImg}>
            <div className={boxImg}>
                <img src={src} alt="" />
                <img className={showWhenHover} src={prevSrc} alt="" />
                <div className={showFnWhenHover}>
                    <div className={boxIcon}>
                        <img className={boxImgFn} src={cartIcon} alt="" />
                    </div>
                    <div className={boxIcon}>
                        <img className={boxImgFn} src={heartIcon} alt="" />
                    </div>
                    <div className={boxIcon}>
                        <img className={boxImgFn} src={reLoadIcon} alt="" />
                    </div>
                    <div className={boxIcon}>
                        <img className={boxImgFn} src={cartIcon} alt="" />
                    </div>
                </div>
            </div>
            <div>
                <div className={titleItem}>{name}</div>
                <div className={priceItem}>${price}</div>
            </div>
        </div>
    );
};

export default ProductItem;
