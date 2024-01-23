import { Link } from "react-router-dom";
import { LOG_URL } from "../utils/constants";
import { useState } from "react";
import useOnlineStatus from "../utils/useOnlineStatus";

const HeaderComponent = () => {
    const [logReactButton,setlogReactButton] = useState('Login')
    const onlinestatus = useOnlineStatus();
    // console.log(typeof(onlinestatus))
    return (
        <div className="flex bg-red-600	">
            <div className="h-10 w-5">
                <img src={LOG_URL}></img>
            </div>
            <div className="">
                <ul className="flex">
                    <li>
                        Online Status:{onlinestatus ? "Online" : "Offline"}
                    </li>                
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact</Link>
                    </li>
                    <li>
                        <Link to="/grocery">Grocery</Link>
                    </li>
                    <li>
                        <a href="/help">Help</a>
                    </li>
                    <button className="log-btn"
                        onClick={() => {
                        return logReactButton==='Login' ? setlogReactButton('Logout') : setlogReactButton('Login')
                        }}>
                        {logReactButton}
                    </button>
                </ul>
            </div>
        </div>
    )
}
export default HeaderComponent;