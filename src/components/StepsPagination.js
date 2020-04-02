import React from 'react'
import cx from 'classnames'
const stepNames = ['Basic', 'Contacts', 'Avatar', 'Finish']

const StepsPagination = ({ currentStep }) => (
	<div className="steps mb-4">
		{stepNames.map((name, index) => (
			<div
				key={index}
				className={cx('step', {
					'is-active': currentStep === index,
					'is-completed': currentStep > index
				})}
			>
				<div className="step__marker">{index + 1}</div>
				<div className="step__title mt-1">{name}</div>
			</div>
		))}
	</div>
)

export default StepsPagination
