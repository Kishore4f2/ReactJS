import { Component } from "react";
import "../App.css";

class Stopwatch extends Component {

    state = {
        date: new Date(),
        running: true
    };

    componentDidMount() {
        this.startTimer();
    }

    componentWillUnmount() {
        clearInterval(this.time);
    }

    startTimer = () => {
        this.time = setInterval(() => {
            this.setState({ date: new Date(), running: true });
        }, 1000);
    };

    onStop = () => {
        clearInterval(this.time);
        this.setState({ running: false });
    };

    onStart = () => {
        if (!this.state.running) {
            this.startTimer();
        }
    };

    render() {
        return (
            <div className="app-container">
                <div className="stopwatch-card">

                    <h2 className="time-text">
                        {this.state.date.toLocaleTimeString()}
                    </h2>

                    <div className="btn-group">
                        <button className="btn btn-stop" onClick={this.onStop}>
                            Stop
                        </button>

                        <button className="btn" onClick={this.onStart}>
                            Start
                        </button>
                    </div>

                </div>
            </div>
        );
    }
}

export default Stopwatch;