package de.gasthaushaaghof.gasthaushaaghof.controller;

import de.gasthaushaaghof.gasthaushaaghof.model.UserInfo;
import de.gasthaushaaghof.gasthaushaaghof.service.AuthenticationService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
@RequestMapping(path = "/authentication")
public class AuthenticationController {
    private final AuthenticationService authenticationService;

    @PostMapping(path = "/login")
    public UserInfo loginUser(@RequestBody UserInfo userInfo) {
        return authenticationService.loginUser(userInfo);
    }
}
