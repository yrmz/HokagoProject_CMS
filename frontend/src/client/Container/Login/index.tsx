import React, { useState } from 'react';
import styled from 'styled-components'
import { useHistory } from 'react-router-dom';
import { useInput, UseInputType } from "client/Hooks/FormHooks";

// Type層
type ContainerProps = {}
type Props = {
    emailInput: UseInputType,
    passwordInput: UseInputType,
    handleLogin: () => void
} & ContainerProps

// DOM層
const Component: React.FC<Props> = props => {

    return <>
        <div>
            Email： <input type="email" name="email" {...props.emailInput}></input>
        </div>
        <div>
            Password：<input type="password" name="password" {...props.passwordInput}></input>
        </div>
        <button onClick={props.handleLogin}>ログイン</button>
    </>
}

//Style層
const StyledComponent = styled(Component)``;

//Container層
const Container: React.FC<ContainerProps> = props => {


    let emailInput = useInput('');
    let passwordInput = useInput('');

    let history = useHistory();
    const handleLogin = () => {
        //axiosで認証API実行

        if (true) {
            localStorage.setItem('authtoken', 'hogehoge');
            history.push('/');
        }
        else {
            //エラーを表示
        }
    }

    return <StyledComponent {...props} handleLogin={handleLogin} emailInput={emailInput} passwordInput={passwordInput} />
}

export default Container;