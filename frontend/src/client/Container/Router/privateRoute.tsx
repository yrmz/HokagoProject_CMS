import React from 'react';
import { Route, Redirect } from 'react-router-dom';

type Props = {
    auth: boolean,
    path: string,
    component: React.FC
};

const Component: React.FC<Props> = props => {
    return props.auth ? <Route exact path={props.path} component={props.component} /> : <Redirect to="/login" />
}

export default Component;