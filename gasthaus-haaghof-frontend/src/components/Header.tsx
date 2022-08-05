import {Typography} from "@mui/material";
import styled from "@emotion/styled";
import React, {useState} from "react";

import BackgroundImage from "../images/pano/cover.jpg"
import {Link} from "react-router-dom";

export const Header = () => {
    const [fontSize] = useState(96);

    return(
        <>
            <StyledWelcomeImage>
                <Typography fontSize={fontSize + 32}>Gasthaus</Typography>
                <Typography className="cursive" fontSize={fontSize}>zur Stadt Bad Windsheim</Typography>
            </StyledWelcomeImage>
            <MenuBar>
                <Link to="/home">Startseite</Link>
                <Link to="/menu">Speisekarte</Link>
                <Link to="/about">Über uns</Link>
                <Link to="/news">Neuigkeiten</Link>
                <Link to="/contact">Kontakt</Link>
            </MenuBar>
        </>
    );
};

const StyledWelcomeImage = styled.div`
    display: grid;
    justify-items: center;
    
    width: 100vw;
    height: 25rem;
    
    color: white;
    background: 
        linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0)), 
        url(${BackgroundImage});
    background-repeat: no-repeat;
    background-size: contain;
    background-position: 50% 50%;
    
    overflow: hidden;
    
    > p:first-of-type {
        margin-top: 3rem;
    }
    
    > p:nth-of-type(2n) {
        position: absolute;
        margin-top: 12rem;
    }
`;

const MenuBar = styled.div`
    position: sticky;
    top: 0;
    z-index: 2;

    display: grid;
    grid-template-columns: repeat(5, auto);
    grid-column-start: 2;
    justify-items: center;
    align-items: center;
    
    width: 100vw;
    height: 3rem;
    background: rgba(25, 25, 25, 1);
    
    > a {
        color: white;
        text-decoration: none;
    }
    
    > a:hover {
        text-decoration: underline;
    }
`;
