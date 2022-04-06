import {ReviewOverview} from "./review/ReviewOverview";
import styled from "@emotion/styled";
import {Header} from "../header/Header";
import {Welcome} from "./Welcome";
import {OpeningHours} from "./OpeningHours";
import {ContactShort} from "../contact/ContactShort";
import {HistoryShort} from "../about/history/HistoryShort";
import {PictureSeries} from "./picture-series/PictureSeries";
import {useEffect, useState} from "react";
import {NewsType} from "../../types/NewsType";
import {Api} from "../../api/api";
import {Alert, AlertTitle, Button, Snackbar} from "@mui/material";
import {StringUtils} from "../../utils/string";
import {A} from "../../utils/test";

export const Home = () => {
    const [latestImportantNews, setLatestImportantNews] = useState<NewsType | null>(null);
    const [open, setOpen] = useState(false);

    useEffect(() => {
        window.scrollTo({top: 0, behavior: 'smooth'});

        A.a();

        Api.News.getLatestImportant()
            .then(result => setLatestImportantNews(result));
    }, []);

    useEffect(() => {
        if (latestImportantNews) {
            setOpen(true);
        }
    }, [latestImportantNews]);

    const handleSnackbarClose = () => {
        setOpen(false);
    };

    return(
        <>
            <Header />
            <StyledHome className="home">
                <Welcome />
                <StyledTwoGrid className="home-two">
                    <OpeningHours />
                    <HistoryShort />
                </StyledTwoGrid>
                <ReviewOverview />
                <ContactShort />
                <PictureSeries />
            </StyledHome>

            <Snackbar
                id="important-news"
                anchorOrigin={{ horizontal: "left", vertical: "top" }}
                open={open}
                onClose={handleSnackbarClose}
                style={{
                    maxWidth: "50ch",
                    transition: "margin-top 0.15s ease-in-out"
                }}
            >
                <Alert
                    severity="warning"
                   action={
                       <Button color="inherit" size="small" variant="outlined" onClick={() => window.location.pathname = `/news/${latestImportantNews?.id}`}>
                           Lesen
                       </Button>
                   }>
                    <AlertTitle>{latestImportantNews?.heading}</AlertTitle>
                    {latestImportantNews && StringUtils.substr(latestImportantNews.text, 100)}
                </Alert>
            </Snackbar>
        </>
    );
};

const StyledHome = styled.div`
    display: grid;
    grid-template-columns: auto;
    justify-items: center;
    margin-top: 5rem;
    
    grid-template-rows: repeat(5, auto);
    gap: 5rem;
`;

const StyledTwoGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(2, auto);
    grid-template-areas: "opening-hours history";
    
    width: 70rem;
    gap: 2rem;
`;
