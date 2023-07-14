import { Component } from "react";

class Classhandler extends Component{
    classEvent = ()=>{

        console.log("class EVENT");
    }
    render(){
        return(
            <>
                <h2>Hello i am class comp</h2>

                <button onClick={this.classEvent}> class Event</button>
            </>
        )
    }
}
export default Classhandler;