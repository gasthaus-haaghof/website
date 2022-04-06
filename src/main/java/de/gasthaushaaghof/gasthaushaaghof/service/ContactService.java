package de.gasthaushaaghof.gasthaushaaghof.service;

import de.gasthaushaaghof.gasthaushaaghof.model.ContactInfo;
import de.gasthaushaaghof.gasthaushaaghof.model.contactinformation.ContactInformationResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.stereotype.Service;

import javax.validation.Valid;

@Service
@RequiredArgsConstructor
public class ContactService {
    private final MailSenderService mailSenderService;

    public ContactInformationResponse contact(@Valid ContactInfo contactInfo) {
        var message = new SimpleMailMessage();

        message.setFrom("GZBW");
        message.setReplyTo(contactInfo.getEmail());
        message.setSubject(String.format("Neue Anfrage von %s", contactInfo.getName()));

        var msg = String.format(
                """
                    Sie haben eine neue Anfrage von %s erhalten!
                    Antworten Sie direkt auf diese Email um dem Absender zu antworten!
    
                    %s""", contactInfo.getName(), contactInfo.getReason()
        );

        message.setText(msg);
        var sendingImmediately = mailSenderService.sendMail(message);

        return ContactInformationResponse.builder()
                .statusText(sendingImmediately ? "Sent successfully" : "Scheduled to send")
                .status(sendingImmediately ? 200L: 202L)
                .build();
    }
}
