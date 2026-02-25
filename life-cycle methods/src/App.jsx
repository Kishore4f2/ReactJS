import { Component } from "react";
import Counter from "./Components/Counter";
import DigitalClock from "./Components/DigitalClock";
import Stopwatch from "./Components/Stopwatch";

class App extends Component {
  render(){
    return(
      <div>
      <Stopwatch/>
      </div>
    )
  }
}
export default App;