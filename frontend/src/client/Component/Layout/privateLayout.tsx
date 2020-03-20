import React from 'react';
import { Link, useHistory } from "react-router-dom";
import styled from 'styled-components';

// Type層
type ContainerProps = {}
type Props = {
    handleLogout: () => void
} & ContainerProps

const Component: React.FC<Props> = props => {
    return <div>
        <button onClick={props.handleLogout}>ログアウト</button>
        <ul>
            <li><Link to="/">Documents</Link></li>
            <li><Link to="/setting">Settings</Link></li>
        </ul>
        <div>
            {props.children}
        </div>
    </div>
}

//Style層
const StyledComponent = styled(Component)``;

//Container層
const Container: React.FC<ContainerProps> = props => {
    const history = useHistory();

    const handleLogout = () => {
        localStorage.removeItem('authtoken');
        history.push("/login");
    }

    return <StyledComponent {...props} handleLogout={handleLogout} />
}

export default Container;