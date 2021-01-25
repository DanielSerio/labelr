import React from 'react';
import ControlError from '../ControlError/ControlError';
import ControlProps from './ControlProps';
import './Control.scss';

export default function Control({ children, className, labelText, error, ...rest }: ControlProps) {
  return (
    <div className={`control ${className || ''}`.trim()}>
      {error && <ControlError error={error}/>}
      { children }
      <label className="label" {...rest}>{labelText}</label>
    </div>
  )
}
