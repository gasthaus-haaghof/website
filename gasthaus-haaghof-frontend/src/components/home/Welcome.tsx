import React from "react";
import styled from "@emotion/styled";
import { CircularProgress, Typography } from "@mui/material";

export const Welcome = () => {
    return (
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
    
    grid-template-columns: auto 70rem auto;
    grid-template-areas: "welcome welcome welcome" "subtitle subtitle subtitle" ". direction .";
    
    > div.direction {
        padding-top: 2rem;
        
        > div.googlemaps-wrapper {
            position: relative;
            margin: 3rem 0;
            height: 35rem;
            width: 100%;
        
            > div.googlemaps-canvas {
                overflow: hidden;
                background: none!important;
                height: 35rem;
                width: 100%;
                border-radius: 1rem;
                
                > iframe#googlemaps-canvas {
                    height: 35rem;
                    width: 100%;
                }
            }
        }
    }
}
`;
