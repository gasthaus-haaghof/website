import { Navigate } from "react-router-dom";
import {useEffect, useState} from "react";
import {UserInfoType} from "../../types/UserInfoType";
import styled from "@emotion/styled";
import {Typography} from "@mui/material";
import {Menu} from "./sub-components/menu/Menu";
import {News} from "./sub-components/news/News";
import {User} from "./sub-components/user/User";

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
                    <Typography className="navigation-element" onClick={() => setView("newUser")}>Neuen User anlegen</Typography>
                    <Typography className="navigation-element" onClick={() => window.location.pathname = "/"}>Abmelden</Typography>
                </StyledNavigation>
            </StyledHeader>
            {
                view === "menu" ? <Menu /> :
                view === "news" ? <News /> :
                view === "newUser" ? <User /> :
                <></>
            }
        </StyledAdminInterface>
  );
};

const StyledAdminInterface = styled.div`
    padding: 2rem;
`;

const StyledHeader = styled.div`
    margin-bottom: 5rem;
    
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

