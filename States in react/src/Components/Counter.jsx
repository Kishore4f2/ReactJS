import { Component } from "react";

class Counter extends Component {
    state = {count:0}

    incrementC = () => {
        this.setState({count:this.state.count+1});
    }
    resetC = () => {
        this.setState({count:0});
    }
    decrementC = () => {
        this.setState({count:this.state.count-1});
    }


  render() {
    return (
    <div>
      <h1>Counter</h1>
      <h1>{this.state.count}</h1>
      <div>
        <button onClick={this.incrementC}>Increment</button><br/> <br/>
        <button onClick={this.resetC}>Reset</button><br/><br/>
        <button onClick={this.decrementC}>Decrement</button>
      </div>
    </div>
    );
  }
}

export default Counter;