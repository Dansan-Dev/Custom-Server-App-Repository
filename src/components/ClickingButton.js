import * as React from "react";

function ClickingButton({button_id}) {
    var counter = 0;
    const handleClick = () => {
        counter++;
        document.getElementById(button_id).innerHTML = counter;
    }

    return (
        <button id={button_id} className="click-button"
                onClick={handleClick}
        >{counter}</button>
    )
}

export default ClickingButton;