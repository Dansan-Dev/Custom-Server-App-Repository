import {useNavigate} from "react-router";
import * as React from "react";

function LinkedButton({path, name}) {
    const navigate = useNavigate()

    const handleNavigate = () => {
        navigate(path);
    }

    return (
        <button className="linked-button"
            onClick={handleNavigate}
        >{name}</button>
    )
}

export default LinkedButton;