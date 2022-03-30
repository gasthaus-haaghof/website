package de.gasthaushaaghof.gasthaushaaghof.controller;

import de.gasthaushaaghof.gasthaushaaghof.model.News;
import de.gasthaushaaghof.gasthaushaaghof.service.NewsService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping(path = "/news")
public class NewsController {
    private final NewsService newsService;

    @GetMapping
    public List<News> getAll() {
        return newsService.getAll();
    }

    @GetMapping("/latest-important")
    public News getLatestImportantNews() {
        return newsService.getLatestImportantNews();
    }

    @GetMapping("/{id}")
    public News getNewsById(@PathVariable Long id) {
        return newsService.getNewsById(id);
    }
}
