import React from 'react';
import { Switch, Route } from 'react-router-dom';
import LandingPage from './Landing/LandingPage';

const Main = () => (
	<div>
		<Switch>
			<Route to="/" component={LandingPage} />
		</Switch>
	</div>
);

export default LandingPage;
