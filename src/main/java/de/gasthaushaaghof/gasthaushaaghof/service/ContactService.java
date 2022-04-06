package de.gasthaushaaghof.gasthaushaaghof.service;

import de.gasthaushaaghof.gasthaushaaghof.model.ContactInfo;
import org.springframework.stereotype.Service;

@Service
public class ContactService {
    public String contact(ContactInfo contactInfo) {
        System.out.println(contactInfo);
        return "Valid";
    }
}
