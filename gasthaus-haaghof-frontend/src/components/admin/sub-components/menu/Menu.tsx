import React, {useEffect, useState} from "react";
import {CircularProgress, LinearProgress, Typography} from "@mui/material";
import styled from "@emotion/styled";
import {MenuType} from "../../../../types/menu/MenuType";
import {Api} from "../../../../api/api";
import {MenuEdit} from "./MenuEdit";

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
        <StyledMenu>
            <Typography variant="h5">Speisekarte bearbeiten</Typography>
            { isWaiting ? <CircularProgress /> :
                <MenuEdit  menu={menu!}/>
            }
        </StyledMenu>
    );
};

const StyledMenu = styled.div`
    display: grid;
    justify-items: start;
    grid-template-rows: repeat(2, auto);
    gap: 2rem;
`;
