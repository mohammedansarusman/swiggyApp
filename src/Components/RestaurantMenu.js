import { useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import Error from "./Error";
import { STAR_LOGO } from "../utils/constants";
import img2 from "../logos/down.png";
import img1 from "../logos/up.png";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {

  const [flag, setFlag] = useState(false);
  const [arrow, setArrow] = useState(img2);
  const { resId } = useParams();

  const resInfo = useRestaurantMenu(resId);

  console.log('resInfo:', resInfo);
  itemCard =
    resInfo?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR.cards[2]?.card?.card?.itemCards ||
    resInfo?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR.cards[2]?.card?.card?.categories[0].itemCards

  console.log('itemCard:', itemCard);




  if (resInfo == null) {
    return <Shimmer />
  }
  let { name, id, cuisines, avgRating, areaName } = resInfo?.data?.cards[0]?.card?.card?.info;

  // console.log('What inside - name,id,cuisine...', name);

  return (

    <div className="flex flex-col items-center">
      {/* Orange Bar */}
      <div className="bg-orange-500 p-7 mt-3 w-[100%] flex items-start justify-center"></div>
      <div className="w-[60%] bg-pink-300">
        <div className="pt-[50px]">
            <h3 className="font-semibold">{name}</h3>
            <p className="font-sans text-sm">{cuisines.join(", ")}</p>
            <p className="font-sans text-sm">{areaName}</p>
        </div> 
        <div className="menu-second-session">
          <div className="recommend flex justify-between pt-[50px]">
            <div className="recommend-head">
              <h3>Recommeded</h3>
              <h3>{"(" + itemCard.length + ")"}</h3>
            </div>
            {/* arrow logo */}
            <div className="w-10 h-10 outline-dashed">
              <img
                className="logo-div"
                src={arrow}
                onClick={
                  () => {
                    console.log(flag);
                    flag === false ? setFlag(true) : setFlag(false);
                    arrow === img2 ? setArrow(img1) : setArrow(img2);

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
                    <li key={item.card.info.id}>{flag && item.card.info.name}</li>
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
