import {Typography} from "@mui/material";
import React from "react";
import styled from "@emotion/styled";
import {Link} from "react-router-dom";

export const HistoryShort = () => {
    return(
        <StyledHistoryShort className="history-short">
            <Typography variant="h4" style={{ marginBottom: "3rem" }}>Ein Gasthaus mit Geschichte</Typography>
            <Typography>

                Die Geschichte des Haaghof begann bereits vor dem Dreißigjährigen Krieg.
                <br />
                Schon <span className="important">1826</span> wurde das Gasthaus erbaut, und ist seit her in Familienbesitz.
                <br />
                <br />
                Seit <span className="important">April 2010</span> führen Andreas und Katrin Kamberger das Gasthaus.
                <br />
                2011 wurde das Gasthaus renoviert und mit einem Anbau erweitert, so dass ein neuer zusätzlicher Gastraum entstanden ist.
                <br /><br />
                Sie wollen mehr erfahren?
                <Link to="/about" className="more">Weiterlesen</Link>
            </Typography>
        </StyledHistoryShort>
    );
};

const StyledHistoryShort = styled.div`
    justify-self: end;
    align-self: start;
    text-align: start;
    grid-area: history;
    
    display: grid;
    width: 60ch;
    
    > p > span.important {
    }
    
    > p > .more {
        color: black;
        margin-left: 0.5rem; 
        
        &:hover {
            cursor: pointer;
        }
    }
`;
