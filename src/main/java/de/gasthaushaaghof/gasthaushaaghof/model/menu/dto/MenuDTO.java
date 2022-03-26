package de.gasthaushaaghof.gasthaushaaghof.model.menu.dto;

import de.gasthaushaaghof.gasthaushaaghof.model.menu.MenuPart;
import lombok.AllArgsConstructor;
import lombok.Data;

import java.util.List;

@Data
@AllArgsConstructor
public class MenuDTO {
    private List<MenuPart> menuParts;
}
