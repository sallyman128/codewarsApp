import React from "react";
import { useState } from "react";
import { fetchCodewarsData } from "./api/fetchRequests";
import Dashboard from "./Dashboard";

const Welcome = () => {
    const [username, setUsername] = useState()
    const [data, setData] = useState({});

    const handleUsernameUpdate = (event) => {
        setUsername(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        fetchCodewarsData(username).then(data => setData(data))
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <h1>Enter CodeWars username:</h1>
                <input type='text' name='username' onChange={handleUsernameUpdate} />
                <input type='submit' value='Submit' />
            </form>
            <Dashboard data={data}/>
        </div>
    )
}

export default Welcome;