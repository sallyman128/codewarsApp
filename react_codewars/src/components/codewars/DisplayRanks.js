import React, { useEffect, useState } from "react";
import { fetchCodewars } from "../api/fetchRequests";

const DisplayRanks = (ranks) => {

    return (
        <div>
            <p>display ranks</p>
            <ul>
                {/* {Object.entries(ranks.languages).map(([language, details]) => (
                    <li>{language}</li>
                ))} */}
            </ul>
        </div>
    )
}

export default DisplayRanks;