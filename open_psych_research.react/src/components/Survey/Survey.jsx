import React, { useEffect, useState } from 'react';
import Question from './Question';
import { Button, FormGroup } from '@material-ui/core';
import { DesignedPaper } from './../DesignedComponents/Paper';
import { DesignedBigHeader } from "./../DesignedComponents/Headers";


const Survey = ({ surveyId }) => {
    const [questionsList, setQuestionsList] = useState([]);

    useEffect(() => {
        async function getData() {
            try {
                const data_url = "https://api.npoint.io/0cb21ad6a5443d6f2ed3";
                const data = await (await fetch(data_url)).json();
                console.log(data);
                setQuestionsList([...data]);
            } catch (error) {
                console.error(`fetch operation failed: ${error.message}`);
            }
        }
        getData();
    }, []);

    const listItem = questionsList.map((question) => (
        <Question
            key
            prompt={question.prompt}
            options={question.options}
            required={question.required}
        />
    ))
    return (
        <DesignedPaper style={{ padding: 16 }}>
            <DesignedBigHeader component="h1" variant="h4" align="center">
                Survey
            </DesignedBigHeader>
            <FormGroup>
                {listItem}
                <Button>Submit</Button>
            </FormGroup>
        </DesignedPaper>
    );
}

export default Survey;