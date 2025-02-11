import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";

export const Home = () => (
	<div className="text-center mt-5">
		<div className="row row-cols-1 row-cols-md-3 g-4">
			<div className="col">
				<div className="card h-100">
					<img src={rigoImage} style={{width: '400px', height: '200px', objectFit: 'cover'}}/>
					<div className="card-body">
						<h5 className="card-title">Card title</h5>
						<p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
					</div>
					<div className="card-footer d-flex justify-content-between">
						<a href="#" class="btn btn-outline-primary">Learn more!</a>
						<a href="#" class="btn btn-outline-warning">♡</a>
					</div>
				</div>
			</div>
			<div className="col">
				<div className="card h-100">
					<img src={rigoImage} style={{width: '400px', height: '200px', objectFit: 'cover'}}/>
					<div className="card-body">
						<h5 className="card-title">Card title</h5>
						<p className="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
					</div>
					<div className="card-footer d-flex justify-content-between">
						<a href="#" class="btn btn-outline-primary">Learn more!</a>
						<a href="#" class="btn btn-outline-warning">♡</a>
					</div>
				</div>
			</div>
			<div className="col">
				<div className="card h-100">
					<img src={rigoImage} style={{width: '400px', height: '200px', objectFit: 'cover'}}/>
					<div className="card-body">
						<h5 className="card-title">Card title</h5>
						<p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
					</div>
					<div className="card-footer d-flex justify-content-between">
						<a href="#" class="btn btn-outline-primary">Learn more!</a>
						<a href="#" class="btn btn-outline-warning">♡</a>
					</div>
				</div>
			</div>
		</div>
	</div>
);
