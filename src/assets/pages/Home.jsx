import Slider from "../component/Slider";
import TouristSport from "./TouristSport";
import Countries from "./Countries";
import { Helmet } from "react-helmet";
import LastMinuteDeals from "./LastMinuteDeals";
import { Parallax } from 'react-parallax';
import BucketList from "../BucketList";
import SailingThailand from "./SailingThailand";
import Explore from "./Explore";
import TeemCard from "./TeemCard";


const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Home</title>
            </Helmet>
            <Slider></Slider>
            <TouristSport></TouristSport>
            <div>
                <Parallax blur={{ min: -15, max: 15 }} bgImage="https://i.ibb.co/12vnmK8/lohri-celebration-india-23-2151150911.jpg" bgImageAlt="the cat" strength={600}>
                    <LastMinuteDeals></LastMinuteDeals>
                </Parallax>

            </div>
            <div className="bg-white ">
                <BucketList></BucketList>
            </div>
            <div >
                <Parallax blur={{ min: -10, max: 20 }} bgImage="https://i.ibb.co/bJWYd17/group-people-sitting-by-sea-enjoying-beautiful-view-sunset-181624-14032.jpg" bgImageAlt="the cat" strength={600}>
                    <SailingThailand></SailingThailand>
                </Parallax>
            </div>
            <Countries></Countries>
            <div className="mt-28 mb-20">
                <Parallax blur={{ min: -15, max: 15 }} bgImage="https://i.ibb.co/qshQ6z5/Blue-and-White-Simple-Health-Medical-Banner-Landscape-3.png" bgImageAlt="the cat" strength={500}>
                    <Explore></Explore>
                </Parallax>
            </div>
            <div>
                <TeemCard></TeemCard>
            </div>

        </div>
    );
};

export default Home;