package de.gasthaushaaghof.gasthaushaaghof.controller;

import de.gasthaushaaghof.gasthaushaaghof.model.menu.dto.MenuDTO;
import de.gasthaushaaghof.gasthaushaaghof.service.MenuService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(path = "/menu")
@RequiredArgsConstructor
public class MenuController {
    private final MenuService menuService;

    @GetMapping
    public MenuDTO getMenu() {
        return menuService.getMenu();
    }
}
