import React from 'react';
import styles from "./styles.module.scss"
import reLoadIcon from "@icons/svgs/rlIcon.svg";
import heartIcon from "@icons/svgs/heart.svg";
import cartIcon from "@icons/svgs/cart.svg";
const ProductItem = ({src, prevSrc, price, title}) => {
    const {containerImg, boxImg, showWhenHover, priceItem, titleItem, showFnWhenHover, boxIcon, boxImgFn } = styles;
    return (
        <div className={containerImg}>
            <div className={boxImg}>
                <img src="https://xstore.b-cdn.net/elementor2/marseille04/wp-content/uploads/sites/2/2022/12/Image-1.1-min-251x300.jpg" alt=""/>
                <img className={showWhenHover} src="https://xstore.b-cdn.net/elementor2/marseille04/wp-content/uploads/sites/2/2022/12/Image-1.2-min-251x300.jpg" alt=""/>
                <div className={showFnWhenHover}>
                    <div className={boxIcon}>
                        <img className={boxImgFn}  src={cartIcon} alt=""/>
                    </div>
                    <div className={boxIcon}>
                        <img className={boxImgFn}  src={heartIcon} alt=""/>
                    </div>
                    <div className={boxIcon}>
                        <img className={boxImgFn} src={reLoadIcon} alt=""/>
                    </div>
                    <div className={boxIcon}>
                        <img className={boxImgFn} src={cartIcon} alt=""/>
                    </div>
                </div>
            </div>
            <div>
                <div className={titleItem}>10K Yellow Gold</div>
                <div className={priceItem}>$99.99</div>
            </div>

        </div>


    );
};

export default ProductItem;