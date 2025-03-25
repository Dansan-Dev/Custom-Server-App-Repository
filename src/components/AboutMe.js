import ProjProfile from "./Profiles";
import styles from "../App.css";
import * as React from "react";
import LinkedButton from "./LinkedButton";

function AboutMe() {
    return (
        <>
            <br/>
            <ProjProfile className={styles.profile}
                         id={"2"}
            />
            <LinkedButton path="/" name="back"></LinkedButton>
        </>
    )
}

export default AboutMe;