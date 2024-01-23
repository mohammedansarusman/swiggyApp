import React from "react";

class MissionClass extends React.Component {
    constructor(props) {
        super(props);
        console.log(props);
        console.log(props.name);

        this.state = {
            since: 2015,
            turnOver: 20000
        }

    }
    render() {
        const { turnOver } = this.state
        return (
            <div>
                <br />
                <h2>{this.props.name}</h2>

                <h1>What’s In Store For The Future?</h1>
                <p>Swiggy has grand plans to be India’s most loved hyperlocal player since {this.state.since} turn over of {turnOver}. <br />
                    It aims to be the most accessible platform on the network - reimagining the meaning of convenience in the country through a variety of service offerings.</p>
                <br />
                <button
                    className="incButton"
                    onClick={
                        ()=>{
                            this.setState({
                                turnOver: this.state.turnOver+1000,
                                since: this.state.since  + 2,
                            })
                        }
                    }   
                >Turn Over </button>

            </div>
        )
    }
}

export default MissionClass;