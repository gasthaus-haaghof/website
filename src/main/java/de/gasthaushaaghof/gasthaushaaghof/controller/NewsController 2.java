package de.gasthaushaaghof.gasthaushaaghof.controller;

import de.gasthaushaaghof.gasthaushaaghof.model.news.News;
import de.gasthaushaaghof.gasthaushaaghof.service.NewsService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping(path = "/news")
public class NewsController {
    private final NewsService newsService;

    @GetMapping
    public List<News> getAllNews() {
        return newsService.getAllNews();
    }

    @GetMapping(path = "/latest")
    public News getLatestNews() {
        return newsService.getAllNews().get(0);
    }
}
