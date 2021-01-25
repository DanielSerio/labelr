import React from 'react'
import Button from '../../controls/Button/Button'
import Control from '../../controls/Control/Control'
import AddSpecFormProps from './AddSpecFormProps'
import { GoDiffAdded } from 'react-icons/go';

export default function AddSpecForm({className }: AddSpecFormProps) {
  return (
    <form className={`form spec-form ${className || ''}`.trim()}>
      <Control labelText="Name" htmlFor="name">
        <input style={{textTransform: 'uppercase'}} type="text" name="name" id="name" className="input" placeholder="XX-LS-XXXXXX" />
      </Control>
      <Button text="Add"><GoDiffAdded /></Button>
    </form>
  )
}
