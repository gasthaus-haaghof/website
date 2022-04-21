import React from "react";
import styled from "@emotion/styled";
import {Typography} from "@mui/material";
import {TextPart} from "../TextPart";

export const WoodWork = () => {
    return(
        <StyledWoodWork>
            <Typography variant="h3">Gedrechselte Unikate</Typography>
            <TextPart
                text={
                    <span>

                    </span>
                }
                textFirst={false}
                pictureImport={""}
            />
        </StyledWoodWork>
    );
};

const StyledWoodWork = styled.div`
    display: grid;
    grid-template-rows: repeat(4, auto); 
    justify-items: center;
    gap: 2rem;
    
    margin-top: 5rem;
`;

