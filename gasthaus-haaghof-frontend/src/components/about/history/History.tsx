import React from "react";

import AboutUsOne from "../../../images/aboutus-1.png";
import AboutUsTwo from "../../../images/aboutus-2.png";
import AboutUsThree from "../../../images/aboutus-3.png";
import {HistoryPart} from "./HistoryPart";
import {Typography} from "@mui/material";
import styled from "@emotion/styled";

export const History = () => {
    return(
        <StyledHistory>
            <Typography variant="h3">Die Geschichte vom Haaghof</Typography>
            <HistoryPart
                text={
                    <span>
                            Der Haaghof bestand schon vor dem Dreißigjährigen Krieg, ist aber während dieser Kriegswirren verödet. <br/>
                            <span className="important">1710</span> kaufte der brandenburg-bayreuthische Wildmeister Johann Grebner das mit Holz verwachsene Anwesen. <br/>
                            <span className="important">1717</span> erwarben es die Wildmeister Hans Meier und Hans Georg Wolf aus Schußbach und teilen den Hof. (<span className="important">Vorfahren der heutigen Besitzer</span>) <br/>
                            <span className="important">1826</span> erbaute ein Nachkomme der meierschen Hälfte, Michael Schwarz, das heutige Gasthaus. <br/>
                            <span className="important">1843</span> wurde das Nachbarhaus der Familie <span className="important">Schury</span> (jetzt Helm) erbaut. <br/>
                        </span>
                }
                textFirst={false}
                pictureImport={AboutUsOne}
            />
            <HistoryPart
                text={
                    <span>
                            <span className="important">1906</span> wurde von Johann Schuh (Urenkel des Erbauers) ein Anbau erstellt. <br/>
                            <span className="important">1953</span> liesen <span className="important">Georg</span> und <span className="important">Lina Schuh</span> das Haus renovieren; dabei wurde das Fachwerk freigelegt und die Gaststube so gestaltet, wie sie heute noch weitgehendst erhalten ist.<br/>
                            Zu dieser Zeit kehrten noch viele Holzfahrer ein, die Lang- und Brennholz aus dem Schußbachwald mit ihren Pferdefuhrwerken nach Bad Windsheim brachten.<br/>
                            <span className="important">1972</span> wurde das Gasthaus an <span className="important">Johann</span> und <span className="important">Gerlinde Kamberger</span> (geb. Schuh) übergeben.<br/>
                        </span>
                }
                textFirst
                pictureImport={AboutUsTwo}
            />
            <HistoryPart
                text={
                    <span>
                        Seit <span className="important">April 2010</span> führen <span className="important">Andreas</span> und <span className="important">Katrin Kamberger</span> das Gasthaus, das seit <span className="important">1717 in Familienbesitz</span> ist. <br/>
                            <span className="important">2011</span> wurde das Gasthaus renoviert und mit einem Anbau erweitert, so dass ein neuer zusätzlicher Gastraum entstanden ist. <br/>
                            Die neue Gaststube, welche im linken Bild zu sehen ist, hat im Gegensatz zur Alten einen recht modernen Charakter. <br/>
                        In dieser Gaststube haben rund <span className="important">50 Gäste</span> Platz.
                        </span>
                }
                textFirst={false}
                pictureImport={AboutUsThree}
            />
        </StyledHistory>
    );
};

const StyledHistory = styled.div`
    display: grid;
    grid-template-rows: repeat(4, auto); 
    justify-items: center;
    gap: 2rem;
`;
