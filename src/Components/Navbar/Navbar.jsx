import { Link } from 'react-router-dom';
import style from './Navbar.module.css';

function Navbar() {
	return (
		<div>
			<nav
				className="navbar navbar-expand-lg navbar-dark p-3 "
				style={{ backgroundColor: '#2c0047', borderTop: ' 1px ' }}
				id="headerNav">
				<div className="container-fluid">
					<li className={'nav-item ps-5'}>
						<Link to={''}>
							<img
								src="http://ingenioushubs.com/Allhallows/images/header-logo.png"
								alt=""
								height={50}
							/>
						</Link>
					</li>
					<div className=" collapse navbar-collapse" id="navbarNavDropdown">
						<ul className="navbar-nav mx-auto ">
							<li className="nav-item ">
								<Link className="nav-link mx-2" to={''}>
									Home
								</Link>
							</li>
							<li className="nav-item">
								<Link className="nav-link mx-2" to={'about'}>
									About Party
								</Link>
							</li>
							<li className="nav-item">
								<Link className="nav-link mx-2" to={'artist'}>
									Artist
								</Link>
							</li>
							<li className="nav-item">
								<Link className="nav-link mx-2" to={''}>
									Gallery
								</Link>
							</li>
							<li className="nav-item">
								<Link className="nav-link mx-2" to={''}>
									Testimonial
								</Link>
							</li>
							<li className="nav-item">
								<Link className="nav-link mx-2" to={'contact'}>
									Contact
								</Link>
							</li>
						</ul>
					</div>
					<button className={`me-5 ${style.btn}`}>Get a Ticket</button>
				</div>
			</nav>
		</div>
	);
}

export default Navbar;
