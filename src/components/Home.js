import ProjProfile from "./Profiles";
import styles from "../App.css";
import * as React from "react";

function Home() {
    return (
        <>
            <br/>
            <ProjProfile className={styles.profile}
                         id={"2"}
            />
        </>
    )
}

export default Home;