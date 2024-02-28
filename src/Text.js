import React, { useEffect } from "react";
import { useState } from "react";

export const Text = () => {
    const [text, setText] = useState("");

    useEffect(() => {
        console.log('Component Mount');

        return () => {
            console.log("Component Unmouted");
        }
    }, []);
    return (
        <div>
            <input onChange={(event) => {
                setText(event.target.value)
            }} />
            <h1>{text}</h1>
        </div>
    );
}