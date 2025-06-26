import Header from "@components/Header/Header";
import Banner from "@components/Banner/Banner";
import styles from "./styles.module.scss";
import Info from "../Info/Info";
import AdvanceHeadling from "../AdvanceHeadling/AdvanceHeadling";
import HeadingListProducts from "../HeadingListProducts/HeadingListProducts";
const HomePage = () => {
    const { container } = styles;
    return (
        <div className={container}>
            <Header />
            <Banner />
            <Info />
            <AdvanceHeadling />
            <HeadingListProducts />
        </div>
    );
};

export default HomePage;
