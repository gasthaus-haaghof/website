package de.gasthaushaaghof.gasthaushaaghof.controller;

import de.gasthaushaaghof.gasthaushaaghof.model.ContactInfo;
import de.gasthaushaaghof.gasthaushaaghof.service.ContactService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.validation.Valid;

@RestController
@RequiredArgsConstructor
@RequestMapping("/contact")
public class ContactController {
    private final ContactService contactService;

    @PostMapping
    public String contact(@Valid @RequestBody ContactInfo contactInfo) {
        return contactService.contact(contactInfo);
    }
}
