package de.gasthaushaaghof.gasthaushaaghof.service;

import de.gasthaushaaghof.gasthaushaaghof.exception.NewsDoesNotExistException;
import de.gasthaushaaghof.gasthaushaaghof.model.News;
import de.gasthaushaaghof.gasthaushaaghof.repository.NewsRepository;
import lombok.RequiredArgsConstructor;
import lombok.var;

import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.List;
import java.util.Objects;

import static java.util.Comparator.comparing;

import java.time.ZoneId;

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

    public News createNews(News news) {
        news.setCreatedAt(new Date().toInstant().atZone(ZoneId.of("Europe/Berlin")));

        var body = String.format(
                "{ \"heading\": \"%s\", \"text\": \"%s\", \"created_at\": \"%s+00\", \"important\": \"%s\" }",
                news.getHeading(),
                news.getText().replace("\n", "\\n"),
                news.getCreatedAt().toString().replace("T", " ").split("\\.")[0],
                news.isImportant());

        return newsRepository.postData(body);
    }

    public boolean deleteNews(Long id) {
        System.out.println("Deleting id");
        System.out.println(id);
        newsRepository.delete(id);
        return true;
    }
}
