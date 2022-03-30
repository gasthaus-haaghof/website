package de.gasthaushaaghof.gasthaushaaghof.interceptor;

import de.gasthaushaaghof.gasthaushaaghof.annotation.TokenRequired;
import de.gasthaushaaghof.gasthaushaaghof.exception.InvalidTokenProvidedException;
import de.gasthaushaaghof.gasthaushaaghof.service.TokenService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;
import org.springframework.web.method.HandlerMethod;
import org.springframework.web.servlet.HandlerInterceptor;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.util.UUID;

@Component
@RequiredArgsConstructor
public class TokenInterceptor implements HandlerInterceptor {
    private final TokenService tokenService;

    @Override
    public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler) throws Exception {
        if (!(handler instanceof HandlerMethod handlerMethod)) {
            // Preflight request
            return true;
        }

        var tokenRequired = (handlerMethod).getMethod().getAnnotation(TokenRequired.class);

        if (tokenRequired == null) {
            return true;
        }

        var token = request.getHeader("Authentication-Token");
        boolean validToken;
        try {
             validToken = tokenService.validateToken(UUID.fromString(token));
        } catch (Exception e) {
            throw new InvalidTokenProvidedException();
        }

        if (!validToken) {
            throw new InvalidTokenProvidedException();
        }

        return true;
    }
}
