import React, { lazy, Suspense, useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import styled from 'styled-components';
import PrivateRoute from 'client/Container/Router/privateRoute';
import PublicRoute from 'client/Container/Router/publicRoute';
import Authentication from 'client/Container/Router/authentication';
import Login from 'client/Container/Login';
import Document from 'client/Container/Document';

const Setting = lazy(() => import('client/Container/Setting'));

// Types層
type ContainerProps = {}

type Props = {
    auth: boolean,
    setAuth: React.Dispatch<React.SetStateAction<boolean>>
} & ContainerProps;

// DOM層
const Component: React.FC<Props> = props => {
    return <div>
        <Router>
            <Suspense fallback={<>Loading...</>}>
                <Authentication auth={props.auth} setAuth={props.setAuth}>
                    <PublicRoute auth={props.auth} path="/login" component={Login} />
                    <PrivateRoute auth={props.auth} path="/" component={Document} />
                    <PrivateRoute auth={props.auth} path="/document" component={Document} />
                    <PrivateRoute auth={props.auth} path="/Setting" component={Setting} />
                </Authentication>
            </Suspense>
        </Router>
    </div>
}

// Style層
const StyledComponent = styled(Component)``;

//Container層
const Container: React.FC<ContainerProps> = props => {
    const [auth, setAuth] = useState(false);
    return <StyledComponent {...props} auth={auth} setAuth={setAuth} />
}

export default Container;