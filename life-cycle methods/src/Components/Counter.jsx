import { Component } from "react";

class Counter extends Component {
    constructor(props) {
        super(props)
        this.state = {count:0};
        console.log("Constructor method calling...")
    }

    componentDidMount = () => {
        console.log("Mount method");
    }
    componentDidUpdate = () => {
        console.log("Update method");
    }
    componentWillUnmount = () => {
        console.log("Unmount method");
    }
    render() {
        console.log("Render calling...")
        return(
            <div>
                <h1>{this.state.count}</h1>
                <button onClick={()=>this.setState({count:this.state.count+1})}>+</button>
            </div>
        )
    }
}
export default Counter;