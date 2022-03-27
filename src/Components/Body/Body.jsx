import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Welcome } from "../Welcome/Welcome";
import { Team } from "../Team/Team";
import { Resources } from "../Resources/Resources";

import { Navbar } from '../Navbar/Navbar';

export const Body = ({logOut}) => {

    return (
        <Router>
            <Navbar logOut={logOut}/>
            <Routes>
                <Route path="/" element={<Welcome />} />
                <Route path="/Team" element={<Team />} />
                <Route path="/Resources" element={<Resources />} />
            </Routes>
        </Router>
    )
}
