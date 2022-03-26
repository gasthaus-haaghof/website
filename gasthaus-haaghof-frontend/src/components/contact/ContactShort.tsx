import React from "react";
import {Button, Typography} from "@mui/material";
import styled from "@emotion/styled";

export const ContactShort = () => {
    return(
        <StyledContactShort>
            <Typography variant="h4">Weitere Fragen? Kontaktieren Sie uns gerne</Typography>
            <Button variant="outlined" onClick={() => window.location.pathname = "/contact"}>Kontaktmöglichkeiten</Button>
        </StyledContactShort>
    );
};

const StyledContactShort = styled.div`
    display: grid;
    
    justify-items: center;
    grid-template-rows: repeat(2, auto);
    gap: 3rem;
    
    > button {
        width: 25rem;
    }
`;
