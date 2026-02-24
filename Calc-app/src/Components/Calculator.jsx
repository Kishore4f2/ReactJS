import { Component } from "react";

class Calculator extends Component {

    state = { value:"" };

    onBtn = (event) => {
        let val = event.target.textContent;

        if(val === "x"){
            val = "*";
        }

        this.setState({value:this.state.value + val});
    };

    onAllClearBtn = () => {
        this.setState({value:""});
    };

    onDeleteBtn = () => {
        this.setState({
            value:this.state.value.slice(0,this.state.value.length-1)
        });
    };

    onEqualBtn = () => {
        try{
            this.setState({value:String(eval(this.state.value))});
        }catch{
            this.setState({value:"Error"});
        }
    };

    render(){
        return(
            <div className="calculator">

                <div className="display">
                    {this.state.value}
                </div>

                <div className="row">
                    <button onClick={this.onAllClearBtn}>AC</button>
                    <button onClick={this.onBtn}>%</button>
                    <button onClick={this.onDeleteBtn}>DEL</button>
                    <button onClick={this.onBtn}>/</button>
                </div>

                <div className="row">
                    <button onClick={this.onBtn}>7</button>
                    <button onClick={this.onBtn}>8</button>
                    <button onClick={this.onBtn}>9</button>
                    <button onClick={this.onBtn}>*</button>
                </div>

                <div className="row">
                    <button onClick={this.onBtn}>4</button>
                    <button onClick={this.onBtn}>5</button>
                    <button onClick={this.onBtn}>6</button>
                    <button onClick={this.onBtn}>-</button>
                </div>

                <div className="row">
                    <button onClick={this.onBtn}>1</button>
                    <button onClick={this.onBtn}>2</button>
                    <button onClick={this.onBtn}>3</button>
                    <button onClick={this.onBtn}>+</button>
                </div>

                <div className="row">
                    <button onClick={this.onBtn}>00</button>
                    <button onClick={this.onBtn}>0</button>
                    <button onClick={this.onBtn}>.</button>
                    <button onClick={this.onEqualBtn}>=</button>
                </div>

            </div>
        );
    }
}

export default Calculator;