package de.gasthaushaaghof.gasthaushaaghof.service;

import de.gasthaushaaghof.gasthaushaaghof.repository.VacationRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class VacationService {
    private final VacationRepository vacationRepository;

    public boolean isOnVacation() {
        return vacationRepository.getAll()
                .get(0)
                .isOnVacation();
    }
}
