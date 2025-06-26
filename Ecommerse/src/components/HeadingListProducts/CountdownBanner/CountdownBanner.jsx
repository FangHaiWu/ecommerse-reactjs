import React from "react";
import styles from "./styles.module.scss";
import CountdownTimer from "@components/CountdownTimer/CountdownTimer";


const CountdownBanner = () => {
    const { containerBanner, countdownTimeDisplay } = styles;
    const targetDate = "2025-12-31T00:00:00Z";
    return (
        <div className={containerBanner}>
            <div className={countdownTimeDisplay}>
                <CountdownTimer targetDate={targetDate}/>
            </div>
            <div>The classics make a comeback</div>
            <button>Buy now</button>
        </div>
    );
};

export default CountdownBanner;
