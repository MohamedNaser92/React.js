import Footer from '../Footer/Footer';
import { Outlet } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';

function Layout() {
	return (
		<div style={{ backgroundColor: '#2c0047' }}>
			<Navbar />
			<Outlet />
			<Footer />
		</div>
	);
}

export default Layout;
