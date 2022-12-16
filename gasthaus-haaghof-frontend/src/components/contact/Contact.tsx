import { Header } from "../header/Header";
import React, { useEffect, useState } from "react";
import styled from "@emotion/styled";
import { LinearProgress, Typography } from "@mui/material";
import { ContactInformationType } from "../../types/google/ContactInformationType";
import { Api } from "../../api/api";
import { Add, Phone } from "@mui/icons-material";
import { ContactForm } from "./ContactForm";
import { Address } from "./Address";

export const Contact = () => {
    const [contactInformation, setContactInformation] = useState<ContactInformationType | null>(null);
    const [isWaiting, setWaiting] = useState(true);

    useEffect(() => {
        Api.Google.getContactInformation()
            .then(result => {
                setContactInformation(result);
                setWaiting(false);
            });
    }, [])

    return (
        <>
            <Header />
            {isWaiting ? <LinearProgress /> :
                <StyledContact className="contact">
                    <Typography variant="h3">So kontaktieren Sie uns</Typography>
                    <Typography>
                        Rufen Sie uns unter {` `}
                        <Phone style={{ marginBottom: "-0.5rem", color: "blue" }} /> {` `}
                        <span className="number">{contactInformation?.internationalPhoneNumber}</span> {` `}
                        an oder benutzen Sie das Kontaktforumlar, um Tische zu reservieren oder Fragen zu stellen. Wir sind jederzeit für Sie da!
                    </Typography>
                    <ContactForm />
                    {contactInformation && <Address address={contactInformation.formattedAddress} />}
                </StyledContact>
            }
        </>
    );
};

const StyledContact = styled.div`
    margin: 2rem auto 0 auto;
    width: 80ch;

    display: grid;
    justify-items: center;
    gap: 2rem;
    text-align: center;
    
    grid-template-columns: auto;
    
    > p > span.number {
        text-decoration: underline;
        color: blue;
    }
`;
