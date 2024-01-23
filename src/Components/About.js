import Mission from "./Mission";
import MissionClass from "./MissionClass";
import messageData from "../utils/mockData";
import MessageClass from "./MessageClass";

const About=()=>{
    return(
        <div className="about-div">
            <h1>Mission</h1>
            <Mission />
            <MissionClass name = {"Swiggy (Data from Props)"}/>
            <MessageClass data = {messageData} />

        </div>
    )
};

export default About;
