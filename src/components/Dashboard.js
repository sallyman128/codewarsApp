import { setNestedObjectValues } from "formik";
import React, { useEffect } from "react";

const Dashboard = ({data}) => {
  return (
    <div>
      {data === null ? (
        <p>Show data</p>
      ) : (
        <p>No data</p>
      )}
    </div>
  )
}

export default Dashboard;
