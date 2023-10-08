import { Link, NavLink } from 'react-router-dom';
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
								<NavLink
									className="nav-link mx-2"
									to="/"
									exact // Use 'exact' to match the root path exactly
									activeClassName={style.active} // Apply the CSS class when active
								>
									Home
								</NavLink>
							</li>
							<li className="nav-item">
								<NavLink
									className="nav-link mx-2"
									to={'about'}
									activeClassName={style.active}>
									About Party
								</NavLink>
							</li>
							<li className="nav-item">
								<NavLink
									className="nav-link mx-2"
									to={'artist'}
									activeClassName={style.active}>
									Artist
								</NavLink>
							</li>
							<li className="nav-item">
								<NavLink
									className="nav-link mx-2"
									to={''}
									activeClassName={style.active}>
									Gallery
								</NavLink>
							</li>
							<li className="nav-item">
								<NavLink
									className="nav-link mx-2"
									to={''}
									activeClassName={style.active}>
									Testimonial
								</NavLink>
							</li>
							<li className="nav-item">
								<NavLink
									className="nav-link mx-2"
									to={'contact'}
									activeClassName={style.active}>
									Contact
								</NavLink>
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
