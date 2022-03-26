package de.gasthaushaaghof.gasthaushaaghof.repository;

import de.gasthaushaaghof.gasthaushaaghof.annotation.SupabaseRepository;
import de.gasthaushaaghof.gasthaushaaghof.model.menu.Menu;
import de.gasthaushaaghof.gasthaushaaghof.repository.generic.GenericSupabaseRepository;
import org.springframework.util.LinkedMultiValueMap;

import java.util.Collections;
import java.util.List;

@SupabaseRepository
public class MenuRepository extends GenericSupabaseRepository<Menu, Long> {
    @Override
    public List<Menu> getAll() {
        var queryParameters = new LinkedMultiValueMap<String, String>();
        queryParameters.put("select", Collections.singletonList("menu_id,menu_part(id,heading,meal(id,mainComponent, additionalComponents))"));

        return getAll(queryParameters);
    }
}
