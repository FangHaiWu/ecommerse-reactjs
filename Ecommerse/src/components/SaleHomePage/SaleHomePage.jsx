import React from "react";
import styles from "./styles.module.scss";
import Button from "../Button/Button";
function SaleHomePage() {
    const { container, containermiddleContent, title, des, boxImg } = styles;
    return (
        <div className={container}>
            <div className={boxImg}>
                <img
                    src="https://xstore.b-cdn.net/elementor2/marseille04/wp-content/uploads/sites/2/2022/12/Image_1.jpeg"
                    alt=""
                />
            </div>
            <div className={containermiddleContent}>
                <h2 className={title}>Sale of the year</h2>
                <p className={des}>
                    Libero sed faucibus facilisis fermentum. Est nibh sed massa
                    sodales.
                </p>
                <Button content="Read more" isPrimary={false} />
            </div>
            <div>
                <img
                    src="	https://xstore.b-cdn.net/elementor2/marseille04/wp-content/uploads/sites/2/2022/12/Image_2.jpeg"
                    alt=""
                />
            </div>
        </div>
    );
}

export default SaleHomePage;
