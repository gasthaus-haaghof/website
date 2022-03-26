package de.gasthaushaaghof.gasthaushaaghof.service;

import de.gasthaushaaghof.gasthaushaaghof.model.menu.Menu;
import de.gasthaushaaghof.gasthaushaaghof.model.menu.dto.MenuDTO;
import de.gasthaushaaghof.gasthaushaaghof.repository.MenuRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;


@Service
@RequiredArgsConstructor
public class MenuService {
    private final MenuRepository menuRepository;

    public MenuDTO getMenu() {
        var menuParts = menuRepository.getAll()
                .stream()
                .map(Menu::getMenuParts)
                .toList();

        return new MenuDTO(menuParts);
    }
}
