import React, {useEffect, useState} from "react";
import {Api} from "../../../api/api";
import {ReviewType} from "../../../types/google/ReviewType";
import {Review} from "./Review";
import styled from "@emotion/styled";
import {CircularProgress, Typography} from "@mui/material";

export const ReviewOverview = () => {
    const [reviews, setReviews] = useState(Array<ReviewType>());
    const [isWaiting, setWaiting] = useState(true);

    useEffect(() => {
        Api.Google.getReviews()
            .then(result => {
                setReviews(filterReviews(result));
                setWaiting(false);
            });
    }, []);

    return(
        <StyledWrapper className="rating-overview">
            <Typography variant="h3" gridArea="text">Das sagen unsere Gäste</Typography>
            <StyledReviewOverview className="reviews" style={{ gridTemplateColumns: `repeat(${reviews.length}, auto)` }}>
                { isWaiting ? <CircularProgress /> :
                    reviews.map((currentReview, index) =>
                        <Review key={index} review={currentReview} index={index}/>)
                }
            </StyledReviewOverview>
        </StyledWrapper>
    );
};

const filterReviews = (reviews: Array<ReviewType>): Array<ReviewType> => {
    return reviews
        .filter(currentReview => currentReview.rating >= 4)
        .slice(0, 3);
};

const StyledWrapper = styled.div`
    padding: 2rem 0;
    display: grid;
    grid-template-rows: repeat(2, auto);
    grid-template-columns: auto 70rem auto;
    grid-template-areas: ". text ." ". reviews .";
    
    gap: 2rem;

    justify-items: center;
    
    width: 100%;
    background-color: rgba(0, 0, 0, 0.07);
`;

const StyledReviewOverview = styled.div`
    display: grid;
    gap: 2rem;
    align-items: start;    
    grid-area: reviews;
    padding: 1rem 0;
`;
