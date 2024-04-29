import Slider from "../component/Slider";
import TimeForTravel from "../component/TimeForTravel";
import FirstFlight from "../component/FirstFlight";
import TouristSport from "./TouristSport";
import Countries from "./Countries";


const Home = () => {
    return (
        <div>

            <Slider></Slider>
            <TouristSport></TouristSport>
            <Countries></Countries>
            <TimeForTravel></TimeForTravel>
            < FirstFlight></FirstFlight>
        </div>
    );
};

export default Home;