import styled from "@emotion/styled";
import {Button, TextField, Typography} from "@mui/material";
import {useState} from "react";

export const ContactForm = () => {
    const [name, setName] = useState("");
    const [mail, setMail] = useState("");
    const [reason, setReason] = useState("");

    const [isNameError, setNameError] = useState(false);
    const [isMailError, setMailError] = useState(false);
    const [isReasonError, setReasonError] = useState(false);

    const handleClick = () => {
        setNameError(true)
        setMailError(true)
        setReasonError(true)
    };

    return(
        <StyledContactForm className="contact-form">
            <TextField
                label="Ihr Name"
                required
                style={{ gridArea: "name" }}
                onChange={(e) => setName(e.target.value)}
                error={isNameError}
            />
            <TextField
                label="Ihre E-Mail Adresse"
                required
                style={{ gridArea: "mail" }}
                onChange={(e) => setMail(e.target.value)}
                error={isMailError}
            />
            <TextField
                label="Ihr Anliegen"
                required
                multiline
                rows={10}
                style={{ gridArea: "reason" }}
                onChange={(e) => setReason(e.target.value)}
                error={isReasonError}
            />
            <Button
                variant="outlined"
                style={{ gridArea: "submit" }}
                onClick={handleClick}
            >
                Abschicken
            </Button>

            <Typography gridArea="info" variant="caption">
                Bitte beachten Sie, dass eine Tischreservierung über das Kontakformular zunächst nicht bindend ist. Es stellt lediglich eine Anfrage an uns dar.
                Wir werden uns mit Ihnen nach einer Anfrage, über den von Ihnen gewählten Weg (Standard: E-Mail), in Verbindung setzen und Ihre Reservierung bestätigen oder stornieren. <br/>
                Bitte benutzen Sie daher für Tischreservierungen - sofern möglich - die Telefonnummer, da es sonst zu Verzögerungen kommen kann. Vielen Dank!
            </Typography>
        </StyledContactForm>
    );
};

const StyledContactForm = styled.div`
    width: 100%;
    margin-top: 2rem;
    
    display: grid;
    grid-template-areas: "name name name"
                        "mail mail mail"
                        "reason reason reason"
                        ". . submit"
                        "info info info";
    gap: 1rem;
    
    > span {
        color: gray;
        justify-self: start;
        text-align: start;
        margin-top: 1.5rem;
    }
`;
