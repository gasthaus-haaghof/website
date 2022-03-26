package de.gasthaushaaghof.gasthaushaaghof.model.google;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class Review {
    private String authorName;
    private Long rating;
    private String timeDescription;
    private String text;
}
