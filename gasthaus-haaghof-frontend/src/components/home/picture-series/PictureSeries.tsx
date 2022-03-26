import React, {useState} from "react";
import styled from "@emotion/styled";

import FoodOne from "../../../images/food-1.png";
import FoodTwo from "../../../images/food-2.png";
import FoodThree from "../../../images/food-3.png";
import HouseOne from "../../../images/house-1.png";
import HouseTwo from "../../../images/house-2.png";
import {Picture} from "./Picture";

export const PictureSeries = () => {
    const [pictures] = useState([FoodOne, FoodTwo, FoodThree, HouseOne, HouseTwo]);

    return(
        <StyledPictureSeries>
            { pictures.map((picture, index) =>
                <Picture
                    key={index}
                    pictureImport={picture}
                    currentNumber={index}
                    totalNumber={pictures.length}
                />) }
        </StyledPictureSeries>
    );
};

const StyledPictureSeries = styled.div`
    width: 100%;
    height: 20rem;
    
    display: grid;
    grid-template-columns: repeat(5, auto);

`;
