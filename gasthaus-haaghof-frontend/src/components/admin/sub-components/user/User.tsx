import styled from "@emotion/styled";
import { Alert, Button, Snackbar, TextField, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { Api } from "../../../../api/api";
import { UserInfoType } from "../../../../types/UserInfoType";
import { IndividualUser } from "./IndividualUser";

interface UserProps {
    token: string,
}

export const User = ({ token }: UserProps) => {
    const [existingUsers, setExistingUsers] = useState<UserInfoType[]>([]);
    const [validUsername, setValidUsername] = useState(false);
    const [validPassword, setValidPassword] = useState(false);

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const [open, setOpen] = useState(false);

    useEffect(() => {
        getExistingUsers();
    }, []);

    const getExistingUsers = () => {
        Api.Admin.getExistingUsers(token)
            .then(response => setExistingUsers(response));
    }

    const handleUsernameChange = (e: any) => {
        const typedUsername = e.target.value;
        const aldreadyKnown = existingUsers
            .map(user => user.username)
            .includes(typedUsername);
        const validChars = /^[a-zA-Z]+$/.test(typedUsername);

        setValidUsername(typedUsername.length >= 3 && !aldreadyKnown && validChars);
        setUsername(typedUsername);
    };

    const handlePasswordChange = (e: any) => {
        const typedPassword = e.target.value;
        setValidPassword(typedPassword.length >= 8);
        setPassword(typedPassword);
    };

    const handleCreateNewUser = () => {
        Api.Admin.createUser(token, { username, password });
        getExistingUsers();
        setOpen(true);
        setValidUsername(false);
    };

    return (
        <>
            <StyledUserWrapper>
                <StyledUser>
                    <Typography>Hier können neue User auf der Website angelegt werden.</Typography>
                    <TextField onChange={handleUsernameChange} placeholder="Name" helperText="Der Username muss mindestens 3 Buchstaben und keine Sonderzeichen enthalten." />
                    <TextField onChange={handlePasswordChange} placeholder="Passwort" type="password" helperText="Das Passwort muss mindestens 8 Zeichen lang sein." />
                    <Button variant="outlined" disabled={!validUsername || !validPassword} onClick={handleCreateNewUser}>User anlegen</Button>
                </StyledUser>
                <StyledExistingUser>
                    <Typography gridArea="heading">Bereits existierende User:</Typography>
                    <Typography variant="caption">Information: Falls Du das Passwort zu einem deiner Accounts vergessen haben solltest, Fahre einfach mit der Maus auf den Account! Das Passwort sollte nun angezeigt werden.</Typography>
                    {existingUsers.map(user => <IndividualUser key={user.username} name={user.username} password={user.password} />)}
                </StyledExistingUser>
            </StyledUserWrapper>
            <Snackbar open={open} autoHideDuration={6000}
                anchorOrigin={{
                    vertical: "top",
                    horizontal: "left"
                }}>
                <Alert severity="success" sx={{ width: '100%' }}>
                    User wurde erfolgreich erstellt!
                </Alert>
            </Snackbar>
        </>
    );
};

const StyledUserWrapper = styled.div`
    display: grid;
    grid-template-columns: auto auto;
    grid-template-rows: repeat(3, 100px) 125px
`;

const StyledUser = styled.div`
    display: grid;
    width: 400px;
    gap: 1rem;
`;

const StyledExistingUser = styled.div`
    display: grid;
    grid-template-areas: "heading" "info" "users";
    grid-template-rows: 40px 150px auto;
    width: 250px;
`;
