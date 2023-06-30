import { Co2Sharp } from "@mui/icons-material";
import { setNestedObjectValues } from "formik";
import React, { useEffect } from "react";

const Dashboard = ({data}) => {


  return (
    <div>
      {data === null ? (
        <p>{JSON.stringify(data)}</p>
      ) : (
        <p>No data</p>
      )}
    </div>
  )
}

export default Dashboard;
