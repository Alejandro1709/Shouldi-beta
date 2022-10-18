import React from 'react'
import PropTypes from 'prop-types'

function Input({ id, type = 'text', name, placeholder, value, onChange }) {
  return (
    <input className='p-2 rounded-md' id={id || name} type={type} name={name} placeholder={placeholder} value={value} onChange={onChange}/>
  )
}

Input.propTypes = {
  id: PropTypes.string,
  type: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func
}

Input.defaultProps = {
  type: 'text',
  placeholder: 'Placeholder...'
}

export default Input