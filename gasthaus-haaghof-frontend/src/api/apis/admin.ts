import { NewsType } from "../../types/NewsType";
import { UserInfoType } from "../../types/UserInfoType";
import { FetchUtils, Methods } from "../../utils/fetchUtils";

const login = (user: UserInfoType): Promise<string> => {
  return FetchUtils.req("/authentication/login", Methods.post, "undefined", user)
};

const getExistingUsers = (token: string): Promise<UserInfoType[]> => {
  return FetchUtils.req("/admin/users", Methods.get, token);
};

const createUser = (token: string, user: UserInfoType): Promise<UserInfoType> => {
  return FetchUtils.req("/admin/users", Methods.post, token, user);
};

export const Admin = {
  login,
  getExistingUsers,
  createUser,
};
