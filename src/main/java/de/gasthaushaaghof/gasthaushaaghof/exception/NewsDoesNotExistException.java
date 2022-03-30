package de.gasthaushaaghof.gasthaushaaghof.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.server.ResponseStatusException;

public class NewsDoesNotExistException extends ResponseStatusException {
    public NewsDoesNotExistException() {
        super(HttpStatus.NOT_FOUND, "News with specified id does not exist.");
    }
}
