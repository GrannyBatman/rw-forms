import React, { Fragment } from 'react'

const Finish = ({
	firstname,
	lastname,
	email,
	mobile,
	country,
	city,
	avatar,
	data: { countries, cities }
}) => {
	const findItem = (items, id) => {
		const arr = items === 'country' ? countries : cities

		let { name } = arr.find(item => item.id === +id) || {}
		return name
	}

	return (
		<Fragment>
			<div className="container-fluid">
				<div className="row mb-4">
					<div className="col-4">
						<img width="100%" src={avatar} alt="" />
					</div>
					<div className="col-8 d-flex align-items-center">
						<h4>
							{firstname} {lastname}
						</h4>
					</div>
				</div>
				<div className="row mb-4">
					<div className="col-12">
						<p>
							<strong>Email:</strong> {email}
						</p>
						<p>
							<strong>Mobile:</strong> {mobile}
						</p>
						<p>
							<strong>Location:</strong> {findItem('country', country)},{' '}
							{findItem('city', city)}
						</p>
					</div>
				</div>
			</div>
		</Fragment>
	)
}

export default Finish
