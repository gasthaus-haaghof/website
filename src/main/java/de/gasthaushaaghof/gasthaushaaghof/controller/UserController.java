package de.gasthaushaaghof.gasthaushaaghof.controller;

import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import de.gasthaushaaghof.gasthaushaaghof.annotation.TokenRequired;
import de.gasthaushaaghof.gasthaushaaghof.model.UserInfo;
import de.gasthaushaaghof.gasthaushaaghof.service.UserService;
import lombok.RequiredArgsConstructor;

@RestController
@RequiredArgsConstructor
@RequestMapping(path = "/admin/users")
public class UserController {
    private final UserService userService;

    @GetMapping
    @TokenRequired
    public List<UserInfo> getUsers() {
        return userService.getUsers();
    }

    @PostMapping
    @TokenRequired
    public UserInfo createUser(@RequestBody UserInfo userInfo) {
        return userService.createUser(userInfo);
    }
}
