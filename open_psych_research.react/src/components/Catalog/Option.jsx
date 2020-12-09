import React from 'react'
import { Card, CardHeader, CardContent } from '@material-ui/core';


const Option = (props) => {
    console.log(props);
    return (
        <Card>
            <CardHeader>
                {props.name}
            </CardHeader>
            <CardContent>
                {props.content}
            </CardContent>
        </Card>
    );
}

export default Option;