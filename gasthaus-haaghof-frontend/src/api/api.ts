import {ReviewType} from "../types/ReviewType";
import {UserInfoType} from "../types/UserInfoType";
import {OpeningHoursType} from "../types/OpeningHoursType";
import {MenuType} from "../types/menu/MenuType";

const backendURL = process.env.REACT_APP_API_URL;

const getReviewsFromGoogle = (): Promise<Array<ReviewType>> => {
    return fetch(`${backendURL}/google/reviews`,
      {
        headers : {
            'Access-Control-Allow-Origin':'*',
        }
      })
      .then(result => result.json());
};

const getOpeningHoursFromGoogle = (): Promise<OpeningHoursType> => {
    return fetch(`${backendURL}/google/opening-hours`,
        {
            headers : {
                'Access-Control-Allow-Origin':'*',
            }
        })
        .then(result => result.json());
};

const getMenu = (): Promise<MenuType> => {
    return fetch(`${backendURL}/menu`,
        {
            headers : {
                'Access-Control-Allow-Origin':'*',
            }
        })
        .then(result => result.json());
}

const login = (user: UserInfoType): Promise<UserInfoType> => {
    return fetch(`${backendURL}/authentication/login`,
        {
            method: "post",
            headers : {
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user),
        })
        .then(response => {
            if (!response.ok) {
                const reason = response.json();
                return Promise.reject(reason);
            }

            return response.json();
        });
};

export const Api = {
    getReviewsFromGoogle,
    getOpeningHoursFromGoogle,
    getMenu,
    login,
};
