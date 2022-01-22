import axios from "axios"
import { AppConstants, ServiceUrl } from "../common/constants"
import { LoginModel } from "../types/login-model";
import { RegisterModel } from "../types/register-model";

class AuthService {
    registerUser(registerModel: RegisterModel) {
        var registerUrl = AppConstants.BaseApiUrl + ServiceUrl.RegisterServiceUrl;

        return axios
            .post(registerUrl, registerModel)
            .then(response => {
                return response.data;
            });
    }

    login(loginModel: LoginModel) {
        var loginUrl = AppConstants.BaseApiUrl + ServiceUrl.LoginServiceUrl;

        return axios
            .post(loginUrl, loginModel)
            .then(response => {
                if (response.data.token) {
                    localStorage.setItem(AppConstants.WatchlistJwtToken, JSON.stringify(response.data));
                }
                return response.data;
            });
    }

    logout() {
        localStorage.removeItem(AppConstants.WatchlistJwtToken);
    }
}

export default new AuthService()