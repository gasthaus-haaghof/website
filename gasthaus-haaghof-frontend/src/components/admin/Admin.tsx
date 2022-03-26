import { Navigate } from "react-router-dom";
import {useEffect, useState} from "react";
import {UserInfoType} from "../../types/UserInfoType";
import styled from "@emotion/styled";
import {Typography} from "@mui/material";

interface AdminProps {
    authenticated: boolean,
    user: UserInfoType,
}

interface AdminInterfaceProps {
    user: UserInfoType,
}

export const Admin = ({ authenticated, user } : AdminProps) => {
    return(
        <>
            { authenticated ? <AdminInterface user={user} /> : <Navigate to="/site-admin/login"/>}
        </>
    );
};

const AdminInterface = ({ user }: AdminInterfaceProps) => {
    const [view, setView] = useState("menu");

    return(
        <StyledAdminInterface>
            <StyledHeader>
                <Typography variant="h4">Gasthaus zur Stadt Bad Windsheim</Typography>
                <Typography variant="h6">Admin-Interface</Typography>
                <hr className="divider"/>
                <StyledNavigation>
                    <Typography className="navigation-element" onClick={() => setView("menu")}>Speisekarte bearbeiten</Typography>
                    <Typography className="navigation-element" onClick={() => setView("news")}>News veröffentlichen</Typography>
                    <Typography className="navigation-element" onClick={() => setView("new")}>Neuen User anlegen</Typography>
                    <Typography className="navigation-element" onClick={() => window.location.pathname = "/"}>Abmelden</Typography>
                </StyledNavigation>
            </StyledHeader>
        </StyledAdminInterface>
  );
};

const StyledAdminInterface = styled.div`
    padding: 2rem;
`;

const StyledHeader = styled.div`
    > h2 {
        margin-left: 1rem;
    }

    > hr.divider {
        margin-top: 2rem; 
    }
`;

const StyledNavigation = styled.div`
    display: grid;
    grid-template-columns: repeat(4, fit-content(25rem));
    justify-items: start;
    gap: 2rem;
    
    > .navigation-element {
        text-decoration: underline;
    }
    
    > .navigation-element:hover {
        cursor: pointer;
        color: blue;
    }
`;

