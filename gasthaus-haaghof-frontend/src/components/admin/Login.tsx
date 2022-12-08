import {
    Alert,
    Button,
    Checkbox,
    FormControlLabel,
    FormGroup,
    Snackbar,
    TextField,
    Typography
} from "@mui/material";
import styled from "@emotion/styled";
import { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { Api } from "../../api/api";
import { UserInfoType } from "../../types/UserInfoType";

interface LoginProps {
    onAuthenticationChange: (now: boolean, user: string) => void,
    authenticated: boolean,
}

export const Login = ({ onAuthenticationChange, authenticated }: LoginProps) => {
    const [isHiding, setHiding] = useState(true);
    const [open, setOpen] = useState(false);

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleSnackbarClose = () => {
        setOpen(false);
    };

    const handleSuccessfulLogin = (user: string) => {
        onAuthenticationChange(true, user);
    };

    const handleLoginAttempt = () => {
        Api.Admin.login({ username, password })
            .then(response => handleSuccessfulLogin(response))
            .catch(_ => setOpen(true));
    };

    return (
        <>
            {authenticated ? <Navigate to="/site-admin" /> :
                <StyledLogin>

                    <StyledForm style={{ gridColumnStart: 2, gridArea: "form" }}>
                        <Typography variant="h6">Bitte logge Dich ein, um diese Seite zu administrieren</Typography>
                        <TextField
                            placeholder="Benutzername"
                            onChange={(e) => setUsername(e.target.value)}
                        />
                        <TextField
                            type={isHiding ? "password" : "text"}
                            placeholder="Passwort"
                            onChange={(e) => setPassword(e.target.value)}
                            onKeyDown={(e) => e.key === "Enter" && handleLoginAttempt()}
                        />

                        <FormGroup>
                            <FormControlLabel
                                control={<Checkbox onClick={() => setHiding(!isHiding)} />}
                                label={"Passwort anzeigen"}
                            />
                        </FormGroup>

                        <Button variant="outlined" onClick={handleLoginAttempt}>Anmelden</Button>
                    </StyledForm>
                    <Link to="/home" style={{ gridArea: "back" }}>Zurück zur Startseite</Link>

                    <Snackbar anchorOrigin={{ horizontal: "center", vertical: "top" }} open={open} autoHideDuration={5000} onClose={handleSnackbarClose}>
                        <Alert severity="error">Ungültige Anmeldedaten. Bitte probiere es erneut!</Alert>
                    </Snackbar>
                </StyledLogin>
            }
        </>
    );
};

const StyledLogin = styled.div`
    display: grid;
    grid-template-columns: auto 50rem auto;
    grid-template-rows: repeat(2, auto);
    grid-template-areas: ". form ." ". back .";
    gap: 5rem;
    
    justify-items: center;
    
    margin-top: 5rem;
`;

const StyledForm = styled.div`
    display: grid;
    grid-template-rows: repeat(5, auto);
    gap: 0.5rem;
`;
