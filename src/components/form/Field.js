import React from 'react'

const Field = ({ id, labelText, type, placeholder, value, name, onChange, error }) => {
	let cls = ['form-control']
	if (error) {
		cls.push('invalid')
	}

	return (
		<div className="form-group">
			<label htmlFor={id}>{labelText}</label>
			<input
				id={id}
				type={type}
				className={cls.join(' ')}
				placeholder={placeholder}
				value={value}
				name={name}
				onChange={onChange}
			/>
			{error ? <div className="invalid-feedback">{error}</div> : null}
		</div>
	)
}

export default Field
