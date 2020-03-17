import React from 'react';
import { Route, Redirect, useLocation } from 'react-router-dom';

type Props = {
    auth: boolean,
    exact?: boolean,
    path: string,
};

const Component: React.FC<Props> = props => {
    const location = useLocation();
    if (props.auth) {
        return <Redirect from={location.pathname} to="/" />
    } else {
        return <Route exact={props.exact} path={props.path}>{props.children}</Route>
    }
}

export default Component;