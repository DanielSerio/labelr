import React from 'react'
import ControlErrorProps from './ControlErrorProps'

export default function ControlError({ error, className, ...rest}: ControlErrorProps) {
  return (
    <div className={`control-error ${className || ''}`.trim()}>{error}</div>
  )
}
