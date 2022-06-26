import React, { useEffect, useState } from "react";
import { fetchCodewars } from "../api/fetchRequests";

const DisplayRanks = () => {

    // const [data, setData] = useState({});

    // useEffect( () => {
    //     setData(fetchCodewars())
    //     console.log(data)
    // }, [])

    const data = fetchCodewars();
    console.log(data)

    return (
        <div>
            display ranks
            <p>{data.username}</p>
        </div>
    )
}

export default DisplayRanks;