import React from 'react'
import StepsPagination from './StepsPagination'
import Basic from './steps/Basic'
import Contacts from './steps/Contacts'
import Avatar from './steps/Avatar'
import Finish from './steps/Finish'
import Navigation from './Navigation'
import { countries, cities } from './../data/countries'

const REGEXP_EMAIL = /\S+@\S+\.\S+/,
	REGEXP_MOBILE = /^[0-9]{10}$/

export default class App extends React.Component {
	constructor() {
		super()

		this.state = {
			values: {
				firstname: '',
				lastname: '',
				password: '',
				repeatPassword: '',
				gender: 'male',
				email: '',
				mobile: '',
				country: countries[0].id,
				city: '',
				avatar: ''
			},
			currentStep: 0,
			errors: {}
		}
	}

	getErrors = () => {
		let errors = {}

		switch (this.state.currentStep) {
			case 0:
				if (this.state.values.firstname.length < 5) {
					errors.firstname = 'Must be 5 characters or more'
				}
				if (this.state.values.lastname.length < 5) {
					errors.lastname = 'Must be 5 characters or more'
				}
				if (this.state.values.password.length < 6) {
					errors.password = 'Must be 6 characters or more'
				}
				if (this.state.values.repeatPassword !== this.state.values.password) {
					errors.repeatPassword = 'Must be equal password'
				}
				if (!this.state.values.gender) {
					errors.gender = 'Required'
				}
				break
			case 1:
				if (!REGEXP_EMAIL.test(this.state.values.email)) {
					errors.email = 'Invalid email address'
				}
				if (!REGEXP_MOBILE.test(this.state.values.mobile)) {
					errors.mobile = 'Invalid mobile number'
				}
				if (+this.state.values.country === 0) {
					errors.country = 'Required'
				}
				if (+this.state.values.city === 0) {
					errors.city = 'Required'
				}
				break
			case 2:
				if (this.state.values.avatar === '') {
					errors.avatar = 'Required'
				}
				break
			default:
				break
		}

		return errors
	}

	stepForward = e => {
		e.preventDefault()
		const errors = this.getErrors()

		if (Object.keys(errors).length > 0) {
			this.setState({
				errors
			})
		} else {
			this.setState(state => ({
				currentStep: ++state.currentStep,
				errors: {}
			}))
		}
	}

	stepBackward = () => {
		this.setState(state => ({
			currentStep: --state.currentStep
		}))
	}

	resetForm = () => {
		this.setState({
			values: {
				firstname: '',
				lastname: '',
				password: '',
				repeatPassword: '',
				gender: 'male',
				email: '',
				mobile: '',
				country: countries[0].id,
				city: '',
				avatar: ''
			},
			currentStep: 0,
			errors: {}
		})
	}

	onChangeInput = ({ target: { name: key, value } }) => {
		this.setState(state => {
			let values = { ...state.values }
			values[key] = value

			if (key === 'country') {
				values.city = 0
			}

			return {
				values,
				errors: {
					...state.errors,
					[key]: null
				}
			}
		})
	}

	render() {
		const { currentStep } = this.state
		return (
			<div className="form-container card">
				<form className="form card-body">
					<StepsPagination currentStep={this.state.currentStep} />

					{currentStep === 0 && (
						<Basic
							// TODO: изменить на this.values все пропсы
							firstname={this.state.values.firstname}
							lastname={this.state.values.lastname}
							password={this.state.values.password}
							repeatPassword={this.state.values.repeatPassword}
							gender={this.state.values.gender}
							onChange={this.onChangeInput}
							errors={this.state.errors}
						/>
					)}

					{currentStep === 1 && (
						<Contacts
							email={this.state.values.email}
							mobile={this.state.values.mobile}
							country={this.state.values.country}
							city={this.state.values.city}
							onChange={this.onChangeInput}
							data={{
								countries,
								cities
							}}
							errors={this.state.errors}
						/>
					)}

					{currentStep === 2 && (
						<Avatar
							avatar={this.state.values.avatar}
							onChange={this.onChangeInput}
							errors={this.state.errors}
						/>
					)}

					{currentStep === 3 && (
						<Finish
							{...this.state.values}
							data={{
								countries,
								cities
							}}
						/>
					)}

					<Navigation
						currentStep={currentStep}
						stepBackward={this.stepBackward}
						stepForward={this.stepForward}
						resetForm={this.resetForm}
					/>
				</form>
			</div>
		)
	}
}
