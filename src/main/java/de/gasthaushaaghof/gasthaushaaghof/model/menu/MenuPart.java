package de.gasthaushaaghof.gasthaushaaghof.model.menu;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Data;

import java.util.List;

@Data
public class MenuPart {
    private Long id;
    private String heading;

    @JsonProperty("meal")
    private List<Meal> meals;
}
