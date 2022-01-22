import { Component, ReactNode } from "react";

export default class Login extends Component {
    render(): ReactNode {
        return (
            <div className="col-md-12">
                <div className="card card-container">
                    <img
                        src="//ssl.gstatic.com/accounts/ui/avatar_2x.png"
                        alt="profile-img"
                        className="profile-img-card"
                    />
                </div>
            </div>
        );
    }
}