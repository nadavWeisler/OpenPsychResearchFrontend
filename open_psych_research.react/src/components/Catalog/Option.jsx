import React from 'react'
import { Card, CardHeader, CardContent } from '@material-ui/core';


const Option = ({ name, content }) => {
    return (
        <Card>
            <CardHeader>
                {name}
            </CardHeader>
            <CardContent>
                {content}
            </CardContent>
        </Card>
    );
}

export default Option;