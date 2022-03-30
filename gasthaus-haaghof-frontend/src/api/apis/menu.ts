import {MenuType} from "../../types/menu/MenuType";
import {backendURL} from "../config";

const get = (): Promise<MenuType> => {
    return fetch(`${backendURL}/menu`,
        {
            headers : {
                'Access-Control-Allow-Origin':'*',
            }
        })
        .then(result => result.json());
};

export const Menu = {
    get,
};
