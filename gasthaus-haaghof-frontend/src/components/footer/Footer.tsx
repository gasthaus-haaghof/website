import React from "react";
import { Typography } from "@mui/material";
import styled from "@emotion/styled";
import { Link } from "react-router-dom";

export const Footer = () => {
    return (
        <StyledFooter className="footer">
            <Typography className="cr" zIndex={2}>Andreas und Katrin Kamberger, veröffentlicht 2022</Typography>
            <Link to="/imprint" className="imprint" style={{ zIndex: 2 }}>Impressum</Link>
            <Link to="/site-admin" className="site-admin">Anmelden</Link>
        </StyledFooter>
    );
};

const StyledFooter = styled.div`
    display: grid;
    grid-template-rows: auto, auto;
    grid-template-columns: auto auto;
    grid-template-areas: "cr cr" "imprint login";
    justify-items: center;
    gap: 0rem 1rem;
    
    margin-top: 5rem;
    padding-bottom: 1rem;
    
    > p, a {
        font-size: 14px;
        color: gray;
    }
    
    > .cr {
        grid-area: cr;
    }
    
    > .imprint {
        grid-area: imprint;
        justify-self: end;
    }
    
    > .site-admin {
        grid-area: login;
        justify-self: start;
    }
`;
