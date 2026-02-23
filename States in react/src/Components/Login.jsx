import { Component } from "react";

class Login extends Component {
    state = {isLogin:true};
    render(){
        return(
            <div className={this.state.isLogin?"Login":"Logout"}>
                <h1>{this.state.isLogin?"You are Logged in Successfully.":"Now You are Logged out."}</h1>
                <button onClick={()=> this.setState({isLogin:!this.state.isLogin})}>{this.state.isLogin?"Logout":"Login"}</button>
            </div>
        )
    }
}
export default Login;