import React, {useState} from "react";
import styled from "@emotion/styled";

interface PictureProps {
    pictureImport: string,
    currentNumber: number,
    totalNumber: number,
}

export const Picture = ({ pictureImport, currentNumber, totalNumber }: PictureProps) => {
    const [open, setOpen] = useState(false);

    const handleExpand = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return(
        <StyledPicture style={{
            background: `url(${pictureImport})`,
            transformOrigin: getTransformOrigin(currentNumber, totalNumber),
        }}
            onClick={handleExpand}
        />
    );
};

const getTransformOrigin = (currentNumber: number, totalNumber: number): string => {
    switch (currentNumber) {
        case 0:
            return "left";
        case totalNumber - 1:
            return "right";
        default:
            return "middle";
    }
};

const StyledPicture = styled.div`
    height: 100%;
    width: 100%;
    background-size: cover !important;
    background-position: 50% 50% !important;
    transition: transform ease-in-out .175s, 
                border-radius ease-in-out .175s;
                
    &:hover { 
        cursor: pointer;
        transform: scale(1.3);
        border-radius: 0.5rem;
    }
`;
