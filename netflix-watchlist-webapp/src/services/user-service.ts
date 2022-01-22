import axios from "axios";
import { AppConstants, ServiceUrl } from "../common/constants";
import AuthHeader from "./auth-header";

class UserService {
    getUserByEmail(email: string) {
        const getUserByEmailUrl = AppConstants.BaseApiUrl + ServiceUrl.GetUserByEmail + email
        return axios.get(getUserByEmailUrl, { headers: AuthHeader() })
            .then(response => {
                return response.data;
            });
    }
}

export default new UserService();