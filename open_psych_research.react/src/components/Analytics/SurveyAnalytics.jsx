import React from 'react'
import Analytics from './Analytics'
import { withRouter } from 'react-router-dom'
import { DesignedBigHeader } from "./../DesignedComponents/Headers";

const SurveyAnalytics = (surveyId) => {
    const items = [
        surveyId, surveyId, surveyId
    ]

    const demo_data = [
        { year: '1950', population: 2.525 },
        { year: '1960', population: 3.018 },
        { year: '1970', population: 3.682 },
        { year: '1980', population: 4.440 },
        { year: '1990', population: 5.310 },
        { year: '2000', population: 6.127 },
        { year: '2010', population: 6.930 },
    ];

    return (
        <>
            <DesignedBigHeader component="h1" variant="h4" align="center">
                Survey Analytics
            </DesignedBigHeader>
            <Analytics key={surveyId} prompt="Survey Name" answers={demo_data} />
        </>
    )
}

export default withRouter(SurveyAnalytics);