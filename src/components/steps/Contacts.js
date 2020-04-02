import React, { Fragment } from 'react'
import Field from '../form/Field'

const Contacts = props => {
	const getOptionsItems = items =>
		items.map(item => (
			<option value={item.id} key={item.id}>
				{item.name}
			</option>
		))

	const filterItems = (id, arr) => getOptionsItems(arr.filter(item => item.countryId === +id))

	return (
		<Fragment>
			<Field
				id="email"
				labelText="Email"
				type="text"
				placeholder="Enter email"
				name="email"
				value={props.email}
				onChange={props.onChange}
				error={props.errors.email}
			/>
			<Field
				id="mobile"
				labelText="Mobile"
				type="text"
				placeholder="Enter mobile"
				name="mobile"
				value={props.mobile}
				onChange={props.onChange}
				error={props.errors.mobile}
			/>
			<div className="form-group">
				<label htmlFor="country">Country</label>
				<select
					className="form-control"
					id="country"
					name="country"
					value={props.country}
					onChange={props.onChange}
				>
					{getOptionsItems(props.data.countries)}
				</select>
			</div>
			<div className="form-group">
				<label htmlFor="country">City</label>
				<select
					className={`form-control ${props.errors.city ? 'invalid' : ''}`}
					id="city"
					name="city"
					value={props.city}
					onChange={props.onChange}
				>
					<option value="0" key="0">
						Select city
					</option>
					{filterItems(props.country, props.data.cities)}
				</select>
				{props.errors.city ? (
					<div className="invalid-feedback">{props.errors.city}</div>
				) : null}
			</div>
		</Fragment>
	)
}

export default Contacts
