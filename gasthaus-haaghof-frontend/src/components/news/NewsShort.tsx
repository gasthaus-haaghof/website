import React, {useEffect, useState} from "react";
import {NewsType} from "../../types/NewsType";
import styled from "@emotion/styled";
import {Button, Typography} from "@mui/material";
import moment from "moment";
import {StringUtils} from "../../utils/string";

import BackgroundImage from "../../images/house-2.png";

interface NewsShortProps {
    news: NewsType,
}

export const NewsShort = ({ news } : NewsShortProps) => {
    const [backgroundImage, setBackgroundImage] = useState("");

    useEffect(() => {
        const images = fetchImages(require.context('../../images/news/', false, /\.(png|jpe?g|svg)$/));
        const imageToDisplay = images[images.length * Math.random() | 0];
        setBackgroundImage(imageToDisplay);
    }, []);

    return(
        <StyledNewsShort className="news-short" style={{
            background: `linear-gradient( rgba(255, 255, 255, 0.8) 100%, rgba(255, 255, 255, 0.8) 100%), url(${backgroundImage})`
        }}>
            <Typography variant="h4" gridArea="heading">{news.heading}</Typography>
            <Typography variant="caption" gridArea="ca">
                veröffentlich am {` `}
                { news && moment.unix(news.created_at).format("DD.MM.yyyy, HH:mm") } {` `}
                Uhr
            </Typography>
            <Typography gridArea="text">{StringUtils.substr(news.text, 200)}</Typography>
            <Button
                variant="outlined"
                onClick={() => window.location.pathname = `/news/${news.id}`}
                style={{ gridArea: "more", backgroundColor: "white" }}
            >
                Ganzen Artikel lesen
            </Button>
        </StyledNewsShort>
    );
};

const fetchImages = (context: __WebpackModuleApi.RequireContext) => {
    return context
        .keys()
        .map((item, index) => context(item));
};

const StyledNewsShort = styled.div`
    text-align: center;
    width: 70ch;
    
    background-repeat: no-repeat !important;
    background-size: cover !important;
    
    border: 1px solid black;
    border-radius: 1rem;
    
    display: grid;
    grid-template-columns: auto auto 15rem;
    grid-template-rows: repeat(3, auto);
    grid-template-areas: "heading heading heading" 
                         "ca ca ca"
                         "text text text"
                         ". . more";
    
    gap: 2rem;
    padding: 2rem;
    
    > span {
        color: gray;
    }
    
    > button {
        transition: transform 0.25s cubic-bezier(.64,0,.54,1.64);
    }    
    
    &:hover {
        > button {
            transform: scale(1.115);
        }
    }
`;
