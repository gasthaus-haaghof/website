import { ReviewType } from "../../types/google/ReviewType";
import { OpeningHoursType } from "../../types/google/OpeningHoursType";
import { ContactInformationType } from "../../types/google/ContactInformationType";
import { FetchUtils, Methods } from "../../utils/fetchUtils";

const getReviews = (): Promise<Array<ReviewType>> => {
    return FetchUtils.req("/google/reviews", Methods.get, "undefined");
};

const getOpeningHours = (): Promise<OpeningHoursType> => {
    return FetchUtils.req("/google/opening-hours", Methods.get, "undefined");
};

const getContactInformation = (): Promise<ContactInformationType> => {
    return FetchUtils.req("/google/contact-information", Methods.get, "undefined");
};

export const Google = {
    getReviews,
    getOpeningHours,
    getContactInformation,
};
