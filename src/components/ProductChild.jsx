import React, { Component } from 'react';
import './productCild.css';

class ProductChild extends Component {
	say() {
		console.log(this.props);
	}

	render() {
		let { title, price, image, category } = this.props.productDetails;
		return (
			<div className="col-md-12 col-lg-3 mb-4 mb-lg-0">
				<div
					className="card-wrapper p-2"
					style={{ backgroundColor: '#eee', height: '100%' }}>
					<div className="py-1 d-flex flex-column justify-content-between">
						<div
							className="card position-relative "
							style={{ height: '580px', backgroundColor: 'rgb(89, 146, 182)' }}>
							<img
								src={image}
								className="card-img-top  card-image p-3"
								alt={title}
							/>
							<div className="card-body">
								<div className="d-flex justify-content-between">
									<p className="small">
										<a href="#!" className="text-muted">
											{category}
										</a>
									</p>
								</div>
								<div className="justify-content-between mb-3">
									<h5 className="mb-0">{title}</h5>

									<h5 className="text-danger pt-3 pb-3">
										{' '}
										<span className="text-secondary">Price: </span>${price}
									</h5>
								</div>
								<div className="text-center  m-2 position-absolute bottom-0">
									<button
										className="btn btn-primary m-1 w-75 jsutify-content  "
										onClick={() => this.props.updatePrice(this.props.index)}>
										Update Price
									</button>

									<button
										className="btn btn-danger m-1 w-75  "
										onClick={() => this.props.deleteProduct(this.props.index)}>
										Delete Product
									</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default ProductChild;
