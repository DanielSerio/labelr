import React, { useState } from 'react';
import { ISpec } from '../../../types';
import Button from '../../controls/Button/Button';
import Table from '../../data/Table/Table';
import AddSpecForm from '../../forms/AddSpecForm/AddSpecForm';
import { AiOutlineArrowDown, AiOutlineArrowUp } from 'react-icons/ai'
import './Dashboard.scss';
import Loading from '../../data/Loading/Loading';

export default function Dashboard() {
  const [formOpen, setFormOpen] = useState<boolean>(false);
  const toggleForm = () => setFormOpen(!formOpen);
  const testSpecs: ISpec[] = [
    {
      name: 'BS-LS-0002',
      printMode: 'development'
    },
    {
      name: 'BS-LS-0020',
      printMode: 'production'
    },
    {
      name: 'BS-LS-0021',
      printMode: 'production'
    },
    {
      name: 'BS-LS-0022',
      printMode: 'development'
    },
    {
      name: 'BS-LS-0157',
      printMode: 'production'
    },
  ];
  return (
    <main className="dashboard">
      <section className="dashboard-container">
        <h1>Specifications</h1>
        <Table specs={testSpecs}/>
        {formOpen && <AddSpecForm />}
        <Button type="button" color={formOpen ? 'secondary' : 'primary'} text={formOpen ? 'Close Form' : 'Add a New Spec'} onClick={toggleForm}>
          {!formOpen ? <AiOutlineArrowDown /> : <AiOutlineArrowUp />}
        </Button>
      </section>
    </main>
  )
}
