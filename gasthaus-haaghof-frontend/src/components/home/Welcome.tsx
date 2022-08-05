import React from "react";
import styled from "@emotion/styled";
import {Typography} from "@mui/material";

export const Welcome = () => {
    return(
        <StyledWelcome className="welcome">
            <Typography variant="h3" gridArea="welcome">Willkommen in Haaghof!</Typography>
            <Typography variant="h4" gridArea="subtitle" className="welcome-subtitle">Dem gemütlichen Gasthaus auf der Frankenhöhe am Schußbachwald.</Typography>
        </StyledWelcome>
    );
};

const StyledWelcome = styled.div`
    display: grid;
    justify-items: center;
    text-align: center;
    
    grid-template-columns: auto 70rem;
    grid-template-areas: "welcome welcome" "subtitle subtitle";
}
`;
