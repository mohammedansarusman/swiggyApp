import { Link } from "react-router-dom";
import { LOG_URL } from "../utils/constants";
import { useState } from "react";
import useOnlineStatus from "../utils/useOnlineStatus";

const HeaderComponent = () => {
    const [logReactButton,setlogReactButton] = useState('Login')
    const onlinestatus = useOnlineStatus();
    // console.log(typeof(onlinestatus))
    return (
        <div className="w-full flex bg-yellow-400 justify-center">
            <div className="w-2/5  bg-slate-400">
                {/* <img className="w-20" src={LOG_URL}></img> */}
            </div>
            <div className="w-4/5 bg-orange-500">
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