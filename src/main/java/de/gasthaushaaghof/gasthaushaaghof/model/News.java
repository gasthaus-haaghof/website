package de.gasthaushaaghof.gasthaushaaghof.model;

import com.fasterxml.jackson.annotation.JsonProperty;
import de.gasthaushaaghof.gasthaushaaghof.annotation.SupabaseType;
import lombok.Data;

import java.time.ZonedDateTime;

@Data
@SupabaseType(route = "/news")
public class News {
    private Long id;
    private String heading;
    private String text;

    @JsonProperty("created_at")
    private ZonedDateTime createdAt;

    private boolean important;
}
