import {CircularProgress, LinearProgress, Typography} from "@mui/material";
import {useEffect, useState} from "react";
import {OpeningHoursType} from "../../types/google/OpeningHoursType";
import {Api} from "../../api/api";
import styled from "@emotion/styled";
import React from "react";
import moment from "moment";

export const OpeningHours = () => {
    const [openingHours, setOpeningHours] = useState<OpeningHoursType | null>(null);
    const [isWaiting, setWaiting] = useState(true);

    useEffect(() => {
        Api.Google.getOpeningHours()
            .then(result => {
                setOpeningHours(result);
                setWaiting(false);
            })
    }, []);

    return(
        <StyledOpeningHours className="opening-hours">
            <Typography variant="h4" gridArea="heading">Unsere Öffnungszeiten</Typography>
            { openingHours && <Typography gridArea="isopen" style={{ marginBottom: "2rem"}}>
                Unser Gasthaus { isOpen(openingHours) ?
                <span>ist <span style={{ color: "darkgreen"}}>geöffnet</span>.</span> :
                <span>hat gerade <span style={{ color: "darkred"}}>geschlossen</span>.</span>
            }</Typography> }
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
            <Typography>{split[1] === "Geschlossen" ? "Ruhetag" : split[1].replaceAll("–", " – ")}</Typography>
        </React.Fragment>
    );
};

const isOpen = (openingHours: OpeningHoursType): boolean => {
    const mom = moment();

    const now = mom.day();
    const toCompare = openingHours.days
        .at(now - 1)!
        .dayText
        .split(": ")[1];

    const currentTimeInMinutes = formatTimeToMinutes(`${mom.hours()}`, `${mom.minutes()}`);
    const [start, end] = toCompare.replace(" Uhr", "")
        .split("–")
        .map(c => c.split(":"))
        .map(time => formatTimeToMinutes(time[0], time[1]));

    return currentTimeInMinutes >= start && currentTimeInMinutes <= end;
};

const formatTimeToMinutes = (hours: string, minutes: string): number => {
    return parseInt(hours) * 60 + parseInt(minutes);
};

const StyledOpeningHours = styled.div`
    grid-area: opening-hours;
    display: grid;
    grid-template-rows: repeat(9, auto);
    grid-template-columns: 12ch auto;
    grid-template-areas: "heading heading" 
                         "isopen isopen"
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
