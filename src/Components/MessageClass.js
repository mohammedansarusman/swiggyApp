import React from "react";

class MessageClass extends React.Component{
    
    constructor(props){
        super(props)
    }

    render(){
        const {m1,m2} = this.props.data;
        return(
            <div>
                <h3>{m1}</h3>
                <span>{m2}</span>
            </div>    
        )
    }
        
    
};

export default MessageClass;