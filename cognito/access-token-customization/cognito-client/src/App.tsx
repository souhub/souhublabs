import React, {useState} from 'react';
import './App.css';
import {Amplify} from 'aws-amplify';
import config from './amplifyconfiguration.json';
import {withAuthenticator, WithAuthenticatorProps} from "@aws-amplify/ui-react";
import '@aws-amplify/ui-react/styles.css';
import {fetchAuthSession} from 'aws-amplify/auth';

Amplify.configure(config);

export function App({signOut, user}: WithAuthenticatorProps) {
    const [accessToken, setAccessToken] = useState('')
    const [idToken, setIdToken] = useState('')

    return (
        <>
            <h1>Hello, {user?.signInDetails?.loginId}</h1>
            <h1>IdToken:</h1>
            <p>{idToken}</p>
            <h1>AccessToken</h1>
            <p>{accessToken}</p>
            <button onClick={currentSession}>Fetch Tokens</button>
            <button onClick={signOut}>Sign out</button>
        </>
    );

    async function currentSession() {
        try {
            const {accessToken, idToken} = (await fetchAuthSession()).tokens ?? {};
            setAccessToken(accessToken?.toString || '')
            setIdToken(idToken?.toString() || '')
        } catch (err) {
            console.log(err);
        }
    }
}


export default withAuthenticator(App);
