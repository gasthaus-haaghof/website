import {Header} from "../header/Header";
import {Typography} from "@mui/material";
import styled from "@emotion/styled";
import NotFoundImage from "../../images/component-images/404.png";
import {Link} from "react-router-dom";


export const NotFoundPage = () => {
    return (
        <>
            <Header />
            <Styled404>
                <StyledBackgroundImage />
                <Typography variant="h2">Fehler</Typography>
                <Typography variant="h5" className="explanation">Uups, diese Seite wurde bei uns nicht gefunden!</Typography>
                <Typography variant="h6">
                    Aber keine Sorge - wir haben genug Seiten, welche funktionieren! Wie wäre es mit {` `}
                    <Link to="/home" >unserer Startseite</Link>?
                </Typography>.
            </Styled404>
        </>
    );
};

const Styled404 = styled.div`
    display: grid;
    justify-items: center;
    
    margin-top: 6rem;
    
    .explanation {
        margin-top: 1rem;
    }
    
    h2, h5, h6 {
        padding: 0 1rem;
    }
    
    text-align: center;
`;

const StyledBackgroundImage = styled.div`
    width: 20rem;
    height: 20rem;

    background-image: url(${NotFoundImage});
    background-size: contain;
    background-repeat: no-repeat;
    
    margin-left: -2rem;
`;
