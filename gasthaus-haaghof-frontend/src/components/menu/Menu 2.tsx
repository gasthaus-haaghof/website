import {Header} from "../Header";
import {useEffect, useState} from "react";
import {ReviewType} from "../../types/google/ReviewType";
import {Api} from "../../api/api";
import {MenuType} from "../../types/menu/MenuType";
import styled from "@emotion/styled";
import {LinearProgress, Typography} from "@mui/material";
import {MenuPart} from "./MenuPart";

export const Menu = () => {
    const [menu, setMenu] = useState<MenuType | null>(null);
    const [isWaiting, setWaiting] = useState(true);

    useEffect(() => {
        Api.getMenu().then(result => {
            setMenu(result);
            setWaiting(false);
        });
    }, []);

    return(
        <>
            <Header />
            {isWaiting ? <LinearProgress/> :
                <StyledMenu>
                    <div className="menu">
                        <Typography variant="h3">Unsere Speisekarte</Typography>
                        {menu && menu.menuParts.map(menuPart => <MenuPart key={menuPart.id} menuPart={menuPart}/>)}
                    </div>
                </StyledMenu>
            }
        </>
    );
};

const StyledMenu = styled.div`
    display: grid;
    justify-items: center;
    margin-top: 2rem;
    
    > div.menu {
        width: 100%;
        display: grid;
        gap: 2rem;
        justify-items: center;
    }
`;
