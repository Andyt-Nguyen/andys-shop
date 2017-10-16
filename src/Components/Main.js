import React from 'react';
import { Switch, Route } from 'react-router-dom';
import LandingPage from './Landing/LandingPage';
import MacPage from './Mac/MacPage';
import MacBuy from './Mac/MacBuy';
import CartPage from './Cart/CartPage';

const Main = () => (
		<Switch>
			<Route exact path="/" component={LandingPage} />
			<Route exact path="/mac" component={MacPage} />
			<Route exact path="/mac/buy" component={MacBuy} />
			<Route exact path="/cart" component={CartPage} />
		</Switch>
);

export default Main;
