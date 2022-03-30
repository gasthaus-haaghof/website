import React, {useEffect} from "react";
import {Header} from "../header/Header";
import styled from "@emotion/styled";
import {History} from "./history/History";

export const About = () => {
    useEffect(() => {
        window.scrollTo({top: 0, behavior: 'smooth'});
    }, []);

    return(
        <>
            <Header />
            <StyledAboutUs>
                <History />
            </StyledAboutUs>
        </>
    );
};

const StyledAboutUs = styled.div`
    display: grid;
    margin-top: 2rem;
    gap: 2rem;
`;
