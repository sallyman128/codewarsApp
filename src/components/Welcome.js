import React from "react";

const Welcome = () => {
    const submitUsername = () => {
        console.log('submit username')
    }

    return (
        <div>
            {/* <h1>Hi {username}!</h1> */}
            <text>Enter CodeWars username: <input value='username' onSubmit={submitUsername}></input></text>
        </div>
    )
}

export default Welcome;