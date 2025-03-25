import { Link, useNavigate } from "react-router"

import ProjProfile from "./Profiles";
import styles from "../App.css";
import * as React from "react";
import LinkedButton from "./LinkedButton";

function Home() {
    return (
        <>
            <h1>Welcome to my website</h1>
            <br/>
            <LinkedButton path="/aboutme" name="About me"></LinkedButton>
        </>
    )
}

export default Home;