import React from "react";
import {Button, Checkbox, FormControlLabel, FormGroup, TextField} from "@mui/material";

export const News = () => {
    return(
        <>
            <TextField placeholder="Überschrift"/>
            <TextField multiline rows={10} placeholder="Text"/>
            <FormGroup>
                <FormControlLabel control={<Checkbox />} label="News auf der Startseite anzeigen" />
            </FormGroup>
            <Button variant="outlined">Veröffentlichen</Button>
        </>
    );
};
