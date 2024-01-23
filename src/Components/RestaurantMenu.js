import { useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import Error from "./Error";
import { STAR_LOGO } from "../utils/constants";
import img2 from "../logos/down.png";
import img1 from "../logos/up.png";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {

  const [flag,setFlag] = useState(false);
  const [arrow,setArrow]  = useState(img2);
  const { resId } = useParams();

  const resInfo = useRestaurantMenu(resId);

  console.log('resInfo:',resInfo);
  itemCard=
        resInfo?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR.cards[2]?.card?.card?.itemCards ||
        resInfo?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR.cards[2]?.card?.card?.categories[0].itemCards

      console.log('itemCard:',itemCard);




if(resInfo==null){
  return <Shimmer />
}
let { name, id, cuisines, avgRating, areaName } = resInfo?.data?.cards[0]?.card?.card?.info;

  // console.log('What inside - name,id,cuisine...', name);

  return(
   
    <div className="menu-page-div">
    <div className="orange-bar"></div>

      <div className="menu-page">
        <div className="menu-first-session">
          <div className="sub-menu-one">
            <h1>{name}</h1>
            <h3>{cuisines.join(", ")}</h3>
            <h3>{areaName}</h3>
          </div>
        </div>
        <div className="menu-second-session">
          <div className="recommend">
            <div className="recommend-head">
              <h3>Recommeded</h3>
              <h3>{"("+itemCard.length+")"}</h3>
            </div>
            <div className="arrow-log">
              <img 
                className="logo-div"
                src={arrow}
                onClick={
                  ()=>{
                    console.log(flag);
                    flag===false ? setFlag(true) : setFlag(false);
                    arrow===img2 ? setArrow(img1) : setArrow(img2);

                  }
                }
                ></img>
                
            </div>
          </div>
          <div>
            <ul>
              {itemCard.map(
                (item) => {
                  return (
                    <li key={item.card.info.id}>{ flag && item.card.info.name}</li>
                  )
                }
              )}
            </ul>
            {/* <h1>hello</h1> */}
          </div> 
        </div>

        {/* // in first session requires */}
        {/* // name, cuisines, city, feeDetails.fees.message, resInfo,totalRatingsString */}
         
      </div>
    </div>

  );
};

export default RestaurantMenu;
