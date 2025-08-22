import React from 'react'

function Input({ label, type, value, onChange,error }) {
  return (
    <div className="input-container">
      <label htmlFor={label}>{label}</label>
      <input id={label} name={label.toLowerCase()} type={type} value={value} onChange={onChange} />
      {error && <p className="error">{error}</p>}

    </div>
  )
}

export default Input 