import Slider from "../component/Slider";
import TimeForTravel from "../component/TimeForTravel";
import FirstFlight from "../component/FirstFlight";
import TouristSport from "./TouristSport";


const Home = () => {
    return (
        <div>

            <Slider></Slider>
            <TouristSport></TouristSport>

            <TimeForTravel></TimeForTravel>
            < FirstFlight></FirstFlight>
        </div>
    );
};

export default Home;