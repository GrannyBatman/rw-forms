import React, { Fragment } from 'react'
import DefaultAvatar from './../../img/default-avatar.png'

const Avatar = props => {
	const onChangeAvatar = ({
		target: {
			name: key,
			files: [file]
		}
	}) => {
		const reader = new FileReader()

		reader.onload = event => {
			props.onChange({
				target: {
					name: key,
					value: event.target.result
				}
			})
		}

		reader.readAsDataURL(file)
	}

	return (
		<Fragment>
			<img className="mb-4" width="100%" src={props.avatar || DefaultAvatar} alt="" />
			<div className="mb-4">
				<div className="custom-file">
					<input
						type="file"
						className="custom-file-input"
						id="customFile"
						name="avatar"
						onChange={onChangeAvatar}
					/>
					<label
						className={`custom-file-label ${props.errors.avatar ? 'invalid' : ''}`}
						htmlFor="customFile"
					>
						Choose avatar
					</label>
				</div>
				{props.errors.avatar ? (
					<div className="invalid-feedback">{props.errors.avatar}</div>
				) : null}
			</div>
		</Fragment>
	)
}

export default Avatar
