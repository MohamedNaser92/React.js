import 'font-awesome/css/font-awesome.min.css';
import im from '../../Images/WhatsApp Image 2023-10-08 at 3.03.28 PM.jpeg';

function About() {
	return (
		<div style={{ height: '700px' }}>
			<div
				className="container"
				style={{
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
					minHeight: '100vh',
				}}>
				<div className="col-md-12" style={{ textAlign: 'center' }}>
					<h1 className="m-3" style={{ color: '#f7ea66' }}>
						About The Party
					</h1>
					<p style={{ color: 'white' }}>
						Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
						eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
						ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
						aliquip ex ea commodo consequat. Duis aute irure dolor in
						reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
						pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
						culpa qui officia deserunt.
					</p>
					<p style={{ color: 'white' }}>
						Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
						eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
						ad minim veniam, quis nostrud exercitation ullamco laboris.
					</p>
					<button
						className="m-5"
						style={{
							backgroundColor: '#f7ea66',
							border: 'none',
							borderRadius: '50px',
							height: '50px',
							color: '#7f479a',
							width: '160px',
						}}>
						Explore more
					</button>
				</div>
			</div>
		</div>
	);
}

export default About;
