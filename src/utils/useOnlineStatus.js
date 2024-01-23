import { useEffect, useState } from "react";

const useOnlineStatus = () => {
    const [onlineStatus,setOnlineStatus] = useState(true)

    useEffect(()=>{
    window.addEventListener("offline",()=>{setOnlineStatus(false)});
    window.addEventListener("online",()=>{setOnlineStatus(true)});
    console.log('use effect called');
    console.log('useState variable onlineStatus is:',onlineStatus);


    },[]);
    console.log('exit useOnlineStatus')
    return onlineStatus;
}
export default useOnlineStatus;