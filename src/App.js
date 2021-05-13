import {Route, BrowserRouter as Router, Switch,} from 'react-router-dom';

import home from './pages/home';
import cadastro from './pages/cadastro';
import inicio from './pages/inicio';




function App() {

	return (
				<Router>
					<Switch>
					<Route path="/">
						<home.js/>
					</Route>
					<Route path="/cadastro">
						<cadastro.js/>
					</Route>
					<Route path="/inicio">
						<inicio.js/>
					</Route>
					</Switch>
				</Router>
	);
}

export default App;
