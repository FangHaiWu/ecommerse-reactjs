import React, { useEffect, useState } from "react";
import styles from "./styles.module.scss"
const CountdownTimer = ({ targetDate }) => {
    const {time, title} = styles;
    const calculateTimeLeft = () => {
        const diff = +new Date(targetDate) - +new Date();
        let timeLeft = {};
        if (diff > 0) {
            timeLeft = {
                Days: Math.floor(diff / (1000 * 60 * 60 * 24)),
                Hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
                Mins: Math.floor(((diff / 1000) * 60) % 60),
                Secs: Math.floor((diff / 1000) % 60),
            };
        }

        return timeLeft;
    };
    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    useEffect(() => {
        const timer = setInterval(() => setTimeLeft(calculateTimeLeft()), 1000);
        return () => clearInterval(timer);
    });

    const formatNumber = (number) => String(number).padStart(2, "0");
    const timeComponent = [];
    Object.keys(timeLeft).forEach((interval) => {
        if (timeLeft[interval] !== undefined) {
            timeComponent.push(
                <span className={time} key={interval}>
                    {formatNumber(timeLeft[interval])} <span className={title}> {interval} </span>{" "}
                </span>
            );
        }
    });
    return timeComponent;
};

export default CountdownTimer;
