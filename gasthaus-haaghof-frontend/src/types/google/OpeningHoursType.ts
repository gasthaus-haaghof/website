import {OpeningDayType} from "./OpeningDayType";

export interface OpeningHoursType {
    openNow: boolean,
    days: Array<OpeningDayType>,
}
