import {Typography} from "@mui/material";
import styled from "@emotion/styled";
import {useEffect, useState} from "react";

import BackgroundImage from "../../images/pano/cover.jpg"
import {Link} from "react-router-dom";
import {Menu, MenuOpen} from "@mui/icons-material";
import {Path} from "../../utils/pathname";

export const Header = () => {
    const [fontSize] = useState(96);
    const [currentlyShown, setCurrentlyShown] = useState("");

    const [isMenuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        // Split on every possible combination of url parts
        const currentLocation = window.location.pathname
            .split("/")[1]
            .split("?")[0]
            .split("%3F")[0];

        setCurrentlyShown(Path.toSite(currentLocation));
    }, []);

    useEffect(() => {
        const htmlStyle = document.documentElement.style;
        const menuBarMobile = document.getElementById("menu-bar-mobile");
        const menuBarMobileBackground = document.getElementById("menu-bar-mobile-background");

        if (isMenuOpen && menuBarMobile && menuBarMobileBackground) {
            htmlStyle.overflow = "hidden";
            menuBarMobile.classList.add("shown");
            menuBarMobileBackground.classList.add("shown-background");
        } else if (menuBarMobile && menuBarMobileBackground) {
            htmlStyle.overflow = "";
            menuBarMobile.classList.remove("shown");
            menuBarMobileBackground.classList.remove("shown-background");
        }
    }, [isMenuOpen]);

    const handleClick = () => {
        setMenuOpen(!isMenuOpen);
    };

    return(
        <>
            <StyledWelcomeImage className="header-image">
                <Typography className="heading" fontSize={fontSize + 32}>Gasthaus</Typography>
                <Typography className="sub-heading cursive" fontSize={fontSize}>zur Stadt Bad Windsheim</Typography>
            </StyledWelcomeImage>
            <MenuBar id="menu-bar">
                <Menu className="menu-bar-icon-mobile" onClick={handleClick}/>
                <Typography className="currently-shown">{currentlyShown}</Typography>

                <Link to="/home">Startseite</Link>
                <Link to="/menu">Speisekarte</Link>
                <Link to="/about">Über uns</Link>
                <Link to="/news">Aktuelles</Link>
                <Link to="/contact">Kontakt</Link>
            </MenuBar>

            <StyledBackground id="menu-bar-mobile-background"/>
            <StyledMenuBarMobile id="menu-bar-mobile" className="menu-bar-mobile">
                <div className="actual-menu" >
                    <div className="close">
                        <MenuOpen className="menu-bar-icon-mobile" onClick={handleClick} fontSize="large"/>
                        <Typography onClick={handleClick} >Menü schließen</Typography>
                    </div>
                    <div className="menu" onClick={handleClick}>
                        <Link to="/home">Startseite</Link>
                        <Link to="/menu">Speisekarte</Link>
                        <Link to="/about">Über uns</Link>
                        <Link to="/news">Aktuelles</Link>
                        <Link to="/contact">Kontakt</Link>
                        <Link to="/imprint">Impressum</Link>
                    </div>
                </div>
            </StyledMenuBarMobile>
        </>
    );
};

const StyledWelcomeImage = styled.div`
    display: flex;
    justify-content: center;
    
    width: 100vw;
    height: 25rem;
    
    color: white;
    background: 
        linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0)), 
        url(${BackgroundImage});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: 50% 65%;
    
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
    z-index: 1;
    color: white;

    display: grid;
    grid-template-columns: repeat(5, auto);
    grid-column-start: 2;
    justify-items: center;
    align-items: center;
    
    width: 100vw;
    height: 3rem;
    background: rgba(25, 25, 25, 1);
    
    > a {
        text-decoration: none;
        color: white;
        
        &:hover {
            text-decoration: underline;
        }
    }
    
    > p.currently-shown {
        display: none;
        grid-area: currently-shown;
    }
    
    > svg.menu-bar-icon-mobile {
        display: none;
        margin-left: 1rem;
        grid-area: menu-bar-icon-mobile;
        
        &:hover {
            cursor: pointer;
        }
    }
`;

const StyledBackground = styled.div`
    position: fixed;
    top: 0;
    
    z-index: 1;
    
    height: 100vh;
    width: 100vw;
    
    transition: opacity 0.3s ease-in-out;
    opacity: 0;
    
    pointer-events: none;
    
    background: rgba(0, 0, 0, 0.5);
`;

const StyledMenuBarMobile = styled.div`
    position: fixed;
    top: 0;
    
    z-index: 2;
    
    height: 100vh;
    width: 100vw;
    
    transition: margin 0.3s ease-in-out;
    
    display: grid;
    grid-template-columns: 1.5fr 1fr;
    grid-template-areas: "actual .";
    margin-left: -100vw;
    
    > div.actual-menu {
        color: white;
        grid-area: actual;
        background: rgba(25, 25, 25, 1);
        
        display: grid;
        grid-template-rows: 5rem auto;
        grid-template-areas: "close";
        
        > div.close {
            grid-area: close;
            padding-left: 1rem;
            
            display: grid;
            grid-template-columns: 2rem auto;
            gap: 1rem;
            align-items: center;
            
            &:hover {
                cursor: pointer;
            }
            
            > p:hover {
                text-decoration: underline;
            }
        }
        
        > div.menu {
            padding-left: 1rem;

            display: grid;
            grid-template-rows: repeat(6, fit-content(5rem));
            gap: 1rem;
            
            > a {
                text-decoration: none;
                color: white;
            
                &:hover {
                    text-decoration: underline;
                }
            }
        }
    }
`;
