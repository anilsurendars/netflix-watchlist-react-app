import { AppConstants } from "../common/constants";

export default function AuthHeader() :any {
    const jwtToken = localStorage.getItem(AppConstants.WatchlistJwtToken);

    if (jwtToken) {
        let watchlistToken = JSON.parse(jwtToken);

        if (watchlistToken && watchlistToken.token) {
            return { Authorization: 'Bearer ' + watchlistToken.token };
        } else {
            return {};
        }
    }
}