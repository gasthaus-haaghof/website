import React from "react";
import styled from "@emotion/styled";
import {MenuPartType} from "../../types/menu/MenuPartType";
import {Typography} from "@mui/material";
import {Meal} from "./Meal";

interface MenuPartProps {
    menuPart: MenuPartType,
}

export const MenuPart = ({ menuPart }: MenuPartProps) => {
    return(
        <StyledMenuPart style={{ gridTemplateRows: `repeat(${menuPart.meal.length + 1}, auto)`}}>
            <StyledHeading>
                <Typography
                    variant="h3"
                    className="cursive"
                    border="1px solid black"
                    borderRadius="1rem"
                    style={{ background: "#e7dace"}}
                >
                    {menuPart.heading}
                </Typography>
                <StyledDivider className="menu-divider"/>
            </StyledHeading>
            { menuPart.meal.map(meal => <Meal key={`${menuPart.id}${meal.id}`} meal={meal} />) }
        </StyledMenuPart>
    );
};

const StyledMenuPart = styled.div`
    margin-top: 2rem;
    width: 100%;
    
    display: grid;
    justify-items: center;
`;

const StyledHeading = styled.div`
    display: grid;
    justify-items: center;
    
    width: 100%;
    
    > h3 {
        background: white;
        padding: 0 5rem;
    }
`;

const StyledDivider = styled.div`
    position: absolute;
    width: calc(100% - 10rem);
    height: 0.15rem;
    margin-top: 1.8rem;

    background: radial-gradient(black, black, #e7dace, #e7dace);
    z-index: -1;
`;
