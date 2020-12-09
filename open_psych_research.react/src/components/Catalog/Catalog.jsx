/* eslint-disable import/no-anonymous-default-export */
import React from 'react';
import OptionsList from './OptionsList';

export default async () => {
    const dummy_url = "https://api.npoint.io/2b3e23541894b6300656"
    const result = await fetch(dummy_url);
    const json = await result.json();
    console.log(json);
    return <OptionsList list_data={json}/>;
}