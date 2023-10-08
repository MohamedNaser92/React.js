import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import Layout from './Components/Layout/Layout';
import About from './Components/About/About';
import Artist from './Components/Artist/Artist';
import Contact from './Components/Contact/Contact';
import Home from './Components/Home/Home';
import NotFound from './Components/NotFound/NotFound';

const routes = createBrowserRouter([
	{
		path: '',
		element: <Layout />,
		children: [
			{ index: true, element: <Home /> },
			{ path: 'about', element: <About /> },
			{ path: 'artist', element: <Artist /> },
			{ path: 'contact', element: <Contact /> },
			{ path: '*', element: <NotFound /> },
		],
	},
]);

function App() {
	return (
		<>
			<RouterProvider router={routes}></RouterProvider>
		</>
	);
}

export default App;
