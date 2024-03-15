import React from 'react'
import ChartNew from './ChartNew'

const TwoLineContainer = () => {
	return (
		<div className=''>
			<div className="d-flex justify-content-between ">
				<div className=" " style={{width: '120px'}}><select class="form-select" aria-label="Default select example">
					<option selected>Open this select menu</option>
					<option value="1">One</option>
					<option value="2">Two</option>
					<option value="3">Three</option>
				</select></div>
				<div className="" >
					<h4>Mathematics</h4>
				</div>
				<div className="">
					Lable
				</div>
			</div>

			<ChartNew/>
		</div>
	)
}

export default TwoLineContainer