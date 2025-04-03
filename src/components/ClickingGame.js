import ClickingButton from "./ClickingButton";
import LinkedButton from "./LinkedButton";
import * as React from "react";

function ClickingGame() {
    return (
        <>
            <ClickingButton button_id="clicking-button-0" />
            <br/>
            <LinkedButton path="/" name="Back"/>
        </>
);
}

export default ClickingGame;