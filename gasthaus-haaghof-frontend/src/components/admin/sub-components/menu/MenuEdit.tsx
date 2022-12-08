import styled from "@emotion/styled";
import { Typography } from "@mui/material";
import React from "react";
import { MenuType } from "../../../../types/menu/MenuType";
import { MenuPart } from "../../../menu/MenuPart";

interface MenuEditProps {
    menu: MenuType,
}

export const MenuEdit = ({ menu }: MenuEditProps) => {
    return (
        <StyledEditableMenu>
            <Typography>Abc</Typography>
        </StyledEditableMenu>
    );
};

const StyledEditableMenu = styled.div`
    display: grid;
`
