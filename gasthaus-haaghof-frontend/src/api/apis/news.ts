import {NewsType} from "../../types/NewsType";
import {FetchUtils, Methods} from "../../utils/fetchUtils";

const getAll = (): Promise<Array<NewsType>> => {
    return FetchUtils.req("/news", Methods.get);
};

const getLatestImportant = (): Promise<NewsType> => {
    return FetchUtils.req("/news/latest-important", Methods.get);
};

const getNewsById = (id: number): Promise<NewsType> => {
    return FetchUtils.req(`/news/${id}`, Methods.get);
};

export const News = {
    getAll,
    getLatestImportant,
    getNewsById,
};
