import React, { useState, useEffect } from 'react';
import SurveysList from './SurveysList';
import { DesignedBigHeader } from "./../DesignedComponents/Headers";
import { SearchBox } from "./../DesignedComponents/SearchBox";

const MySurveys = () => {

    const [originalSurveysList, setOriginalSurveysList] = useState([]);
    const [surveysList, setSurveysList] = useState([]);

    useEffect(() => {
        async function getData() {
            try {
                const data_url = "https://api.npoint.io/d75f4e68bd8f297e222c"
                const data = await (await fetch(data_url)).json();
                setOriginalSurveysList([...data]);
            } catch (error) {
                console.error(`fetch operation failed: ${error.message}`);
            }
        }
        getData();
    }, []);

    const onFilter = (textInput) => {
        setSurveysList(originalSurveysList.filter(item => item.name.includes(textInput)));
    }

    return (
        <>
            <DesignedBigHeader component="h1" variant="h4" align="center">
                My Running Surveys
            </DesignedBigHeader>
            <SearchBox onInputChange={onFilter} />
            <SurveysList list_data={surveysList} />
        </>
    );
}


export default MySurveys;