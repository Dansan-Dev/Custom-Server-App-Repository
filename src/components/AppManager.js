import { Routes, Route } from 'react-router'

import * as React from "react";
import Home from "./Home";
import Empty from "./Empty";
import AboutMe from "./AboutMe";

function AppManager() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/aboutme" element={<AboutMe />} />
                <Route path="/empty" element={<Empty />}/>
            </Routes>
        </>
    )
}

export default AppManager;