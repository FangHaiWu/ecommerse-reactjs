import React from "react";
import styles from "./styles.module.scss";
import CountdownTimer from "@components/CountdownTimer/CountdownTimer";
import Button from "@components/Button/Button.jsx";


const CountdownBanner = () => {
    const { containerBanner, countdownTimeDisplay, title, btn } = styles;
    const targetDate = "2025-12-31T00:00:00Z";
    return (
        <div className={containerBanner}>
            <div className={countdownTimeDisplay}>
                <CountdownTimer targetDate={targetDate}/>
            </div>
            <h2 className={title}>The classics make a comeback</h2>
            <Button content={"Buy now"}/>
        </div>
    );
    
};

export default CountdownBanner;
