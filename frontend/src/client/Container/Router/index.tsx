import React, { lazy, Suspense, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import styled from "styled-components";
import PrivateRoute from "client/Container/Router/privateRoute";
import PublicRoute from "client/Container/Router/publicRoute";
import Authentication from "client/Container/Router/authentication";
import Login from "client/Container/Login";
import Document from "client/Container/Document";

const DocumentNew = lazy(() => import("client/Container/Document/new"));
const DocumentEdit = lazy(() => import("client/Container/Document/edit"));
const Setting = lazy(() => import("client/Container/Setting"));

// Types層
type ContainerProps = {};

type Props = {
  auth: boolean;
  setAuth: React.Dispatch<React.SetStateAction<boolean>>;
} & ContainerProps;

// DOM層
const Component: React.FC<Props> = props => {
  return (
    <div>
      <Suspense fallback={<>Loading...</>}>
        <Router>
          <Authentication auth={props.auth} setAuth={props.setAuth}>
            <Switch>
              <PublicRoute auth={props.auth} path="/login">
                <Login />
              </PublicRoute>
              <PrivateRoute auth={props.auth}>
                <Route exact path="/"></Route>
                <Route exact path="/document">
                  <Document />
                </Route>
                <Route path="/document/new">
                  <DocumentNew />
                </Route>
                <Route path="/document/edit/:id">
                  <DocumentEdit />
                </Route>
              </PrivateRoute>
            </Switch>
          </Authentication>
        </Router>
      </Suspense>
    </div>
  );
};

// Style層
const StyledComponent = styled(Component)``;

//Container層
const Container: React.FC<ContainerProps> = props => {
  const [auth, setAuth] = useState(false);
  return <StyledComponent {...props} auth={auth} setAuth={setAuth} />;
};

export default Container;
