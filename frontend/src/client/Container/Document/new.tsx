import React from "react";
import styled from "styled-components";

// Type層
type ContainerProps = {};
type Props = {} & ContainerProps;

// DOM層
const Component: React.FC<Props> = props => {
  return (
    <div>
      <h2>新規作成</h2>
      <div>新規作成フォーム</div>
      <button>保存</button>
    </div>
  );
};

//Style層
const StyledComponent = styled(Component)``;

//Container層
const Container: React.FC<ContainerProps> = props => {
  return <StyledComponent {...props} />;
};

export default Container;
