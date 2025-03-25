import React from "react";
import MakeProfile from "./Profile";
import daniel from "./images/Självporträtt.png";
import logo from "./images/logo.svg";


const profiles = [
    MakeProfile("1", "Daniel Sandström", "mail@danielsandstrom.org", "+46705908530", daniel,128),
    MakeProfile("2", "test testson", "test@gmail.com", "+460011122233", logo, 100)
]

function GetProfile(id) {
    return profiles.find(p => p.id === id);
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

export default function ProjProfile({ id }) {
    const p = GetProfile(id)
    if (!p) return <div>No profile found</div>;
    return VisualizeProfile(p);
}