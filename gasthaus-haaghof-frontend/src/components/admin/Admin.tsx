import { Navigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { UserInfoType } from "../../types/UserInfoType";
import styled from "@emotion/styled";
import { Typography } from "@mui/material";
import { Menu } from "./sub-components/menu/Menu";
import { News } from "./sub-components/news/News";
import { User } from "./sub-components/user/User";
import { DeleteNews } from "./sub-components/news/DeleteNews";

interface AdminProps {
    authenticated: boolean,
    uuid: string,
}

interface AdminInterfaceProps {
    uuid: string,
}

export const Admin = ({ authenticated, uuid }: AdminProps) => {
    return (
        <>
            {authenticated ? <AdminInterface uuid={uuid} /> : <Navigate to="/site-admin/login" />}
        </>
    );
};

const AdminInterface = ({ uuid }: AdminInterfaceProps) => {
    const [view, setView] = useState("news");

    return (
        <>
            <div className="no-view" style={{ position: "absolute", display: "none" }} >
                <Typography>
                    Bitte beachten Sie, dass das Admin-Interface aus technischen Gründen zunächst nicht von Mobilgeräten aus erreichbar ist.
                    <br /><br />
                    Rufen Sie daher diese Website bitte von einem "Desktop"-Computer auf, damit Sie Änderungen an Ihrer Website vornehmen können.
                </Typography>
            </div>

            <StyledAdminInterface>
                <StyledHeader>
                    <Typography variant="h4">Gasthaus zur Stadt Bad Windsheim</Typography>
                    <Typography variant="h6">Admin-Interface</Typography>
                    <hr className="divider" />
                    <StyledNavigation>
                        <Typography className="navigation-element" onClick={() => setView("news")}>News veröffentlichen</Typography>
                        <Typography className="navigation-element" onClick={() => setView("deleteNews")}>News löschen</Typography>
                        <Typography className="navigation-element" onClick={() => setView("newUser")}>Neuen User anlegen</Typography>
                        <Typography className="navigation-element" onClick={() => window.location.pathname = "/"}>Abmelden</Typography>
                    </StyledNavigation>
                </StyledHeader>
                {
                    view === "news" ? <News token={uuid} /> :
                        view === "deleteNews" ? <DeleteNews token={uuid} /> :
                            view === "newUser" ? <User token={uuid} /> :
                                <></>
                }
            </StyledAdminInterface>
        </>
    );
};

const StyledAdminInterface = styled.div`
    padding: 2rem;
    overflow-y: hidden;
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

