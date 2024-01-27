import { Link } from "react-router-dom";
import { LOG_URL } from "../utils/constants";
import { useState } from "react";
import useOnlineStatus from "../utils/useOnlineStatus";

const HeaderComponent = () => {
    const [logReactButton, setlogReactButton] = useState('Login')
    const onlinestatus = useOnlineStatus();
    // console.log(typeof(onlinestatus))
    return (
        <div className="w-full flex justify-center items-center">
            <div className="w-1/5  pt-5 flex justify-center items-center">
                <img className="w-20" src={LOG_URL}></img>
            </div>
            <div className="w-4/5 border-solid border-2 rounded-3xl py-3">
                <ul className="flex justify-around px-10">
                    <li>
                        Online Status:{onlinestatus ? "Online" : "Offline"}
                    </li>
                    <li>
                        <Link className="hover:text-orange-500" to="/">Home</Link>
                    </li>
                    <li>
                        <Link className="hover:text-orange-500" to="/about">About</Link>
                    </li>
                    <li>
                        <Link className="hover:text-orange-500" to="/contact">Contact</Link>
                    </li>
                    <li>
                        <Link className="hover:text-orange-500" to="/grocery">Grocery</Link>
                    </li>
                    <li>
                        <a className="hover:text-orange-500" href="/help">Help</a>
                    </li>
                    <button className="log-btn"
                        onClick={() => {
                            return logReactButton === 'Login' ? setlogReactButton('Logout') : setlogReactButton('Login')
                        }}>
                        {logReactButton}
                    </button>
                </ul>
            </div>
        </div>
    )
}
export default HeaderComponent;