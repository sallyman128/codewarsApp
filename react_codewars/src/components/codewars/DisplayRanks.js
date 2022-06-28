import React, { useEffect, useState } from "react";
import {PieChart} from 'react-minimal-pie-chart';

const LanguagePieChart = ({skills}) => {

    const [languages, setLanguages] = useState(skills.languages)
    console.log(languages)

    const pieColors = {
        ruby: "red",
        python: "blue",
        javascript: "yellow",
        java: "brown",
        groovy: "green"
    }

    const defaultLabelStyle = {
        fontSize: '10%',
        fontFamily: 'sans-serif',
    };

    const renderPieChart = () => {
        let data = Object.entries(languages)
        data = data.map( ([language, details]) => {
            return {
                title: language,
                value: details.score,
                color: pieColors[language],
            }
        })
        return <PieChart data={data} radius={20} label={({ dataEntry }) => dataEntry.title} labelStyle={{...defaultLabelStyle}} />
    }

    return (
        <div>
            {renderPieChart()}
        </div>
    )
}

export default LanguagePieChart;