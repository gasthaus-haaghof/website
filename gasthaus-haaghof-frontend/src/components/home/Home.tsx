import {ReviewOverview} from "./review/ReviewOverview";
import styled from "@emotion/styled";
import {Header} from "../Header";
import {Welcome} from "./Welcome";
import {OpeningHours} from "./OpeningHours";
import {ContactShort} from "../contact/ContactShort";
import {HistoryShort} from "../about/history/HistoryShort";
import {PictureSeries} from "./picture-series/PictureSeries";

export const Home = () => {
    return(
        <>
            <Header />
            <StyledHome>
                <Welcome />
                <StyledTwoGrid>
                    <OpeningHours />
                    <HistoryShort />
                </StyledTwoGrid>
                <ReviewOverview />
                <ContactShort />
                <PictureSeries />
            </StyledHome>
        </>
    );
};

const StyledHome = styled.div`
    display: grid;
    grid-template-columns: auto;
    justify-items: center;
    margin-top: 5rem;
    
    grid-template-rows: repeat(5, auto);
    gap: 5rem;
`;

const StyledTwoGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(2, auto);
    grid-template-areas: "opening-hours history";
    
    width: 70rem;
    gap: 2rem;
`;
