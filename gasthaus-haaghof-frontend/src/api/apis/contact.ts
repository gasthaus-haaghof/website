import { ContactInfo } from "../../types/contact-info/ContactInfo";
import { FetchUtils, Methods } from "../../utils/fetchUtils";
import { ContactInfoResponse } from "../../types/contact-info/ContactInfoResponse";

const contact = (contactInfo: ContactInfo): Promise<ContactInfoResponse> => {
    return FetchUtils.req("/contact", Methods.post, "undefined", contactInfo);
};

export const Contact = {
    contact,
};
