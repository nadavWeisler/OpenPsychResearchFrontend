import React from "react";
import Option from "./Option";

const OptionsList = ({ list_data }) => {
    console.log(list_data);
    return (
        <div >
            {
                list_data?.map((item) => (
                    <Option {...item} />
                ))
            }
        </div>
    );
};
export default OptionsList;