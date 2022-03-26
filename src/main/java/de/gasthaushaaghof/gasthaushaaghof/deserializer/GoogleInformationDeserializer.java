package de.gasthaushaaghof.gasthaushaaghof.deserializer;

import com.fasterxml.jackson.core.JsonParser;
import com.fasterxml.jackson.databind.DeserializationContext;
import com.fasterxml.jackson.databind.JsonDeserializer;
import com.fasterxml.jackson.databind.JsonNode;
import de.gasthaushaaghof.gasthaushaaghof.model.google.GoogleInformation;
import de.gasthaushaaghof.gasthaushaaghof.model.google.OpeningDay;
import de.gasthaushaaghof.gasthaushaaghof.model.google.OpeningHours;
import de.gasthaushaaghof.gasthaushaaghof.model.google.Review;

import java.io.IOException;
import java.util.List;
import java.util.stream.StreamSupport;

public class GoogleInformationDeserializer extends JsonDeserializer<GoogleInformation> {
    @Override
    public GoogleInformation deserialize(JsonParser jsonParser, DeserializationContext context) throws IOException {
        JsonNode node = jsonParser.readValueAsTree();

        var formattedAddress = node.get("result")
                .get("formatted_address")
                .asText();

        var internationalPhoneNumber = node.get("result")
                .get("international_phone_number")
                .asText();

        var openingHours = buildOpeningHours(node);
        var reviews = computeReviews(node);

        return GoogleInformation.builder()
                .formattedAddress(formattedAddress)
                .internationalPhoneNumber(internationalPhoneNumber)
                .openingHours(openingHours)
                .reviews(reviews)
                .build();
    }

    private OpeningHours buildOpeningHours(JsonNode startingPoint) {
        var isOpenNow = startingPoint.get("result")
                .get("opening_hours")
                .get("open_now")
                .asBoolean();

        var weekdays = startingPoint.get("result")
                .get("opening_hours")
                .get("weekday_text");

        var openingDays = StreamSupport.stream(weekdays.spliterator(), false)
                .map(currentText -> new OpeningDay(currentText.asText()))
                .toList();

        return OpeningHours.builder()
                .openNow(isOpenNow)
                .days(openingDays)
                .build();
    }

    private List<Review> computeReviews(JsonNode startingPoint) {
        var reviews = startingPoint.get("result")
                .get("reviews");

        return StreamSupport.stream(reviews.spliterator(), false)
                .map(this::toReview)
                .toList();
    }

    private Review toReview(JsonNode node) {
        var authorName = anonymize(node.get("author_name").asText());

        var rating = node.get("rating")
                .asLong();

        var timeDescription = node.get("relative_time_description")
                .asText();

        var text = node.get("text")
                .asText();


        return Review.builder()
                .authorName(authorName)
                .rating(rating)
                .timeDescription(timeDescription)
                .text(text)
                .build();
    }

    private String anonymize(String name) {
        var names = name.split(" ");
        if (names.length <= 1) {
            return names[0];
        }

        return String.format("%s %s.", names[0],  names[1].charAt(0));
    }
}
