import React from "react";
import styled from "styled-components";
import { useRouteMatch, useHistory } from "react-router";

// Type層
type ContainerProps = {};
type Props = {
  link: (pathname: string) => void;
} & ContainerProps;

// DOM層
const Component: React.FC<Props> = props => {
  return (
    <div>
      <h2>ドキュメント一覧</h2>
      <div>
        <button onClick={() => props.link("/new")}>新規作成</button>
      </div>
      <header>３件</header>
      <ul>
        <li>
          <input type="checkbox" name="checkbox" id="checkbox" />
          title
          <button onClick={() => props.link("/edit/1")}>編集</button>
        </li>
      </ul>
    </div>
  );
};

//Style層
const StyledComponent = styled(Component)``;

//Container層
const Container: React.FC<ContainerProps> = props => {
  const history = useHistory();
  const match = useRouteMatch();
  const useLink = (pathname: string) => {
    history.push(`${match.url}${pathname}`);
  };

  return <StyledComponent {...props} link={useLink} />;
};

export default Container;
