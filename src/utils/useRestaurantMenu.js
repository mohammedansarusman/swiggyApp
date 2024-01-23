import { MENU_API } from "./constants";
import { useEffect,useEffect, useState } from "react";

const useTest = (x) => {
    const [testValue,setTestValue] = useState(null);

    console.log('return from useTest hook', x)

    useEffect(()=>{getData()}, []);

    const getData = async() => {
        console.log(MENU_API);
        const response = await fetch(MENU_API+x);
        const json = await response.json();
        setTestValue(json);
        

    }

    return testValue
}
export default useTest;