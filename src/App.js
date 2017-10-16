import React from 'react';
import Main from './Components/Main';
import NavBar from './Components/NavBar';
import Footer from './Components/Footer';
import './index.css';

const App = () => (
	<div>
	  <NavBar />
		<div>
			<Main />
			<Footer />
		</div>
	</div>
);

export default App;
