package de.gasthaushaaghof.gasthaushaaghof.configuration;

import org.springframework.context.annotation.Bean;
import org.springframework.stereotype.Component;
import org.springframework.web.reactive.function.client.WebClient;

@Component
public class WebClientConfiguration {
    @Bean
    public WebClient webClientForGoogleRequests() {
        return WebClient.builder()
                .baseUrl("https://maps.googleapis.com")
                .build();
    }

    @Bean
    public WebClient webClientForSupabaseRequests() {
        return WebClient.builder()
                .baseUrl("https://exsbqjkwzomwzeqtxqfi.supabase.co/rest/v1")
                .build();
    }
}
