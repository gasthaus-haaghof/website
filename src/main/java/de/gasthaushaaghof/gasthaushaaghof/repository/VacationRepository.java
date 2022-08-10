package de.gasthaushaaghof.gasthaushaaghof.repository;

import de.gasthaushaaghof.gasthaushaaghof.annotation.SupabaseRepository;
import de.gasthaushaaghof.gasthaushaaghof.model.Vacation;
import de.gasthaushaaghof.gasthaushaaghof.repository.generic.GenericSupabaseRepository;

@SupabaseRepository
public class VacationRepository extends GenericSupabaseRepository<Vacation, Long> {
}
