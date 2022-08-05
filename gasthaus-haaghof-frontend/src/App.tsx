import React, {useEffect, useState} from 'react';
import {Routes, Route, Navigate, BrowserRouter as Router} from "react-router-dom";
import { Home } from './components/home/Home';
import { Menu } from "./components/menu/Menu";
import { About } from "./components/about/About";
import { Imprint } from "./components/imprint/Imprint";
import {Contact} from "./components/contact/Contact";
import {Login} from "./components/admin/Login";
import {Admin} from "./components/admin/Admin";
import {UserInfoType} from "./types/UserInfoType";
import {Footer} from "./components/footer/Footer";
import {NewsOverview} from "./components/news/NewsOverview";
import {NewsFull} from "./components/news/NewsFull";

function App() {
    const [isAuthenticated, setAuthenticated] = useState(false);
    const [user, setUser] = useState<UserInfoType | null>(null);

    const handleAuthenticationChange = (now: boolean, user: UserInfoType) => {
        setAuthenticated(true);
        setUser(user);
    };

    return (
        <Router>
            <>
                <Routes>
                    <Route path="/" element={ <Navigate to="/home"/> } />
                    <Route path="/home" element={ <Home/> } />
                    <Route path="/menu" element={ <Menu/> } />
                    <Route path="/about" element={ <About/> } />
                    <Route path="/news" element={ <NewsOverview/> } />
                    <Route path="/news/:id" element={ <NewsFull/> } />
                    <Route path="/contact" element={ <Contact/> } />

                    <Route path="/imprint" element={ <Imprint/> } />

                    <Route path="/site-admin" element={ <Admin user={user!} authenticated={isAuthenticated}/> } />
                    <Route path="/site-admin/login" element={ <Login authenticated={isAuthenticated} onAuthenticationChange={handleAuthenticationChange}/> } />
                </Routes>
                <Footer />
            </>
        </Router>
    );
}

export default App;
