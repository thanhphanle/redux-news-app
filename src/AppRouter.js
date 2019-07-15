import React from 'react';

import {
    BrowserRouter as Router,
    Route,
} from 'react-router-dom';

import Home from './home/Home';
import NewsList from './news/NewsList';

// Class extends React
const AppRouter = () => (
    <Router>
        <div>
            <Route exact path="/" component={Home} />
            <Route path="/news" component={NewsList} />
        </div>
    </Router>
)

export default AppRouter;