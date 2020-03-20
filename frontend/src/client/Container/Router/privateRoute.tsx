import React from 'react';
import { Route, Redirect, useLocation } from 'react-router-dom';
import Layout from 'client/Component/Layout/privateLayout';

type Props = {
    auth: boolean,
    exact?: boolean,
    path: string,
};

const Component: React.FC<Props> = props => {
    const location = useLocation();

    if (props.auth) {
        return <Layout>
            <Route exact={props.exact} path={props.path}>
                {props.children}
            </Route>
        </Layout>
    } else {
        return <Redirect from={location.pathname} to="/login" />
    }
}

export default Component;