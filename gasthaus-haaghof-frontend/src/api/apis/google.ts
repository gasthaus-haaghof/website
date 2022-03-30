import {ReviewType} from "../../types/google/ReviewType";
import {OpeningHoursType} from "../../types/google/OpeningHoursType";
import {backendURL} from "../config";
import {ContactInformationType} from "../../types/google/ContactInformationType";

const getReviews = (): Promise<Array<ReviewType>> => {
    return fetch(`${backendURL}/google/reviews`,
        {
            headers : {
                'Access-Control-Allow-Origin':'*',
            }
        })
        .then(result => result.json());
};

const getOpeningHours = (): Promise<OpeningHoursType> => {
    return fetch(`${backendURL}/google/opening-hours`,
        {
            headers : {
                'Access-Control-Allow-Origin':'*',
            }
        })
        .then(result => result.json());
};

const getContactInformation = (): Promise<ContactInformationType> => {
    return fetch(`${backendURL}/google/contact-information`,
        {
            headers : {
                'Access-Control-Allow-Origin':'*',
            }
        })
        .then(result => result.json());
};

export const Google = {
    getReviews,
    getOpeningHours,
    getContactInformation,
};
