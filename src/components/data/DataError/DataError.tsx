import React from 'react'
import DataErrorProps from './DataErrorProps';
import './DataError.scss';

export default function DataError({ text }: DataErrorProps) {
  return (
    <div className="data-error">{ text }</div>
  )
}
