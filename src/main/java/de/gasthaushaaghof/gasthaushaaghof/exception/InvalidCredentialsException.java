package de.gasthaushaaghof.gasthaushaaghof.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.server.ResponseStatusException;

public class InvalidCredentialsException extends ResponseStatusException {
    public InvalidCredentialsException() {
        super(HttpStatus.FORBIDDEN, "Invalid credentials provided");
    }
}
