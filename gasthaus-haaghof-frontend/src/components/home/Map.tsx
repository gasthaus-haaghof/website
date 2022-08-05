import {CircularProgress, Typography} from "@mui/material";
import React from "react";
import styled from "@emotion/styled";

export const Map = () => {
    return (
        <StyledMap className="map-wrapper">
            <div className="direction" style={{ gridArea: "direction" }}>
                <Typography>Sie finden unser idyllisch-gelegenes Gasthaus zwischen Markt Erlbach und Bad Windsheim, direkt im Wald.</Typography>
                <Typography className="long">Falls Sie aus Richtung Markt Erlbach kommen, finden Sie uns circa 2km nach der Ortsausfahrt Linden auf der linken Seite.</Typography>
                <Typography className="long">Fahren Sie stattdessen von Bad Windsheim auf der B470 in Richtung Neustadt an der Aisch, biegen Sie am Ortsausgang Lenkersheim rechts ab. Nach circa 7km finden Sie uns dann auf der rechten Seite.</Typography>

                <div className="googlemaps-wrapper">
                    <CircularProgress className="googlemaps-waiting" style={{
                        position: "absolute",
                        zIndex: "-1",
                        marginTop: "calc(35rem / 2)"
                    }}/>
                    <div className="googlemaps-canvas">
                        <iframe
                            id="googlemaps-canvas"
                            src="https://maps.google.com/maps?q=haaghof&t=k&z=13&ie=UTF8&iwloc=&output=embed"
                            frameBorder="0"
                            scrolling="no"
                        />
                    </div>
                </div>
            </div>
        </StyledMap>
    );
}

const StyledMap = styled.div` 
    display: grid;
    justify-items: center;
    text-align: center;
    
    grid-template-columns: auto 70rem auto;
    grid-template-areas: ". direction .";
    
    div.direction {
        > div.googlemaps-wrapper {
            position: relative;
            margin: 3rem 0;
            height: 35rem;
            width: 100%;
        
            > div.googlemaps-canvas {
                overflow: hidden;
                background: none!important;
                height: 35rem;
                width: 100%;
                border-radius: 1rem;
                
                > iframe#googlemaps-canvas {
                    height: 35rem;
                    width: 100%;
                }
            }
        }
    }
`;
