import React from "react";
import styled from "@emotion/styled";
import {Typography} from "@mui/material";

interface HistoryPartProps {
    text: JSX.Element,
    textFirst: boolean,
    pictureImport: string,
}

export const HistoryPart = ({ text, textFirst, pictureImport }: HistoryPartProps) => {
    return(
        <StyledHistoryPart style={{
            gridTemplateColumns: `auto ${textFirst ? "40rem 30rem" : "30rem 40rem"} auto`,
            gridTemplateAreas: `". ${textFirst ? "text picture" : "picture text"} ."`,
        }}
            className="background"
        >
            <StyledText style={{
                textAlign: `${textFirst ? "end" : "start"}`
            }}>
                <Typography>
                    {text}
                </Typography>
            </StyledText>
            <StyledPicture style={{ backgroundImage: `url(${pictureImport})` }}/>
        </StyledHistoryPart>
    );
};

const StyledHistoryPart = styled.div`
    display: grid;
    width: 100%;
    padding: 2rem 0;
`;

const StyledText = styled.div`
    grid-area: text;
    padding: 2rem;
    
    > p {
        max-width: 70ch;
        
        > span > br {
            margin-bottom: 0.5rem;
        }
        
        > span > span.important {
            font-weight: 600 !important;
        }
    }
`;

const StyledPicture = styled.div`
    width: 100%;
    height: 100%;
    grid-area: picture;
    
    background-size: cover;
    border-radius: 1rem;
    background-repeat: no-repeat;
`;
