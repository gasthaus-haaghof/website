package de.gasthaushaaghof.gasthaushaaghof.controller;

import de.gasthaushaaghof.gasthaushaaghof.model.google.ContactInformation;
import de.gasthaushaaghof.gasthaushaaghof.model.google.GoogleInformation;
import de.gasthaushaaghof.gasthaushaaghof.model.google.OpeningHours;
import de.gasthaushaaghof.gasthaushaaghof.model.google.Review;
import de.gasthaushaaghof.gasthaushaaghof.service.GoogleInformationService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping(path = "/google")
public class GoogleInformationController {
    private final GoogleInformationService googleInformationService;

    @GetMapping
    public GoogleInformation getCurrentInformation() {
        return googleInformationService.getCurrentInformation();
    }

    @GetMapping(path = "/reviews")
    public List<Review> getReviewsFromGoogle() {
        return googleInformationService.getReviewsFromGoogle();
    }

    @GetMapping(path = "/opening-hours")
    public OpeningHours getOpeningHoursFromGoogle() {
        return googleInformationService.getOpeningHoursFromGoogle();
    }

    @GetMapping("/contact-information")
    public ContactInformation getContactInformationFromGoogle() {
        return googleInformationService.getContactInformationFromGoogle();
    }
}
