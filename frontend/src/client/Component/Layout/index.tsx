import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Document from 'client/Container/Document';

const Setting = lazy(() => import('client/Container/Setting'));

// Types層
type Props = {
    type: String
}

// DOM層
const Component: React.FC = props => {
    return <div>
        <Router>
            <ul>
                <li><Link to="/">Documents</Link></li>
                <li><Link to="/setting">Settings</Link></li>
            </ul>
            <div>
                <Suspense fallback={<>Loading...</>}>
                    <Route exact path="/" component={Document}></Route>
                    <Route exact path="/document" component={Document}></Route>
                    <Route exact path="/Setting" component={Setting}></Route>
                </Suspense>
            </div>
        </Router>
    </div>
}

const Top: React.FC = props => {
    return <>
        top
    </>
}

// Style層
// const StyledComponent=styled(Layout)``;

export default Component;