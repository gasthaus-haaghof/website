import { TokenClass } from "typescript";
import { backendURL } from "../api/config";

const req = <T extends Function, U>(path: string, fun: T, token: string, ...params: any): U => {
    return <U>fun(path, token, ...params);
};

const get = <U>(path: string, token: string): Promise<U> => {
    return fetch(`${backendURL}${path}`, {
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Authentication-Token': token,
        }
    }).then(response => {
        if (!response.ok) {
            const reason = response.json();
            return Promise.reject(reason);
        }

        return response.json();
    });
};

const post = <U>(path: string, token: string, body: any): Promise<U> => {
    return fetch(`${backendURL}${path}`, {
        method: 'POST',
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/json',
            'Authentication-Token': token,
        },
        body: JSON.stringify(body),
    }).then(response => {
        if (!response.ok) {
            const reason = response.json();
            return Promise.reject(reason);
        }

        return response.json();
    });
};

const put = (path: string, body: any) => {

};

const del = (path: string, token: string) => {
    return fetch(`${backendURL}${path}`, {
        method: 'DELETE',
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/json',
            'Authentication-Token': token,
        },
    }).then(response => {
        if (!response.ok) {
            const reason = response.json();
            return Promise.reject(reason);
        }

        return response.json();
    });
};

export const FetchUtils = {
    req,
};

export const Methods = {
    get,
    post,
    put,
    del,
};
