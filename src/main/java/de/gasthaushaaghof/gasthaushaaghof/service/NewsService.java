package de.gasthaushaaghof.gasthaushaaghof.service;

import de.gasthaushaaghof.gasthaushaaghof.exception.NewsDoesNotExistException;
import de.gasthaushaaghof.gasthaushaaghof.model.News;
import de.gasthaushaaghof.gasthaushaaghof.repository.NewsRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Objects;

import static java.util.Comparator.comparing;

@Service
@RequiredArgsConstructor
public class NewsService {
    private final NewsRepository newsRepository;

    public List<News> getAll() {
        return newsRepository.getAll()
                .stream()
                .sorted(comparing(News::getCreatedAt).reversed())
                .toList();
    }

    public News getLatestImportantNews() {
        return getAll().stream()
                .filter(News::isImportant)
                .findFirst()
                .orElse(null);
    }

    public News getNewsById(Long id) {
        return getAll().stream()
                .filter(news -> Objects.equals(news.getId(), id))
                .findFirst()
                .orElseThrow(NewsDoesNotExistException::new);
    }
}
