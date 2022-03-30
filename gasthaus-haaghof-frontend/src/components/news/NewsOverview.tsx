import React, {useEffect, useState} from "react";
import {LinearProgress, Typography} from "@mui/material";
import {Header} from "../header/Header";
import {NewsType} from "../../types/NewsType";
import {Api} from "../../api/api";
import styled from "@emotion/styled";
import {NewsShort} from "./NewsShort";

export const NewsOverview = () => {
    const [news, setNews] = useState<Array<NewsType>>([]);
    const [isWaiting, setWaiting] = useState(true);

    useEffect(() => {
        Api.News.getAll()
            .then(result => {
                setNews(result);
                setWaiting(false);
            });
    }, []);

    return(
        <>
            <Header />
            { isWaiting ? <LinearProgress /> :
                <StyledNewsOverview className="news-overview" style={{
                    gridTemplateRows: `repeat(${news ? news.length + 1 : 1}, auto)`
                }}>
                    <Typography variant="h3">Aktuelles</Typography>
                    { news.length <= 0 && <Typography>Hmm.. hier scheint es sehr ruhig zu sein. Kommen Sie später wieder!</Typography>}
                    { news.map(currentNews => <NewsShort key={currentNews.id} news={currentNews} />) }
                </StyledNewsOverview>
            }
        </>
    );
};

const StyledNewsOverview = styled.div`
    margin-top: 2rem;
    
    display: grid;
    justify-items: center;
    gap: 3rem;
`;
