import React from 'react';
import Option from "./Option";

const Catalog = async () => {
    const dummy_url = "https://api.npoint.io/2b3e23541894b6300656"
    const res = await fetch(dummy_url);
    const json = await res.json();
    const options = json.map((item, i) => <Option key={i} name={item.name} content={item.content}/>);
    console.log(options);
    return (
        <>
            {options}
        </>
    );
}

export default Catalog;


