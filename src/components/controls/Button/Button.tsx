import { spawn } from 'child_process'
import React from 'react'
import ButtonProps from './ButtonProps'
import './Button.scss';

export default function Button({ children, type, className, text, color, ...rest}: ButtonProps) {
  return (
    <button type={type || 'submit'} className={`btn btn-${color || 'primary'} ${className || ''}`.trim()} {...rest}>
      {text && <span className="text">{text}</span>}
      {children}
    </button>
  )
}
