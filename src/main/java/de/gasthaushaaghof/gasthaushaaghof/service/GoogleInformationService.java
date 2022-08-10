package de.gasthaushaaghof.gasthaushaaghof.service;

import de.gasthaushaaghof.gasthaushaaghof.cache.GoogleInformationCache;
import de.gasthaushaaghof.gasthaushaaghof.model.contactinformation.ContactInformation;
import de.gasthaushaaghof.gasthaushaaghof.model.google.GoogleInformation;
import de.gasthaushaaghof.gasthaushaaghof.model.google.OpeningHours;
import de.gasthaushaaghof.gasthaushaaghof.model.google.Review;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class GoogleInformationService {
    private final GoogleInformationCache googleInformationCache;
    private final VacationService vacationService;

    public GoogleInformation getCurrentInformation() {
        return googleInformationCache.getCurrentInformation();
    }

    public List<Review> getReviewsFromGoogle() {
        return googleInformationCache.getReviews();
    }

    public OpeningHours getOpeningHoursFromGoogle() {
        var openingHours = googleInformationCache.getOpeningHours();
        var onVacation = vacationService.isOnVacation();

        openingHours.setOnVacation(onVacation);

        return googleInformationCache.getOpeningHours();
    }

    public ContactInformation getContactInformationFromGoogle() {
        return googleInformationCache.getContactInformationFromGoogle();
    }
}
