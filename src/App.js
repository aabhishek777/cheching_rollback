import React from 'react'
import ChartNew from './components/ChartNew'
import TwoLineContainer from './components/TwoLineContainer'

import MultiSelect from './components/MultiSelect'

const App = () => {
  return (
    <div className='container '>
      <div className="row mb-5">
        <a href="/" className='link'>back</a>
      </div>

      <div className="row ">
        <select class="form-select w" style={{width: '120px'}} aria-label="Default select example">
          <option selected>Open this select menu</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </select>
      </div>

      <div className="row mt-5 box p-2">
        <div className="col-2  " style={{}}>

          <MultiSelect/>
{/* 
          <select class="form-select "style={{border:'2px solid red',height:'100vh' }} size="3" aria-label="Size 3 select example">
            <option selected>Open this select menu</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select> */}

        </div>
        <div className="col-10"><TwoLineContainer /></div>
      </div>



    </div>
  )
}

export default App







