import React from 'react'

export default ({ input, label, meta: { error, touched } }) => {
  return (
    <div>
      <label>{label}</label>
      <input {...input} />
      <div style={{ color: 'red' }}>{touched && error ? error : null}</div>
    </div>
  )
}
