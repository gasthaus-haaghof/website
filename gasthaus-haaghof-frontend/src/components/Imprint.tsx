import {Typography} from "@mui/material";
import styled from "@emotion/styled";
import {Header} from "./Header";
import React, {useEffect} from "react";

export const Imprint = () => {
    useEffect(() => {
        window.scrollTo({top: 0, behavior: 'smooth'});
    }, []);

    return(
        <>
            <Header />
            <StyledImprint>
                <div>
                    <Typography variant="h3">Impressum</Typography>
                    <br />
                    <Typography variant="h5">Angaben gemäß § 5 TMG</Typography>
                    <br />

                    <Typography>
                        Andreas Kamberger <br />
                        Gasthaus Zur Stadt Bad Windsheim <br />
                        Haaghof 2 <br />
                        91459 Markt Erlbach
                    </Typography>
                    <br />

                    <Typography variant="h6">Kontakt</Typography>
                    <Typography>
                        Telefon: +49 9846 232 <br />
                        E-Mail: <a href="mailto:info@gasthaus-haaghof.de">info@gasthaus-haaghof.de</a>
                    </Typography>
                    <br />

                    <Typography variant="h6">Umsatzsteuer-ID</Typography>
                    <Typography>
                        Umsatzsteuer-Identifikationsnummer gemäß §27 a Umsatzsteuergesetz<br />
                        DE270436079
                    </Typography>
                    <br />

                    <Typography variant="h6">Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV</Typography>
                    <Typography>
                        Katrin und Andreas Kamberger<br />
                        Haaghof 2<br />
                        91459 Markt Erlbach<br />
                    </Typography>
                    <br />

                    <Typography variant="h5">Haftungsausschluss</Typography>
                    <Typography variant="h6">Haftung für Inhalte</Typography>
                    <Typography>
                        Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte können wir jedoch keine Gewähr übernehmen. Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen. Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.
                    </Typography>
                    <br />

                    <Typography variant="h6">Haftung für Links</Typography>
                    <Typography>
                        Unser Angebot enthält Links zu externen Webseiten Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar. Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend entfernen.
                    </Typography>
                    <br />

                    <Typography variant="h6">Urheberrecht</Typography>
                    <Typography>
                        Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet. Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte Dritter beachtet. Insbesondere werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen.
                    </Typography>
                    <br />

                    <Typography variant="h6">Datenschutz</Typography>
                    <Typography>
                        Die Nutzung unserer Webseite ist in der Regel ohne Angabe personenbezogener Daten möglich. Soweit auf unseren Seiten personenbezogene Daten (beispielsweise Name, Anschrift oder eMail-Adressen) erhoben werden, erfolgt dies, soweit möglich, stets auf freiwilliger Basis. Diese Daten werden ohne Ihre ausdrückliche Zustimmung nicht an Dritte weitergegeben. <br />
                        Wir weisen darauf hin, dass die Datenübertragung im Internet (z.B. bei der Kommunikation per E-Mail) Sicherheitslücken aufweisen kann. Ein lückenloser Schutz der Daten vor dem Zugriff durch Dritte ist nicht möglich. <br />
                        Der Nutzung von im Rahmen der Impressumspflicht veröffentlichten Kontaktdaten durch Dritte zur Übersendung von nicht ausdrücklich angeforderter Werbung und Informationsmaterialien wird hiermit ausdrücklich widersprochen. Die Betreiber der Seiten behalten sich ausdrücklich rechtliche Schritte im Falle der unverlangten Zusendung von Werbeinformationen, etwa durch Spam-Mails, vor.
                    </Typography>
                    <br />
                </div>
            </StyledImprint>
        </>
    );
};

const StyledImprint = styled.div`
    margin: 2rem;
    
    display: grid;
    grid-template-columns: auto 100ch auto;
    
    > div {
        grid-column-start: 2;
    }
`;
