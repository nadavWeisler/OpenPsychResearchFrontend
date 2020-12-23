import React from 'react'
import Analytics from './Analytics'
import { withRouter } from 'react-router-dom'
import { DesignedBigHeader } from "./../DesignedComponents/Headers";
import { QuestionDropdown } from "./../DesignedComponents/Dropdown";
import {demo_data} from './DemoData'
const SurveyAnalytics = (surveyId) => {

    return (
        <>
            <QuestionDropdown questions={demo_data} />
            <QuestionDropdown questions={demo_data} />
            <DesignedBigHeader component="h1" variant="h4" align="center">
                Survey Analytics
            </DesignedBigHeader>
            <Analytics key={surveyId} prompt="Survey Name" answers={demo_data} />
        </>
    )
}

export default withRouter(SurveyAnalytics);