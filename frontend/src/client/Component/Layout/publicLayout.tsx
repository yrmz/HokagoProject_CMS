import React from 'react';
import styled from 'styled-components';

// Type層
type ContainerProps = {}
type Props = {
} & ContainerProps

const Component: React.FC = props => {
    return <div >
        {props.children}
    </div>
}

//Style層
const StyledComponent = styled(Component)`

`;

//Container層
const Container: React.FC<ContainerProps> = props => {
    return <StyledComponent />
}

export default Container;