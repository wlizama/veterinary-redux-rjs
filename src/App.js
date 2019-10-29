import React, { Component } from 'react';
import store from './store'
import { Provider } from "react-redux";

import AgregarCita from './components/AgregarCita'
import ListadoCitas from './components/ListadoCitas'

class App extends Component {
	render() {
		return (
			<Provider store={store}>
				<div className="container">
					<header>
						<h1 className="text-center">Veterinary administrator</h1>
					</header>
					<div className="row mt-3">
						<div className="col-md-6">
							<AgregarCita />
						</div>
						<div className="col-md-6">
							<ListadoCitas />
						</div>
					</div>
				</div>
			</Provider>
		);
	}
}

export default App;
