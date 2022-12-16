import styled from "@emotion/styled";
import { Alert, Button, Checkbox, FormControlLabel, FormGroup, Snackbar, TextField } from "@mui/material";
import { useState } from "react";
import { Api } from "../../../../api/api";
import Moment from 'moment';
interface NewsProps {
    token: string,
}

export const News = ({ token }: NewsProps) => {
    const [validHeading, setValidHeading] = useState(false);
    const [validText, setValidText] = useState(false);

    const [heading, setHeading] = useState("");
    const [text, setText] = useState("");
    const [important, setImportant] = useState(false);

    const [open, setOpen] = useState(false);

    const handleHeadingChange = (e: any) => {
        const heading = e.target.value;
        setValidHeading(heading.length >= 5);
        setHeading(heading);
    };

    const handleTextChange = (e: any) => {
        const text = e.target.value;
        setValidText(text.length >= 32);
        setText(text);
    };

    const handleImportantChange = () => {
        setImportant(!important);
    };

    const createNews = () => {
        setValidHeading(false);
        Api.News.createNews(token, { id: -1, heading, text, created_at: undefined, important });
        setOpen(true);
    };

    return (
        <>
            <StyledNews>
                <TextField placeholder="Überschrift" style={{ gridArea: "heading" }} onChange={handleHeadingChange} />
                <TextField multiline rows={10} placeholder="Text" style={{ gridArea: "text" }} onChange={handleTextChange} helperText="Bitte beachte, dass eine News mindestens 32 Zeichen lang sein muss." />
                <FormGroup style={{ gridArea: "important" }}>
                    <FormControlLabel control={<Checkbox onChange={handleImportantChange} />} label="News auf der Startseite anzeigen" />
                </FormGroup>
                <Button style={{ gridArea: "button" }} variant="outlined" disabled={!validHeading || !validText} onClick={createNews}>Veröffentlichen</Button>
            </StyledNews>
            <Snackbar open={open} autoHideDuration={10}
                anchorOrigin={{
                    vertical: "top",
                    horizontal: "left"
                }}>
                <Alert severity="success" sx={{ width: '100%' }}>
                    News wurde erfolgreich veröffentlicht!
                </Alert>
            </Snackbar>
        </>

    );
};

const StyledNews = styled.div`
    display: grid;
    gap: 1rem;
    grid-template-areas: "heading heading" 
        "text text"
        "button important";
`;