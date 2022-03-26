package de.gasthaushaaghof.gasthaushaaghof.model.menu;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonProperty;
import de.gasthaushaaghof.gasthaushaaghof.annotation.SupabaseType;
import lombok.Data;

@Data
@SupabaseType(route = "/menu")
public class Menu {
    @JsonIgnore
    private Long id;

    @JsonProperty("menu_id")
    private Long menuId;

    @JsonProperty("menu_part")
    private MenuPart menuParts;
}
