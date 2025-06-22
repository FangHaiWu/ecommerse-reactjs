import BoxIcon from "./BoxIcon/BoxIcon";
import { dataBoxIcon, dataMenu } from "./constant";
import Menu from "./Menu/Menu";
import styles from "./styles.module.scss";
import Logo from "@icons/images/Logo-retina.png";
import reLoadIcon from "@icons/svgs/rlIcon.svg";
import heartIcon from "@icons/svgs/heart.svg";
import cartIcon from "@icons/svgs/cart.svg";
function Header() {
    const { containerBoxIcon, containerMenu, containerHeader, containerBox, container } = styles;
    return (
        <div className={container}>
            <div className={containerHeader}>
                <div className={containerBox}>
                    <div className={containerBoxIcon}>
                        {dataBoxIcon.map((item, index) => (
                            <BoxIcon key={index} type={item.type} href={item.href} />
                        ))}
                    </div>
                    <div className={containerMenu}>
                        {dataMenu.slice(0, 3).map((item, index) => (
                            <Menu key={index} content={item.content} />
                        ))}
                    </div>
                </div>
                <div>
                    <img src={Logo} alt="" style={{ width: "153px" }} />
                </div>
                <div className={containerBox}>
                    <div className={containerMenu}>
                        {dataMenu.slice(3, dataMenu.length).map((item, index) => (
                            <Menu key={index} content={item.content} />
                        ))}
                    </div>
                    <div className={containerBoxIcon}>
                        <img src={reLoadIcon} alt="" style={{ width: "15px", height: "15px" }} />
                        <img src={heartIcon} alt="" style={{ width: "15px", height: "15px" }} />
                        <img src={cartIcon} alt="" style={{ width: "15px", height: "15px" }} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;
