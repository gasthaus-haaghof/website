package de.gasthaushaaghof.gasthaushaaghof.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.server.ResponseStatusException;

public class InvalidTokenProvidedException extends ResponseStatusException {
    public InvalidTokenProvidedException() {
        super(HttpStatus.FORBIDDEN, "Invalid Token provided.");
    }
}
