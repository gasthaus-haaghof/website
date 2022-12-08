package de.gasthaushaaghof.gasthaushaaghof.service;

import java.util.List;

import org.springframework.stereotype.Service;

import de.gasthaushaaghof.gasthaushaaghof.model.UserInfo;
import de.gasthaushaaghof.gasthaushaaghof.repository.AuthenticationRepository;
import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class UserService {
    private final AuthenticationRepository authenticationRepository;

    public List<UserInfo> getUsers() {
        return authenticationRepository.getAll();
    }

    public UserInfo createUser(UserInfo userInfo) {
        userInfo.setPassword(AuthenticationService.shaPassword(userInfo.getPassword()));
        var body = String.format("{ \"username\": \"%s\", \"password\": \"%s\" }", userInfo.getUsername(),
                userInfo.getPassword());

        return authenticationRepository.postData(body);
    }

}
