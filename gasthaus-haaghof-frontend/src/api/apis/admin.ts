import {UserInfoType} from "../../types/UserInfoType";
import {backendURL} from "../config";

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

export const Admin = {
  login,
};
