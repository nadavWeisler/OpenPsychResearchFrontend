/* eslint-disable import/no-anonymous-default-export */
import React from 'react';
import OptionsList from './OptionsList';
import dummy_url from '../../Utils'

export default async () => {
    const result = await fetch(dummy_url);
    const json = await result.json();
    return <OptionsList {...json}/>;
}