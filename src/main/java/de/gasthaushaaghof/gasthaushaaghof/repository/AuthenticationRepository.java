package de.gasthaushaaghof.gasthaushaaghof.repository;

import de.gasthaushaaghof.gasthaushaaghof.annotation.SupabaseRepository;
import de.gasthaushaaghof.gasthaushaaghof.model.UserInfo;
import de.gasthaushaaghof.gasthaushaaghof.repository.generic.GenericSupabaseRepository;

import java.util.Optional;

@SupabaseRepository
public class AuthenticationRepository extends GenericSupabaseRepository<UserInfo, Long> {
    public Optional<UserInfo> getByName(String name) {
        return getAll().stream()
                .filter(currentUser -> currentUser.getUsername().equals(name))
                .findFirst();
    }
}
