package de.gasthaushaaghof.gasthaushaaghof.repository.generic;

import com.fasterxml.jackson.databind.ObjectMapper;
import de.gasthaushaaghof.gasthaushaaghof.annotation.SupabaseType;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.MediaType;
import org.springframework.util.MultiValueMap;
import org.springframework.web.reactive.function.client.WebClient;
import org.springframework.web.reactive.function.client.WebClientException;

import java.lang.reflect.ParameterizedType;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

public class GenericSupabaseRepository<T, ID> {
    @Autowired
    private WebClient webClientForSupabaseRequests;

    @Value("${spring.config.supabase.key}")
    private String apikey;

    private final Class<T> clazz;
    private final String route;
    private final ObjectMapper objectMapper = new ObjectMapper();

    @SuppressWarnings("unchecked")
    public GenericSupabaseRepository() {
        var genericSuperclass = (ParameterizedType) getClass().getGenericSuperclass();
        var actualTypeArgument = genericSuperclass.getActualTypeArguments()[0];
        this.clazz = (Class<T>) actualTypeArgument;
        this.route = this.clazz.getAnnotation(SupabaseType.class).route();
    }

    public List<T> getAll(MultiValueMap<String, String> queryParams) {
        try {
            Object[] results = webClientForSupabaseRequests
                    .get()
                    .uri(uriBuilder -> uriBuilder
                            .path(route)
                            .queryParams(queryParams)
                            .build()
                    )
                    .header("apikey", apikey)
                    .accept(MediaType.APPLICATION_JSON)
                    .retrieve()
                    .bodyToMono(Object[].class)
                    .block();
            if (results == null) {
                return new ArrayList<>();
            }

            return Arrays.stream(results)
                    .map(object -> objectMapper.convertValue(object, clazz))
                    .toList();
        } catch (WebClientException e) {
            e.printStackTrace();
            return new ArrayList<>();
        }
    }

    public List<T> getAll() {
        return getAll(null);
    }
}
