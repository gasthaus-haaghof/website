package de.gasthaushaaghof.gasthaushaaghof.model;

import com.fasterxml.jackson.annotation.JsonProperty;
import de.gasthaushaaghof.gasthaushaaghof.annotation.SupabaseType;
import lombok.Data;

@Data
@SupabaseType(route = "/vacation")
public class Vacation {
    private Long id;

    @JsonProperty("isOnVacation")
    private boolean isOnVacation;
}
