import { MenuType } from "../../types/menu/MenuType";
import { FetchUtils, Methods } from "../../utils/fetchUtils";

const get = (): Promise<MenuType> => {
    return FetchUtils.req("/menu", Methods.get, "undefined");
};

export const Menu = {
    get,
};
