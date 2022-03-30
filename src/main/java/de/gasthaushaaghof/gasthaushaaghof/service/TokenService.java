package de.gasthaushaaghof.gasthaushaaghof.service;

import org.springframework.scheduling.annotation.EnableScheduling;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Service;

import java.util.UUID;

@Service
@EnableScheduling
public class TokenService {
    private UUID secretToken;

    TokenService() {
        updateToken();
    }

    public boolean validateToken(UUID providedToken) {
        return secretToken.equals(providedToken);
    }

    // Token is updated, this method covers the use-case of a user logging in
    public UUID getSecretToken() {
        updateToken();
        return secretToken;
    }

    @Scheduled(cron = "0 0/30 * * * ?")
    private void updateToken() {
        secretToken = UUID.randomUUID();
    }
}
