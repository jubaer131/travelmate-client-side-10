import Slider from "../component/Slider";
import TimeForTravel from "../component/TimeForTravel";
import FirstFlight from "../component/FirstFlight";
import TouristSport from "./TouristSport";
import Countries from "./Countries";
import { Helmet } from "react-helmet";
import LastMinuteDeals from "./LastMinuteDeals";
import { Parallax } from 'react-parallax';
import BucketList from "../BucketList";


const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Home</title>
            </Helmet>
            <Slider></Slider>
            <TouristSport></TouristSport>
            <div>
                <Parallax blur={{ min: -15, max: 15 }} bgImage="https://i.ibb.co/yFxQ28v/close-up-man-smiling-nature-23-2150771119.jpg" bgImageAlt="the cat" strength={250}>
                    <LastMinuteDeals></LastMinuteDeals>
                </Parallax>

            </div>
            <div className="bg-white ">
                <BucketList></BucketList>
            </div>

            <Countries></Countries>
            <TimeForTravel></TimeForTravel>
            < FirstFlight></FirstFlight>
        </div>
    );
};

export default Home;