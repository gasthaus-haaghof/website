import React, {useEffect, useState} from "react";
import styled from "@emotion/styled";
import {Api} from "../../api/api";
import {NewsType} from "../../types/NewsType";
import {LinearProgress, Typography} from "@mui/material";
import {Link} from "react-router-dom";
import moment from "moment";

export const NewsFull = () => {
    const [news, setNews] = useState<NewsType | null>(null);
    const [isWaiting, setWaiting] = useState(true);

    useEffect(() => {
        document.body.style.backgroundColor='white';
        const id = Number(window.location.pathname.split("/")[2]);

        if (isNaN(id)) {
            // redirect to news front-page if current news is not valid
            window.location.pathname = "/news";
        }

        Api.News.getNewsById(id)
            .then(result => {
                console.log(result)
                setNews(result);
                setWaiting(false);
            })
            .catch(_ =>  window.location.pathname = "/news");
    }, []);

    useEffect( () => () => {
        document.body.style.backgroundColor='rgba(231, 218, 206, 0.76)';
    }, [] );

    return(
        <>
            { isWaiting ? <LinearProgress /> :
                <StyledNewsFull className="news-full">
                    <Link to="/news">Zurück zu den Neuigkeiten</Link>
                    <Typography variant="h2">{news?.heading}</Typography>
                    <Typography style={{whiteSpace: 'pre-line'}}>{news?.text}</Typography>
                    <Typography variant="caption">
                        veröffentlich am {` `}
                        { news && moment.unix(news.created_at).format("DD.MM.yyyy, HH:mm") } {` `}
                        Uhr
                    </Typography>
                </StyledNewsFull>
            }
        </>

    );
};

const StyledNewsFull = styled.div`
    > a {
        position: absolute;
        top: 2rem;
        left: 2rem;
    }
    
    justify-self: center;
    margin: 7rem auto;
    width: 70ch;
    
    display: grid;
    justify-items: center;
    grid-template-rows: repeat(3, auto);
    
    > h2 {
        position: sticky;
        top: 0;
        
        width: 100%;
        text-align: center;
        padding: 2rem 0 6rem 0;
        
        background: linear-gradient(rgba(255,255,255,1), 96%, rgba(255,255,255,0));
    }
    
    > span {
        justify-self: start;
        margin-top: 2rem;
        color: gray;
    }
    
    * {
        background: white !important;
    }
`;
