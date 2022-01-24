import { Component, ReactNode } from "react";

export default class RegisterUser extends Component {
    render(): ReactNode {
        return (
            <div className="container">
                <div className="row">
                    <h4 className="mb-3">Register</h4>
                    <form className="needs-validation">
                        <div className="row">
                            <div className="mb-3">
                                <label >Username</label>
                                <div className="input-group">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text">@</span>
                                    </div>
                                    <input type="text" className="form-control" id="username" placeholder="Username" />
                                    <div className="invalid-feedback">
                                        Your username is required.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}