package de.gasthaushaaghof.gasthaushaaghof.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.server.ResponseStatusException;

public class NoValidMenuPresentException extends ResponseStatusException {
    public NoValidMenuPresentException() {
        super(HttpStatus.NOT_FOUND, "No menu found. Please create one.");
    }
}
