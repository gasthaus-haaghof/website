package de.gasthaushaaghof.gasthaushaaghof.model.contactinformation;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class ContactInformationResponse {
    private String statusText;
    private Long status;
}
