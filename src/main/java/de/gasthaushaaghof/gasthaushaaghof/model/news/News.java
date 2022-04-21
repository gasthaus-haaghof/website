package de.gasthaushaaghof.gasthaushaaghof.model.news;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonProperty;
import de.gasthaushaaghof.gasthaushaaghof.annotation.SupabaseType;
import lombok.Data;

import java.time.LocalDateTime;

@Data
@SupabaseType(route = "/news")
public class News {
    private Long id;

    private String heading;
    private String text;

    @JsonProperty("created_at")
    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "dd-MM-yyyy hh:mm:ss")
    private String createdAt;

    private boolean important;
}
