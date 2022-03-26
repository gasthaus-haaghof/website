package de.gasthaushaaghof.gasthaushaaghof.model;

import de.gasthaushaaghof.gasthaushaaghof.annotation.SupabaseType;
import lombok.Data;

@Data
@SupabaseType(route = "/users")
public class UserInfo {
    private Long id;
    private String username;
    private String password;
    private String fullname;
}
