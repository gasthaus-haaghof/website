import React, { useEffect, useState } from 'react';
import { Routes, Route, Navigate, BrowserRouter as Router } from "react-router-dom";
import { Home } from './components/home/Home';
import { Menu } from "./components/menu/Menu";
import { About } from "./components/about/About";
import { Imprint } from "./components/imprint/Imprint";
import { Contact } from "./components/contact/Contact";
import { Login } from "./components/admin/Login";
import { Admin } from "./components/admin/Admin";
import { UserInfoType } from "./types/UserInfoType";
import { Footer } from "./components/footer/Footer";
import { NewsOverview } from "./components/news/NewsOverview";

function App() {
    const [isAuthenticated, setAuthenticated] = useState(false);
    const [uuid, setUuid] = useState<string | null>(null);

    const handleAuthenticationChange = (now: boolean, user: string) => {
        setAuthenticated(true);
        setUuid(user);
    };

    return (
        <Router>
            <>
                <Routes>
                    <Route path="/" element={<Navigate to="/home" />} />
                    <Route path="/home" element={<Home />} />
                    <Route path="/menu" element={<Menu />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/news" element={<NewsOverview />} />
                    <Route path="/contact" element={<Contact />} />

                    <Route path="/imprint" element={<Imprint />} />

                    <Route path="/site-admin" element={<Admin uuid={uuid!} authenticated={isAuthenticated} />} />
                    <Route path="/site-admin/login" element={<Login authenticated={isAuthenticated} onAuthenticationChange={handleAuthenticationChange} />} />
                </Routes>
                <Footer />
            </>
        </Router>
    );
}

export default App;
