import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

type ContainerProps = {
    auth: boolean,
    setAuth: React.Dispatch<React.SetStateAction<boolean>>
}

const Container: React.FC<ContainerProps> = props => {
    let location = useLocation();
    useEffect(() => {
        const authtoken = localStorage.getItem('authtoken');
        if (authtoken) {
            //axiosで認証監視API叩く(有効期限もチエック)
            const result = true;
            
            if (result) {
                props.setAuth(true);
            }
            else {
                localStorage.removeItem('authtoken');
                props.setAuth(false);
            }
        }
        else if (props.auth) {
            props.setAuth(false);
        }
    }, [location]);

    return <>{props.children}</>
}

export default Container;