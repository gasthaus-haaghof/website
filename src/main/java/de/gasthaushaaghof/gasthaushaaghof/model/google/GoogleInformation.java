package de.gasthaushaaghof.gasthaushaaghof.model.google;

import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import de.gasthaushaaghof.gasthaushaaghof.deserializer.GoogleInformationDeserializer;
import lombok.Builder;
import lombok.Data;

import java.util.List;

@Data
@Builder
@JsonDeserialize(using = GoogleInformationDeserializer.class)
public class GoogleInformation {
    private String formattedAddress;
    private String internationalPhoneNumber;

    private OpeningHours openingHours;
    private List<Review> reviews;
}
