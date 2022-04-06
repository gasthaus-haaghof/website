package de.gasthaushaaghof.gasthaushaaghof.model.contactinformation;

import lombok.Builder;
import lombok.Data;

@Builder
@Data
public class ContactInformation {
    private String formattedAddress;
    private String internationalPhoneNumber;
}
