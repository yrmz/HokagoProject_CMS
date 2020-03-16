import React from 'react';
import { Link } from "react-router-dom";

const Component: React.FC = props => {
    return <div>
        <ul>
            <li><Link to="/">Documents</Link></li>
            <li><Link to="/setting">Settings</Link></li>
        </ul>
        <div>
            {props.children}
        </div>
    </div>
}

export default Component;