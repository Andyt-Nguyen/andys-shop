import React from 'react';
import { Switch, Route } from 'react-router-dom';
import LandingPage from './Landing/LandingPage';
import MacPage from './Mac/MacPage';

const Main = () => (
		<Switch>
			<Route exact path="/" component={LandingPage} />
			<Route exact path="/mac" component={MacPage} />
		</Switch>
);

export default Main;
