import React from "react";
import {MealType} from "../../types/menu/MealType";
import styled from "@emotion/styled";
import {Typography} from "@mui/material";

interface MealProps {
    meal: MealType,
}

export const Meal = ({ meal }: MealProps) => {
    return(
        <StyledMeal className="meal" style={{
            gridTemplateRows: `repeat(${meal.additionalComponents ? 2 : 1}, auto)`,
            gridTemplateAreas: `"main" ${meal.additionalComponents && `"additional"`}`,
        }}>
            <Typography gridArea="main" variant="h6">{meal.mainComponent}</Typography>
            { meal.additionalComponents && <Typography gridArea="additional"><span>dazu:</span> <i>{meal.additionalComponents}</i></Typography> }
        </StyledMeal>
    );
};

const StyledMeal = styled.div`
    display: grid;
    justify-items: center;
    margin-top: 1rem;
    
    > p > span {
        color: gray;
    }
`;
