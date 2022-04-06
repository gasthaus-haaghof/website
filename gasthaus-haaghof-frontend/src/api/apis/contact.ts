import {ContactInfo} from "../../types/ContactInfo";
import {FetchUtils, Methods} from "../../utils/fetchUtils";

const contact = (contactInfo: ContactInfo) => {
    return FetchUtils.req("/contact", Methods.post, contactInfo);
};

export const Contact = {
    contact,
};
