import React, { Component } from 'react';
import QuestionProps from "./Question"
import Question from './Question';
import { Container } from '@material-ui/core';

interface SurveyProps {
    name: string;
    questions: Array<QuestionProps>
}

export default class Survey extends Component<SurveyProps, any> {
    listItem = this.props.questions.map((question) => (
            <Question prompt={question.props.prompt} options={question.props.options} required={question.props.required}/>
        )
    );

    render() {
        return (
            <Container>
                {
                    this.listItem
                }
            </Container>
            
        );
    }
}