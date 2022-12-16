import { NewsType } from "../../types/NewsType";
import { FetchUtils, Methods } from "../../utils/fetchUtils";

const getAll = (): Promise<Array<NewsType>> => {
    return FetchUtils.req("/news", Methods.get, "undefined");
};

const getLatestImportant = (): Promise<NewsType> => {
    return FetchUtils.req("/news/latest-important", Methods.get, "undefined");
};

const getNewsById = (id: number): Promise<NewsType> => {
    return FetchUtils.req(`/news/${id}`, Methods.get, "undefined");
};

const createNews = (token: string, news: NewsType): Promise<NewsType> => {
    return FetchUtils.req("/news", Methods.post, token, news);
};

const deleteNews = (token: string, id: number): boolean => {
    return FetchUtils.req(`/news/${id}`, Methods.del, token);
};

export const News = {
    getAll,
    getLatestImportant,
    getNewsById,
    createNews,
    deleteNews,
};
