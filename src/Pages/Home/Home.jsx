import Featured from "./Featured";
import Promotions from "./Promotions";
import Personalized from "./Personalized";
import Banner from "./banner";


const Home = () => {
    return (
        <>
            <Banner></Banner>
            <Featured></Featured>
            <Promotions></Promotions>
            <Personalized></Personalized>
        </>
    );
};

export default Home;