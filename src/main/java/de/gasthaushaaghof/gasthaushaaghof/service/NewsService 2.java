package de.gasthaushaaghof.gasthaushaaghof.service;

import de.gasthaushaaghof.gasthaushaaghof.model.news.News;
import de.gasthaushaaghof.gasthaushaaghof.repository.NewsRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class NewsService {
    private final NewsRepository newsRepository;

    public List<News> getAllNews() {
        return newsRepository.getAll();
    }
}
