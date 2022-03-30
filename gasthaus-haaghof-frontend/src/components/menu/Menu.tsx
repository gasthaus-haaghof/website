import {Header} from "../header/Header";
import {useEffect, useState} from "react";
import {Api} from "../../api/api";
import {MenuType} from "../../types/menu/MenuType";
import styled from "@emotion/styled";
import {LinearProgress, Typography} from "@mui/material";
import {MenuPart} from "./MenuPart";

export const Menu = () => {
    const [menu, setMenu] = useState<MenuType | null>(null);
    const [isWaiting, setWaiting] = useState(true);

    useEffect(() => {
        Api.Menu.get().then(result => {
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
                        <Typography className="menu-heading" variant="h3">Unsere Speisekarte</Typography>
                        <Typography className="menu-info">
                            Wir bieten Ihnen wechselnde Tagesgerichte
                            mit verschiedene Spezialitäten aus der Region. <br/>
                            Folgende Gerichte sind auf unserer <span>festen Speisekarte</span>
                        </Typography>
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
    text-align: center;
    margin-top: 2rem;
    
    > div.menu > p > span {
        text-decoration: underline;
    }
    
    > div.menu {
        width: 100%;
        display: grid;
        gap: 2rem;
        justify-items: center;
    }
`;
