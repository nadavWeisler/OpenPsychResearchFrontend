import React from 'react';
import Question from './Question';
import { Container } from '@material-ui/core';


const Survey = ({ questions }) => {
    const listItem = questions.map((question) => (
        <Question
            key
            prompt={question.prompt}
            options={question.options}
            required={question.required}
        />
    ))

    return (
        <Container>
            {listItem}
        </Container>
    );
}

export default Survey;