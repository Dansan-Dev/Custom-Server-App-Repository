import React from "react";
import MakeProfile from "./profile";
import daniel from "./images/Självporträtt.png";


const profiles = [
    MakeProfile("1", "Daniel Sandström", "mail@danielsandstrom.org", "+46705908530", daniel,128),
    MakeProfile("2", "test testson", "test@gmail.com", "+460011122233", "../images/icon.svg", 100)
]

function GetProfile(id) {
    return profiles.find(p => p.id == id);
}

function VisualizeProfile(profile) {
    return (
        <div className="profile">
            <img src={profile.imageUrl} alt={profile.name}/>
            <p>{profile.name}</p>
            <p>{profile.mail}</p>
            <p>{profile.phone}</p>
        </div>
    );
}

export default function ProjectProfile({ id }) {
    const p = GetProfile(id)
    return VisualizeProfile(p);
}