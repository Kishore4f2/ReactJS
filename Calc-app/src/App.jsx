import Calculator from "./Components/Calculator";
import { Component } from "react";
import Mode from "./Components/Mode";
import "./App.css";

class App extends Component {
  render() {
    return(
      <Mode>
      <Calculator/>
      </Mode>
    )
  }
}
export default App;