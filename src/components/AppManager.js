import { Routes, Route } from 'react-router'

import * as React from "react";
import Home from "./Home";
import Empty from "./Empty";
import AboutMe from "./AboutMe";
import ClickingGame from "./ClickingGame";

function AppManager() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/aboutme" element={<AboutMe />} />
                <Route path="/empty" element={<Empty />}/>
                <Route path="/clicking" element={<ClickingGame />}/>
            </Routes>
        </>
    )
}

export default AppManager;