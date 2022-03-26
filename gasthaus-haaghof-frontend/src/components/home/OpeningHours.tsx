import {CircularProgress, LinearProgress, Typography} from "@mui/material";
import {useEffect, useState} from "react";
import {OpeningHoursType} from "../../types/OpeningHoursType";
import {Api} from "../../api/api";
import styled from "@emotion/styled";
import React from "react";

export const OpeningHours = () => {
    const [openingHours, setOpeningHours] = useState<OpeningHoursType | null>(null);
    const [isWaiting, setWaiting] = useState(true);

    useEffect(() => {
        Api.getOpeningHoursFromGoogle()
            .then(result => {
                setOpeningHours(result);
                setWaiting(false);
            })
    }, []);

    return(
        <StyledOpeningHours>
            <Typography variant="h4" gridArea="heading" style={{ marginBottom: "2rem"}}>Unsere Öffnungszeiten</Typography>
            { isWaiting ? <CircularProgress style={{
                    marginTop: "5rem",
                    marginLeft: "10rem",
                }} /> :
                openingHours && openingHours.days.map((day, index) => reformatText(day.dayText, index))
            }
        </StyledOpeningHours>
    );
};

const reformatText = (weekday: string, index: number): JSX.Element => {
    const split = weekday.split(": ");

    return(
        <React.Fragment key={index}>
            <Typography gridArea={`day${split[0]}`} className="day">{split[0]}:</Typography>
            <Typography>{split[1] === "Geschlossen" ? "Ruhetag" : split[1]}</Typography>
        </React.Fragment>
    );
};

const StyledOpeningHours = styled.div`
    grid-area: opening-hours;
    display: grid;
    grid-template-rows: repeat(8, auto);
    grid-template-columns: 12ch auto;
    grid-template-areas: "heading heading" 
                         "dayMontag ."
                         "dayDienstag ."
                         "dayMittwoch ."
                         "dayDonnerstag ."
                         "dayFreitag ."
                         "daySamstag ."
                         "daySonntag .";
    
    gap: 1rem;
    
    > .day {
        color: gray;
    }
`;
