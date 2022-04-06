import {backendURL} from "../api/config";

const req = <T extends Function, U> (path: string, fun: T, ...params: any): U => {
    return <U>fun(path, ...params);
};

const get = <U>(path: string): Promise<U> => {
    return fetch(`${backendURL}${path}`, {
        headers : {
            'Access-Control-Allow-Origin':'*',
        }
    }).then(result => result.json());
};

const post = <U>(path: string, body: any): Promise<U> => {
    return fetch(`${backendURL}${path}`, {
        method: 'POST',
        headers : {
            'Access-Control-Allow-Origin':'*',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
    }).then(result => result.json());
};

const put = (path: string, body: any) => {

};

const del = (path: string) => {

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
