import React from "react";
import { useState } from "react";
import Profile from './Profile/Profile';


export default function Dashboard() {
    const [profile, setProfile] = useState(0);

    function handleClick(from) {

        if (from === "Dev") {
            setProfile(1);

        } else if (from === "QA") {
            setProfile(2);

        } else if (from === "BA") {
            setProfile(3)
        }
    }

    return (
        <div>
            <button onClick={() => handleClick("Dev")}>Developer</button>
            <button onClick={() => handleClick("QA")}>Quality Analyst</button>
            <button onClick={() => handleClick("BA")}>Business Analyst</button>
            <Profile profile={profile} profileType={"Business"}/>
        </div>
    )

}