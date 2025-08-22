import React from 'react'

function Select({options, error,onChange,name,value}) {
  return (
  <div className="input-container">
     <label htmlFor="select">Select Category</label>
    <select id="select" value={value} name={name} onChange={onChange}>
      <option value="" hidden >Select Category</option>
      {options.map((option, index) => (
        <option key={index} value={option.value} >
          {option}
        </option>
      ))}

    </select>
    {error && <p className="error">{error}</p>}

  </div>
  )
}

export default Select