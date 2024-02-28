import { useState } from "react";

export const Menu = (props) => {
    const [username, setUsername] = useState("");
    return (
        <div>
            <h1>This is a Menu Page for {props.username}</h1>
            <input onChange={(event) => { setUsername(event.target.value) }} />
            <button onClick={() => { props.setname(username); }}>Click Me</button>
        </div>
    );
};