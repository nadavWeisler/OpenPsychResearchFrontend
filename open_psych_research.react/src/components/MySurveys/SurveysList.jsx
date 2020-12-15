import React from "react";
import OneMySurvey from "./OneMySurvey";

const SurveysList = ({ list_data }) => {
    return (
        <>
            {
                list_data?.map((item) => (
                    <OneMySurvey key={item.id} {...item} />
                ))
            }
        </>
    );
};

export default SurveysList;