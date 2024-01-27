import RestaurantComp from "./RestaurantComp";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const BodyComponent = () => {

  let [listOfRestaurant, setlistOfRestaurant] = useState([]);
  let [searchText, setsearchText] = useState("");
  let [filteredRes, setfilteredRes] = useState([]);

  const status= useOnlineStatus();
   


  console.log('start');
  

  const fetchData = async () => {
    try {
      const data = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      );

      const json = await data.json();
      console.log(json)
      setlistOfRestaurant(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
      setfilteredRes(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
      console.log('filtered res');
      console.log('hello', filteredRes);
    }
    catch (e) {
      console.log('error callec', e)
    }
  };

  useEffect(
    () => {
      fetchData();
      console.log('use effect called in body component');
    }, []);

        
  if (status === false) return <h1>InternetFailed</h1>
  
    
  return (
    <div className="">
      {console.log('rendering body compeonent')}

      <div className="bg-orange-500 p-7 mt-3 flex items-start justify-center">
        {/* <h1>{status ? "online" : "offline"}</h1> */}
        <button
          className="
          w-25 h-10 bg-white px-5 rounded-full 
          border-double border-gray-400 border-4 hover:text-orange-500
          transition duration-300 ease-in-out"
          onClick={() => {
            setfilteredRes(
              listOfRestaurant.filter((res) => res.info.avgRating >= 4.3)
            );
          }}
        >
          Top Restaurants
        </button>
        {/* for search text */}
        <input
          type="text"
          className="ml-20 mr-10 pl-5 h-10 w-[300px] rounded-md"
          placeholder="Enter your text"
          value={searchText}
          onChange={(e) => {
            setsearchText(e.target.value);
          }}
        ></input>

        <button
          className="w-25 h-10 bg-white px-5 rounded-full 
          border-double border-gray-400 border-4 hover:text-orange-500
          transition duration-300 ease-in-out"
          onClick={() => {

            setfilteredRes(
              listOfRestaurant.filter(
                (res) => {
                  return res.info.name.toLowerCase().includes(searchText.toLowerCase());
                }
              )
            );
          }
          }
        >
          Search
        </button>
      </div>
      {console.log('list of restaurants')}
      {console.log(listOfRestaurant)};

      {filteredRes.map((res) => (
        <Link className="reslink" to={"/restaurant/" + res.info.id} key={res.info.id}><RestaurantComp resData={res} /></Link>
      ))}
    </div>
  );// end of return
};// end of body component
export default BodyComponent;
