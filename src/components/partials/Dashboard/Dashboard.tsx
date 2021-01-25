import React, { useEffect, useState } from 'react';
import { ISpec } from '../../../types';
import Button from '../../controls/Button/Button';
import Table from '../../data/Table/Table';
import AddSpecForm from '../../forms/AddSpecForm/AddSpecForm';
import { AiOutlineArrowDown, AiOutlineArrowUp } from 'react-icons/ai';
import { useCollection } from 'react-firebase-hooks/firestore';
import './Dashboard.scss';
import Loading from '../../data/Loading/Loading';
import { setTimeout } from 'timers';
import DB from '../../../firebase/db';

export default function Dashboard() {
  const [formOpen, setFormOpen] = useState<boolean>(false);
  const toggleForm = () => setFormOpen(!formOpen);
  const [value, loading, error] = useCollection(DB.collection(`specs`),{ snapshotListenOptions: { includeMetadataChanges: true }});

  return (
    <main className="dashboard">
      <section className="dashboard-container">
        <h1>Specifications</h1>
        {error && }
        {value &&  <Table specs={value}/> }
        {(formOpen && value) && <AddSpecForm />}
        {loading && <Loading />}
        <Button type="button" color={formOpen ? 'secondary' : 'primary'} text={formOpen ? 'Close Form' : 'Add a New Spec'} onClick={toggleForm}>
          {!formOpen ? <AiOutlineArrowDown /> : <AiOutlineArrowUp />}
        </Button>
      </section>
    </main>
  )
}
