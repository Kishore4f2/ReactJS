import { Component } from "react";

class DigitalClock extends Component {
    state = {date:new Date()}

    componentDidMount() {
       this.time = setInterval(()=>{
            this.setState({date:new Date()})
        },1000)
    }
    componentWillUnmount() {
        clearInterval(this.time);
    }
    render() {
        return(
            <>
            <h2>{this.state.date.toLocaleTimeString()}</h2>
            </>
        )
    }
}
export default DigitalClock;