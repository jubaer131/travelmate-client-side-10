import Slider from "../component/Slider";
import TimeForTravel from "../component/TimeForTravel";
import FirstFlight from "../component/FirstFlight";
import TouristSport from "./TouristSport";
import TouristForm from "../shardComponent/TouristForm";

const Home = () => {
    return (
        <div>

            <Slider></Slider>
            <TouristSport></TouristSport>
            <TouristForm></TouristForm>
            <TimeForTravel></TimeForTravel>
            < FirstFlight></FirstFlight>
        </div>
    );
};

export default Home;