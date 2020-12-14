import React, { useState, useEffect } from 'react';
import OptionsList from "./OptionsList";

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

    return <OptionsList list_data={optionsList} />
}

export default Dashboard;