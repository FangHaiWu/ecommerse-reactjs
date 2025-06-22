import React from "react";
import styles from "../styles.module.scss";
import fbIcon from "@icons/svgs/fbIcon.svg";
import insIcon from "@icons/svgs/inIcon.svg";
import ytbIcon from "@icons/svgs/ytbIcon.svg";
const BoxIcon = ({ type, href }) => {
    const { boxIcon } = styles;
    const hanldeRenderIcon = (type) => {
        switch (type) {
            case "fb":
                return fbIcon;
            case "ins":
                return insIcon;
            case "ytb":
                return ytbIcon;
        }
    };
    return (
        <div className={boxIcon}>
            <img src={hanldeRenderIcon(type)} alt="" />
        </div>
    );
};

export default BoxIcon;
