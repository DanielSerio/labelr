import React from 'react'
import Button from '../../controls/Button/Button'
import Control from '../../controls/Control/Control'
import AddSpecFormProps from './AddSpecFormProps'
import { GoDiffAdded } from 'react-icons/go';
import { useForm } from 'react-hook-form';
import { AddSpec } from '../../../firebase';
import { SPECNAME_RE } from '../../../utils';

export default function AddSpecForm({className }: AddSpecFormProps) {
  const { errors, register, handleSubmit, reset } = useForm<{name: string}>({mode: 'onChange'});
  const onSubmit = async (formData: {name: string}) => {
    await AddSpec(formData.name);
    reset();
  }; 

  return (
    <form className={`form spec-form ${className || ''}`.trim()} onSubmit={handleSubmit(onSubmit)}>
      <Control labelText="Name" htmlFor="name" error={((errors && errors.name) && errors.name.message)}>
        <input style={{textTransform: 'uppercase'}} type="text" ref={register({
          required: 'Name is required',
          pattern: {
            value: SPECNAME_RE,
            message: `Incorrect Format (${String(SPECNAME_RE)})`
          }
        })} name="name" id="name" className="input" placeholder="XX-LS-XXXXXX" />
      </Control>
      <Button text="Add" disabled={!!(errors && errors.name)}><GoDiffAdded /></Button>
    </form>
  )
}
