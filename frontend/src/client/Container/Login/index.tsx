import React, { useState } from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { useInput, UseInputType } from "client/Hooks/FormHooks";

// Type層
type ContainerProps = {};
type Props = {
  emailInput: UseInputType;
  passwordInput: UseInputType;
  errorMsg: string;
  handleLogin: (e: React.FormEvent<HTMLFormElement>) => void;
} & ContainerProps;

// DOM層
const Component: React.FC<Props> = props => {
  return (
    <form onSubmit={props.handleLogin}>
      <h1>ログイン</h1>
      <p>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          placeholder="Email"
          {...props.emailInput}
        ></input>
      </p>
      <p>
        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          placeholder="Password"
          {...props.passwordInput}
        ></input>
      </p>
      <div>{props.errorMsg}</div>
      <div>
        <input type="submit" name="login" value="ログイン" />
      </div>
    </form>
  );
};

//Style層
const StyledComponent = styled(Component)``;

//Container層
const Container: React.FC<ContainerProps> = props => {
  const emailInput = useInput("");
  const passwordInput = useInput("");
  const [errorMsg, setErrorMsg] = useState("");

  let history = useHistory();
  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    //axiosで認証API実行

    if (true) {
      localStorage.setItem("authtoken", "hogehoge");
      history.push("/");
    } else {
      //エラーを表示
      setErrorMsg("エラー");
    }
  };

  return (
    <StyledComponent
      {...props}
      handleLogin={handleLogin}
      emailInput={emailInput}
      passwordInput={passwordInput}
      errorMsg={errorMsg}
    />
  );
};

export default Container;
