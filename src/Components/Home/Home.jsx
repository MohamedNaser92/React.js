import style from './home.module.css';
function Home() {
	return (
		<div className="m-5">
			<div className="container m-5">
				<div className="row">
					<div className="col-md-6">
						<img
							src="http://ingenioushubs.com/Allhallows/images/Banner.png"
							alt="home"
						/>
					</div>
					<div className={`col-md-6 my-5 ${style.rd}`}>
						<div className={style.verticalCenter}>
							<p style={{ color: 'white' }}>31th octobar 2018</p>
							<h3 style={{ color: '#f7ea66' }}>Halloween Party</h3>
							<p style={{ color: 'white' }}>
								Halloween or Hallowe'en (a contraction of All Hallows' Evening)
								also known as Allhalloween, All Hallows' Eve or All Saints' Eve
								is a celebration observed in a number of countries on 31
								October.
							</p>
							<button className={style.btn}>Explore more</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Home;
