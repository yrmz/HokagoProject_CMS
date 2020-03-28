import React from "react";
import { Redirect, useLocation } from "react-router-dom";
import Layout from "client/Component/Layout/privateLayout";

type Props = {
  auth: boolean;
};

const Component: React.FC<Props> = props => {
  const location = useLocation();

  if (props.auth) {
    return <Layout>{props.children}</Layout>;
  } else {
    return <Redirect from={location.pathname} to="/login" />;
  }
};

export default Component;
