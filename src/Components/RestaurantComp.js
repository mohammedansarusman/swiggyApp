import { CON_URL } from "../utils/constants";
import { STAR_LOGO } from "../utils/constants";

const RestaurantComp = (props) =>{
    const {resData}  = props;
    
    const {cloudinaryImageId,name,cuisines,avgRating,areaName} =  resData.info;
    const {slaString} = resData.info.sla;
    return(
        <div className="bg-red flex">
            <div className="res-card-img-div">
                <img src={CON_URL+cloudinaryImageId} className="res-pic"></img>
            </div>
            <div className="details-div">
                <div className="res-card-name-div">
                    <h3 className="res-name">{name}</h3>
                </div>
                <div className="res-card-ratinglogo-rating-minutes">
                    <div className="star-logo-div">
                        <img src={STAR_LOGO}></img>
                    </div>
                    <div className="rating-div">
                        <p className="rating-p">{avgRating}</p>
                    </div>
                    <span>.</span>
                    <div className="duration-div">
                        <p>{slaString}</p>
                    </div>
                </div>
                <div className="cuisines-div">
                    <p className="cuisnes-p">{cuisines.join(",   ")+"..."}</p>
                </div>
                <div className="locality-div">
                    <p>{areaName}</p>
                </div>
            </div>
        </div>
    )
}
export default RestaurantComp;