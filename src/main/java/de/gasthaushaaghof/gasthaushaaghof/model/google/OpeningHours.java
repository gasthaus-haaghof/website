package de.gasthaushaaghof.gasthaushaaghof.model.google;

import lombok.Builder;
import lombok.Data;

import java.util.List;

@Data
@Builder
public class OpeningHours {
    private boolean openNow;
    private List<OpeningDay> days;
    private boolean isOnVacation;
}
