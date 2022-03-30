package de.gasthaushaaghof.gasthaushaaghof.model.google;

import lombok.Builder;
import lombok.Data;

@Builder
@Data
public class ContactInformation {
    private String formattedAddress;
    private String internationalPhoneNumber;
}
