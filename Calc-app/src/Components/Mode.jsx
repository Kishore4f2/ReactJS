import { Component } from "react";

class Mode extends Component {

    state = {
        darkMode:true
    };

    toggleMode = () =>{
        this.setState(prev => ({darkMode:!prev.darkMode}))
    }

    render(){
        const {darkMode} = this.state;

        return(
            <div className={darkMode ? "app dark" : "app light"}>

                <div className="mode-container">
                    <button className="mode-btn" onClick={this.toggleMode}>
                        {darkMode ? "🌙 Dark" : "☀️ Light"}
                    </button>
                </div>

                {this.props.children}

            </div>
        )
    }
}

export default Mode;