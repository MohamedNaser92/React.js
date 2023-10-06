import React, { Component } from 'react';
import Products from './components/Products';
import Navbar from './components/Navbar';

class App extends Component {
	render() {
		return (
			<>
				<Navbar />
				<div className="p-4">
					<Products />
				</div>
			</>
		);
	}
}

export default App;
