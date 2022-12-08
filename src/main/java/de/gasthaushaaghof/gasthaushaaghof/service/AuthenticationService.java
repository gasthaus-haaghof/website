package de.gasthaushaaghof.gasthaushaaghof.service;

import com.google.common.hash.Hashing;
import de.gasthaushaaghof.gasthaushaaghof.exception.InvalidCredentialsException;
import de.gasthaushaaghof.gasthaushaaghof.model.UserInfo;
import de.gasthaushaaghof.gasthaushaaghof.repository.AuthenticationRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.nio.charset.StandardCharsets;
import java.util.UUID;

@Service
@RequiredArgsConstructor
public class AuthenticationService {
    private final AuthenticationRepository authenticationRepository;
    private final TokenService tokenService;

    public UUID loginUser(UserInfo userInfo) {
        var user = authenticationRepository.getByName(userInfo.getUsername())
                .orElseThrow(InvalidCredentialsException::new);

        if (!AuthenticationService.shaPassword(userInfo.getPassword()).equals(user.getPassword())) {
            throw new InvalidCredentialsException();
        }

        return tokenService.getSecretToken();
    }

    public static String shaPassword(String password) {
        return Hashing.sha256()
                .hashString(password, StandardCharsets.UTF_8)
                .toString();
    }
}
