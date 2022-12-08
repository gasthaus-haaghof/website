import { Moment } from "moment";

export interface NewsType {
    id: number,
    heading: string,
    text: string,
    created_at: Moment | undefined,
    important: boolean,
}
