import { Component } from "react";

class Mode extends Component {
    state = {isLight:true};
    render() {
        return (
            <div className={this.state.isLight?"Light":"Dark"}>
                <h1>{this.state.isLight?"Now it is in Light Mode..!":"It is in Dark Mode"}</h1>
                <button onClick={()=> this.setState({isLight:!this.state.isLight})}>{this.state.isLight?"Dark":"Light"}</button>
            </div>
        )
    }
}
export default Mode;