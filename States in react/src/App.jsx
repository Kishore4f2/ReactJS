import { Component } from "react";
import  Counter  from "./Components/Counter";
import Mode from "./Components/Mode";
import Hide from "./Components/Hide";
import Login from "./Components/Login";
import "./App.css";

class App extends Component {
  // state = {isShow:true};
  render() {
    
    return (
      <div>
        <Login/>
        {/* {this.state.isShow && <Hide/>}
        <button onClick={()=>this.setState({isShow:!this.state.isShow})}>
          {this.state.isShow?"Hide":"Show"}</button> */}
      </div>
    )
  }
}

export default App;