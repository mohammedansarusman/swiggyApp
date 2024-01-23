import React from "react";

class ContactClass extends React.Component{
    constructor(props){
        super(props)
        // console.log(props)
        this.state = {
            loc :"kunnamkulam",
            pid :"1000"

        }
    }
    async componentDidMount(){
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const json = await data.json();
        console.log(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants[2].info);
        this.setState({
            loc :json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants[2].info.locality,
            pid: json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants[2].info.parentId
        })
        // console.log(json);

    }
    componentDidUpdate(){
        console.log('component did updated')
    }
    render(){
        const {name,location,contactNo,email} = this.props.data
        const {loc,pid} = this.state

        return (
            <div>
                {console.log('test')}
                <h3>{name}</h3>
                <h3>{location}</h3>
                <h3>{contactNo}</h3>
                <h3>{email}</h3>
                
                <h5>{loc}</h5>
                <h5>{pid}</h5>


            </div>
        )
    }


}

export default ContactClass;
