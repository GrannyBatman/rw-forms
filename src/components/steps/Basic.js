import React, { Fragment } from 'react'
import Field from '../form/Field'

const Basic = props => {
	return (
		<Fragment>
			<Field
				id="firstname"
				labelText="Firstname"
				type="text"
				placeholder="Enter firstname"
				name="firstname"
				value={props.firstname}
				onChange={props.onChange}
				error={props.errors.firstname}
			/>
			<Field
				id="lastname"
				labelText="Lastname"
				type="text"
				placeholder="Enter lastname"
				name="lastname"
				value={props.lastname}
				onChange={props.onChange}
				error={props.errors.lastname}
			/>
			<Field
				id="password"
				labelText="Password"
				type="password"
				placeholder="Enter password"
				name="password"
				value={props.password}
				onChange={props.onChange}
				error={props.errors.password}
			/>
			<Field
				id="repeatPassword"
				labelText="Repeat password"
				type="password"
				placeholder="Enter repeat password"
				name="repeatPassword"
				value={props.repeatPassword}
				onChange={props.onChange}
				error={props.errors.repeatPassword}
			/>
			<fieldset className="form-group">
				<div>Gender</div>
				<div className="form-check">
					<input
						className="form-check-input"
						type="radio"
						id="male"
						name="gender"
						value="male"
						checked={props.gender === 'male'}
						onChange={props.onChange}
					/>
					<label className="form-check-label" htmlFor="male">
						Male
					</label>
				</div>
				<div className="form-check">
					<input
						className="form-check-input"
						type="radio"
						id="female"
						name="gender"
						value="female"
						checked={props.gender === 'female'}
						onChange={props.onChange}
					/>
					<label className="form-check-label" htmlFor="female">
						Female
					</label>
				</div>
			</fieldset>
		</Fragment>
	)
}

export default Basic
