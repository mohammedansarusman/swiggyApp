import { CON_URL } from "../utils/constants";
import { STAR_LOGO } from "../utils/constants";

const RestaurantComp = (props) =>{
    const {resData}  = props;
    
    const {cloudinaryImageId,name,cuisines,avgRating,areaName} =  resData.info;
    const {slaString} = resData.info.sla;
    return(
    <div className="flex-wrap w-[100%] bg-slate-400">
        <div className="w-[300px] h-[300px]">
            <div className="">
                <img className="w-[250px] h-[150px] object-cover rounded-xl" src={CON_URL+cloudinaryImageId} ></img>
            </div>
            
            <div className="w-[250px] h-[150px]">
                
                {/* name of restaurant */}
                <div className="w-[250px] h-[35px] overflow-hidden">
                    <h3 className="p-[10px] font-semibold ml-3">{name}</h3>
                </div>

                {/* star logo, rating number and duration of delivery */}
                <div className="flex ml-3 items-center font-semibold"> 
                    <div className="w-100 h-8">
                        <img className="w-7" src={STAR_LOGO}></img>
                    </div>
                    <div className="rating-div">
                        <p className="">{avgRating}</p>
                    </div>
                    <span>.</span>
                    <div className="ml-3">
                        <p>{slaString}</p>
                    </div>
                </div>

                {/* cuisines */}
                <div className="overflow-hidden w-[200px] h-6 text-gray-500 ml-4">
                    <p className="text-sm w-[200px] h-6 truncate">{cuisines.join(",  ")}</p>
                </div>
                <p></p>
                {/* area name */}
                <div className="text-sm w-[200px] h-6 text-gray-500 ml-4">
                    <p>{areaName}</p>
                </div>
            </div>
        </div>
    </div>
    )
}
export default RestaurantComp;