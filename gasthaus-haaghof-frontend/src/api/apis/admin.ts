import {UserInfoType} from "../../types/UserInfoType";
import {FetchUtils, Methods} from "../../utils/fetchUtils";

const login = (user: UserInfoType): Promise<UserInfoType> => {
    return FetchUtils.req("/authentication/login", Methods.post, user)
};

export const Admin = {
  login,
};
