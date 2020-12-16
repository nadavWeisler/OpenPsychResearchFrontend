import React, { useState, useEffect } from 'react';
import SurveysList from './SurveysList';
import { DesignedBigHeader } from "./../DesignedComponents/Headers";

const MySurveys = () => {

    const [surveysList, setSurveysList] = useState([]);

    useEffect(() => {
        async function getData() {
            try {
                const data_url = "https://api.npoint.io/d75f4e68bd8f297e222c"
                const data = await (await fetch(data_url)).json();
                setSurveysList([...data]);
            } catch (error) {
                console.error(`fetch operation failed: ${error.message}`);
            }
        }
        getData();
    }, []);

    return (
        <>
            <DesignedBigHeader component="h1" variant="h4" align="center">
                My Running Surveys
            </DesignedBigHeader>    
            <SurveysList list_data={surveysList} />
        </>
    );
}
    

export default MySurveys;