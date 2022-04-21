package de.gasthaushaaghof.gasthaushaaghof.model.google.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class ContactInformationDTO {
    private String formattedAddress;
    private String internationalPhoneNumber;
}
