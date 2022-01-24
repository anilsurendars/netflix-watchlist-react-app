import { Component, ReactNode } from "react";
import { LoginModel } from "../../types/login-model";
import "bootstrap/dist/css/bootstrap.min.css";
import "./login.css";
export default class Login extends Component {

    render(): ReactNode {
        return (
            <form className="form-signin text-center">
                <div>
                    <img className="mb-4" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSztAuS6STHopGSLUtmi0T1iMTn0jqiF6YZSg&usqp=CAU" alt="" width="72" height="72"></img>
                    <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>
                    <label className="sr-only">Email address</label>
                    <input type="email" id="inputEmail" className="form-control" placeholder="Email address" />
                    <label className="sr-only">Password</label>
                    <input type="password" id="inputPassword" className="form-control" placeholder="Password" />
                    <button className="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
                    <p className="mt-5 mb-3 text-muted">© 2017-2021</p>
                </div>
            </form>
        );
    }
}