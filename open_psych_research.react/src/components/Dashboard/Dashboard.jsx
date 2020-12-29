import React, { useState, useEffect } from 'react';
import OptionsList from "./OptionsList";
import { DesignedBigHeader } from "./../DesignedComponents/Headers";
import { SearchBox } from "./../DesignedComponents/SearchBox";

const Dashboard = () => {
    const [optionsList, setOptionsList] = useState([]);
    const [originalOptionsList, setOriginalOptionsList] = useState([]);
    const [filterString, setfilterString] = useState("");

    useEffect(() => {
        async function getData() {
            try {
                const data_url = "https://api.npoint.io/d95adbe8638edc32d901"
                const data = await (await fetch(data_url)).json();
                setOriginalOptionsList([...data]); 
                
            } catch (error) {
                console.error(`fetch operation failed: ${error.message}`);
            }
        }
        getData();
        setOptionsList(originalOptionsList.filter(filterStr => filterStr.name.includes(filterString)));
    }, [filterString, originalOptionsList]);

    const onFilter = (textInput) => {
        setfilterString(textInput);
    }
    

    return (
        <>
            <DesignedBigHeader component="h1" variant="h4" align="center">
                Surveys Dashboard
            </DesignedBigHeader>
            <SearchBox onInputChange={onFilter} />
            <OptionsList list_data={optionsList} />
        </>
    );

}

export default Dashboard;