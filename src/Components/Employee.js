import React from "react";
import { useState } from "react";
import Profile from "./Profile/Profile";

export default function Employee() {
    const [employee, setEmployee] = useState(0);

    function handleClick(from) {

        if (from === "IT") {
            setEmployee(1);

        } else if (from === "HR") {
            setEmployee(2);

        } else if (from === "Support") {
            setEmployee(3);

        }
    }

    return (
        <div>
            <button onClick={() => handleClick("IT")}> Software Development</button>
            <button onClick={() => handleClick("HR")}>Human Resource</button>
            <button onClick={() => handleClick("Support")}>Support Team</button>
            <Profile employee={employee} profileType={"Employee"}/>
        </div>
    )
} 