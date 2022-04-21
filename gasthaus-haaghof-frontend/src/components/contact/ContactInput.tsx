import {Header} from "../Header";
import React from "react";
import styled from "@emotion/styled";
import {Button, FormControl, Input, TextField} from "@mui/material";

export const ContactInput = () => {
    return(
        <StyledContactInput>
            <TextField
                required
                placeholder="Ihr Name"
                style={{ gridArea: "name" }}
            />
            <TextField
                required
                placeholder="Ihre E-Mail Adresse"
                style={{ gridArea: "mail" }}
            />
            <TextField
                multiline
                required
                placeholder="Ihr Anliegen"
                rows={10}
                style={{ gridArea: "text" }}
            />
            <Button
                variant="outlined"
                style={{ gridArea: "send", justifySelf: "end"}}
            >
                Absenden
            </Button>
        </StyledContactInput>
    );
};

const StyledContactInput = styled.div`
    margin-top: 2rem;
    
    display: grid;
    grid-template-columns: repeat(3, auto);
    grid-template-rows: repeat(4, auto);
    grid-template-areas: "name name name" 
                         "mail mail mail" 
                         "text text text" 
                         ". . send";
    
    
    justify-items: center;
    gap: 1rem;
    width: 70ch;
    
    > div {
        width: 100%;
    }
`;
