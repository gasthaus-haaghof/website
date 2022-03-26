package de.gasthaushaaghof.gasthaushaaghof.model.menu;

import lombok.Data;

@Data
public class Meal {
    private Long id;
    private String mainComponent;
    private String additionalComponents;
}
