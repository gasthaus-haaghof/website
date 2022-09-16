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
    const [isOnVacation, setOnVacation] = useState(true);

    useEffect(() => {
        Api.Google.getOpeningHours()
            .then(result => {
                setOpeningHours(result);
                setOnVacation(result.onVacation)
                setWaiting(false);
            });
    }, []);

    return(
        <StyledOpeningHours className="opening-hours">
            <Typography variant="h4" gridArea="heading">Unsere Öffnungszeiten</Typography>
            { openingHours && <Typography gridArea="isopen">
                Unser Gasthaus { isOpen(openingHours, isOnVacation) ?
                <span>ist <span style={{ color: "darkgreen"}}>geöffnet</span>.</span> :
                <span>hat gerade <span style={{ color: "darkred"}}>geschlossen</span>.</span>
            }</Typography> }
            <Typography gridArea="kitchen" style={{ marginBottom: "2rem"}}>Warme Küche von 11:00 Uhr bis 14:00 Uhr und {<br/>} 17:00 Uhr bis 20:00 Uhr.</Typography>
            { isWaiting ? <CircularProgress style={{
                    marginTop: "5rem",
                    marginLeft: "10rem",
                }} /> :
                openingHours && openingHours.days.map((day, index) =>
                    reformatText(day.dayText, index, isOnVacation))
            }
        </StyledOpeningHours>
    );
};

const reformatText = (weekday: string, index: number, isOnVacation: boolean): JSX.Element => {
    const split = weekday.split(": ");

    return(
        <React.Fragment key={index}>
            <Typography gridArea={`day${split[0]}`} className="day">{split[0]}:</Typography>
            {
                isOnVacation ?
                    <Typography>Urlaub</Typography> :
                    <Typography>{split[1] === "Geschlossen" ? "Ruhetag" : split[1].replaceAll("–", " – ")}</Typography>
            }
        </React.Fragment>
    );
};

const isOpen = (openingHours: OpeningHoursType, isOnVacation: boolean): boolean => {
    if (isOnVacation) {
        return false;
    }

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
    grid-template-rows: repeat(10, auto);
    grid-template-columns: 12ch auto;
    grid-template-areas: "heading heading" 
                         "isopen isopen"
                         "kitchen kitchen"
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
