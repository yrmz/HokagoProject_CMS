import React from 'react';
import styled from 'styled-components'
import { useHistory } from 'react-router-dom';

// Type層
type ContainerProps = {}
type Props = {
    handleLogin: () => void
} & ContainerProps

// DOM層
const Component: React.FC<Props> = props => {
    return <><button onClick={props.handleLogin}>ログイン</button></>
}

//Style層
const StyledComponent = styled(Component)``;

//Container層
const Container: React.FC<ContainerProps> = props => {
    let history = useHistory();
    const handleLogin = () => {
        localStorage.setItem('authtoken', 'hogehoge');
        history.push('/');
    }

    return <StyledComponent {...props} handleLogin={handleLogin} />
}

export default Container;