import React, { Fragment } from 'react'

const Navigation = ({ currentStep, stepBackward, stepForward, resetForm }) => {
	return (
		<div className="d-flex justify-content-center">
			{currentStep < 3 ? (
				<Fragment>
					<button
						type="button"
						className="btn btn-light mr-4"
						disabled={currentStep < 1}
						onClick={stepBackward}
					>
						Previous
					</button>
					<button type="submit" className="btn btn-secondary" onClick={stepForward}>
						Next
					</button>
				</Fragment>
			) : (
				<button type="button" className="btn btn-primary" onClick={resetForm}>
					Reset
				</button>
			)}
		</div>
	)
}

export default Navigation
