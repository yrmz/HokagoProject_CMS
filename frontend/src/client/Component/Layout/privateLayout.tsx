import React from "react";
import { Link, useHistory } from "react-router-dom";
import styled from "styled-components";

// Type層
type ContainerProps = {};
type Props = {
  handleLogout: () => void;
} & ContainerProps;

const Component: React.FC<Props> = props => {
  return (
    <div>
      <h1>After School CMS</h1>
      <ul>
        <li>
          <Link to="/document">Documents</Link>
        </li>
        <li>
          <Link to="/setting">Settings</Link>
        </li>
        <li>
          <button onClick={props.handleLogout}>ログアウト</button>
        </li>
      </ul>
      <div>{props.children}</div>
    </div>
  );
};

//Style層
const StyledComponent = styled(Component)``;

//Container層
const Container: React.FC<ContainerProps> = props => {
  const history = useHistory();

  const handleLogout = () => {
    localStorage.removeItem("authtoken");
    history.push("/login");
  };

  return <StyledComponent {...props} handleLogout={handleLogout} />;
};

export default Container;
