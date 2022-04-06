package de.gasthaushaaghof.gasthaushaaghof.service;

import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.mail.MailException;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.scheduling.annotation.EnableScheduling;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Service;

import java.util.concurrent.BlockingQueue;
import java.util.concurrent.LinkedBlockingQueue;

@Service
@RequiredArgsConstructor
@EnableScheduling
public class MailSenderService {
    private final JavaMailSender javaMailSender;

    @Value("${spring.mail.to}")
    private String toMail;

    private final BlockingQueue<SimpleMailMessage> queue = new LinkedBlockingQueue<>();

    public boolean sendMail(SimpleMailMessage mailMessage) {
        mailMessage.setTo(toMail);

        queue.add(mailMessage);
        return sendCurrentMail(mailMessage);
    }

    @Scheduled(cron = "0 0/30 * * * * ?")
    private void send() {
        queue.forEach(this::sendCurrentMail);
    }

    private boolean sendCurrentMail(SimpleMailMessage mailMessage) {
        try {
            javaMailSender.send(mailMessage);
            return queue.remove(mailMessage); // true
        } catch (MailException e) {
            return false;
        }
    }
}
