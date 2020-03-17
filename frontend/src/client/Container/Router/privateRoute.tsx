import React from 'react';
import { Route, Redirect, useLocation } from 'react-router-dom';

type Props = {
    auth: boolean,
    exact?: boolean,
    path: string,
};

const Component: React.FC<Props> = props => {

    if (props.auth) {
        return <Route exact={props.exact} path={props.path}>{props.children}</Route>
    } else {
        return <Redirect to="/login" />
    }
}

export default Component;