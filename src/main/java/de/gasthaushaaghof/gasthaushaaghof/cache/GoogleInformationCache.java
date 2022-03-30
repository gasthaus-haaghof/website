package de.gasthaushaaghof.gasthaushaaghof.cache;

import de.gasthaushaaghof.gasthaushaaghof.annotation.CacheLayer;
import de.gasthaushaaghof.gasthaushaaghof.model.google.ContactInformation;
import de.gasthaushaaghof.gasthaushaaghof.model.google.GoogleInformation;
import de.gasthaushaaghof.gasthaushaaghof.model.google.OpeningHours;
import de.gasthaushaaghof.gasthaushaaghof.model.google.Review;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.scheduling.annotation.EnableScheduling;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.web.reactive.function.client.WebClient;

import java.util.List;

@CacheLayer
@EnableScheduling
public class GoogleInformationCache {
    private final WebClient webClientForGoogleRequests;
    private final String placeId;
    private final String apiKey;

    private GoogleInformation currentInformation;

    private GoogleInformationCache(
            WebClient webClientForGoogleRequests,
            @Value("${spring.config.api.google.placeid}") String placeId,
            @Value("${spring.config.api.google.key}") String apiKey) {

        this.webClientForGoogleRequests = webClientForGoogleRequests;
        this.placeId = placeId;
        this.apiKey = apiKey;

        // Initial request on startup, before scheduling takes place
        fetchInformationFromGoogleAPI();
    }

    @Scheduled(cron = "0 1 1 * * ?") // every day (every 24h) at 1:01am
    private void fetchInformationFromGoogleAPI() {
        currentInformation = webClientForGoogleRequests
                .get()
                .uri(uriBuilder -> uriBuilder
                        .path("/maps/api/place/details/json")
                        .queryParam("placeid", placeId)
                        .queryParam("key", apiKey)
                        .queryParam("language", "de")
                        .build()
                )
                .retrieve()
                .bodyToMono(GoogleInformation.class)
                .block();
    }

    public GoogleInformation getCurrentInformation() {
        return currentInformation;
    }

    public List<Review> getReviews() {
        return currentInformation.getReviews();
    }

    public OpeningHours getOpeningHours() {
        return currentInformation.getOpeningHours();
    }

    public ContactInformation getContactInformationFromGoogle() {
        return ContactInformation.builder()
                .formattedAddress(currentInformation.getFormattedAddress())
                .internationalPhoneNumber(currentInformation.getInternationalPhoneNumber())
                .build();
    }
}
