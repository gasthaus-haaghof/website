import {NewsType} from "../../types/NewsType";
import {backendURL} from "../config";

const getAll = (): Promise<Array<NewsType>> => {
    return fetch(`${backendURL}/news`,
        {
            headers : {
                'Access-Control-Allow-Origin':'*',
            }
        })
        .then(result => result.json());
};

const getLatestImportant = (): Promise<NewsType> => {
    return fetch(`${backendURL}/news/latest-important`,
        {
            headers : {
                'Access-Control-Allow-Origin':'*',
            }
        })
        .then(result => result.json());
};

const getNewsById = (id: number): Promise<NewsType> => {
    return fetch(`${backendURL}/news/${id}`,
        {
            headers : {
                'Access-Control-Allow-Origin':'*',
            }
        })
        .then(response => {
            if (!response.ok) {
                const reason = response.json();
                return Promise.reject(reason);
            }

            return response.json();
        });
};

export const News = {
    getAll,
    getLatestImportant,
    getNewsById,
};
