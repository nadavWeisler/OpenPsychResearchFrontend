import React from "react";
import Option from "./Option";

const OptionsList = ({ list_data }) => {
    console.log(list_data);
    return (
        <>
            {
                list_data?.map((item) => (
                    <Option {...item} />
                ))
            }
        </>
    );
};
export default OptionsList;