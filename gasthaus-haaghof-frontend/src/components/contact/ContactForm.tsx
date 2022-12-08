import styled from "@emotion/styled";
import { Alert, AlertTitle, Button, Snackbar, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { Validate } from "../../utils/contact";
import { LoadingButton } from "@mui/lab";
import { Api } from "../../api/api";

export const ContactForm = () => {
    const [name, setName] = useState("");
    const [mail, setMail] = useState("");
    const [reason, setReason] = useState("");

    const [isNameError, setNameError] = useState(false);
    const [isMailError, setMailError] = useState(false);
    const [isReasonError, setReasonError] = useState(false);

    const [snackbar, setSnackbar] = useState<JSX.Element>(<></>);
    const [isProcessingAPIRequest, setProcessingAPIRequest] = useState(false);
    const [open, setOpen] = useState(false);
    const [openInfo, setOpenInfo] = useState(false);
    const [openWarning, setOpenWarning] = useState(false);

    const handleClick = () => {
        // remove old snackbars from last request
        setSnackbar(<></>);

        const [validName, validMail, validReason] = Validate.inputFromUser(name, mail, reason);
        const allInputValid = !validName && !validMail && !validReason;

        setNameError(!!validName);
        setMailError(!!validMail);
        setReasonError(!!validReason);

        if (!allInputValid) {
            spawnSnackbar(validName!, validMail!, validReason!);
            return;
        }

        setProcessingAPIRequest(true);

        Api.Contact.contact({ name, email: mail, reason })
            .then(response => {
                if (response.status === 200) {
                    setOpenInfo(true);
                } else if (response.status === 202) {
                    setOpenInfo(true);
                } else {
                    setOpenWarning(true);
                }

                setProcessingAPIRequest(false);
            });
    };

    const handleClose = () => {
        setOpen(false);
        setOpenInfo(false);
        setOpenWarning(false);
    };

    const spawnSnackbar = (nameReason: string, mailReason: string, reasonReason: string) => {
        const snackbar =
            <Snackbar key={reason} anchorOrigin={{ horizontal: "left", vertical: "bottom" }} open onClose={() => setSnackbar(<></>)}>
                <Alert severity="error" style={{ textAlign: "start" }}>
                    <AlertTitle>Fehler bei der Eingabe</AlertTitle>
                    {nameReason && <span>- {nameReason} <br /></span>}
                    {mailReason && <span>- {mailReason} <br /></span>}
                    {reasonReason && <span>- {reasonReason} <br /></span>}
                </Alert>
            </Snackbar>;

        setSnackbar(snackbar);
    };

    return (
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
                label="Ihr Anliegen (Tischreservierungen bitte telefonisch)"
                required
                multiline
                rows={10}
                style={{ gridArea: "reason" }}
                onChange={(e) => setReason(e.target.value)}
                error={isReasonError}
            />
            <LoadingButton
                variant="outlined"
                style={{ gridArea: "submit" }}
                onClick={handleClick}
                loading={isProcessingAPIRequest}
            >
                Abschicken
            </LoadingButton>

            <Typography gridArea="info" variant="caption">
                Bitte beachten Sie, Tischreservierungen über das Kontaktformular mindestens 3 Tage im Voraus zu stellen. Bei kurzfristigeren Anfragen bitten wir um telefonische Kontaktaufnahme!
            </Typography>

            {snackbar}

            <Snackbar anchorOrigin={{ horizontal: "center", vertical: "bottom" }} open={open} onClose={handleClose}>
                <Alert severity="success" style={{ textAlign: "left" }}>Ihr Anliegen wurde erfolgreich verschickt. Wir melden uns bei Ihnen!</Alert>
            </Snackbar>
            <Snackbar anchorOrigin={{ horizontal: "center", vertical: "bottom" }} open={openInfo} onClose={handleClose}>
                <Alert severity="info" style={{ textAlign: "left" }}>Unser Server hat gerade Probleme beim Bearbeiten von Kontaktanfragen, aber: keine Sorge! Ihre Nachricht wurde gespeichert und wird beantwortet, sobald alles wieder rund läuft!</Alert>
            </Snackbar>
            <Snackbar anchorOrigin={{ horizontal: "center", vertical: "bottom" }} open={openWarning} onClose={handleClose}>
                <Alert severity="warning" style={{ textAlign: "left" }}>Bitte probieren Sie es später erneut.</Alert>
            </Snackbar>
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
