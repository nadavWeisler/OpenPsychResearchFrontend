import React, { useState, useEffect } from 'react';
import OptionsList from "./OptionsList";
import { DesignedBigHeader } from "./../DesignedComponents/Headers";

const Dashboard = () => {
    const [optionsList, setOptionsList] = useState([]);

    useEffect(() => {
        async function getData() {
            try {
                const data_url = "https://api.npoint.io/d95adbe8638edc32d901"
                const data = await (await fetch(data_url)).json();
                setOptionsList([...data]);
            } catch (error) {
                console.error(`fetch operation failed: ${error.message}`);
            }
        }
        getData();
    }, []);

    return (
        <>
            <DesignedBigHeader component="h1" variant="h4" align="center">
                Surveys Dashboard
            </DesignedBigHeader>
            <OptionsList list_data={optionsList} />
        </>
    );

}

export default Dashboard;