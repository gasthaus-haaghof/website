import {FetchUtils, Methods} from "./fetchUtils";

const a = () => {
    FetchUtils.req("/abc", Methods.get, 0, 23, "hallo!", "ab")
};

export const A= {
    a,
}
