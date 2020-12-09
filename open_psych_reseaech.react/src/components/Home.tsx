import { Button } from '@material-ui/core';
import React from 'react';
import { GoogleLogin } from 'react-google-login';


const responseGoogle = (response: any) => {
    console.log(response);
}

export default function Home() {
    return (
        <Button>
            <GoogleLogin
                clientId="658977310896-knrl3gka66fldh83dao2rhgbblmd4un9.apps.googleusercontent.com"
                buttonText="Login"
                onSuccess={responseGoogle}
                onFailure={responseGoogle}
                cookiePolicy={'single_host_origin'}
            />
        </Button> 
    );    
}