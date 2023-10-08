import style from './Contact.module.css';
function Contact() {
	return (
		<div className={style.bg}>
			<div className="container">
				<div className="col-sm-12">
					<div className={style.single}>
						<h2>Subscribe to our Newsletter</h2>
						<div className="input-group">
							<input
								type="email"
								className={style.formControl}
								placeholder="your E-mail adress here"
							/>
							<span className="input-group-btn">
								<button className={style.btn} type="submit">
									Subscribe
								</button>
							</span>
						</div>
						<h3 className={style.h3}>Get Update</h3>

						<i
							className="fa fa-facebook m-3"
							style={{
								color: '#f7ea66',
								cursor: 'pointer',
								scale: '1.5',
							}}></i>

						<i
							className="fa fa-twitter m-3"
							style={{
								color: '#f7ea66',
								cursor: 'pointer',
								scale: '1.5',
							}}></i>
						<i
							className="fa fa-dribbble m-3"
							style={{
								color: '#f7ea66',
								cursor: 'pointer',
								scale: '1.5',
							}}></i>
						<i
							className="fa fa-behance m-3"
							style={{
								color: '#f7ea66',
								cursor: 'pointer',
								scale: '1.5',
							}}></i>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Contact;
