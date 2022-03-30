package de.gasthaushaaghof.gasthaushaaghof.repository;

import de.gasthaushaaghof.gasthaushaaghof.annotation.SupabaseRepository;
import de.gasthaushaaghof.gasthaushaaghof.model.News;
import de.gasthaushaaghof.gasthaushaaghof.repository.generic.GenericSupabaseRepository;

@SupabaseRepository
public class NewsRepository extends GenericSupabaseRepository<News, Long> {
}
