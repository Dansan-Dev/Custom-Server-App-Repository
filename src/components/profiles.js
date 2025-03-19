import {MakeProfile} from "./profile";

const profiles = [
    MakeProfile(1, "Daniel Sandström", "mail@danielsandstrom.org", "+46705908530", "../images/Självproträtt.png",100),
    MakeProfile(2, "test testson", "test@gmail.com", "+460011122233", "../images/icon.svg", 100)
]

function getProfile(id) {
    return profiles.find(profile => profile.id === id);
}

function VisualizeProfile(profile) {
    return(
        <>
            <a>{profile.name}</a>
            <a>{profile.mail}</a>
            <a>{profile.phone}</a>
            <img href={profile.imageUrl} width={profile.size}/>
        </>
    );
}

function projectProfile(id) {
    const p = getProfile(id)
    return VisualizeProfile(p);
}

export default projectProfile;