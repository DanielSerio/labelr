import React, { MouseEvent, useState } from 'react'
import Button from '../../controls/Button/Button';
import { AiFillLock, AiFillSetting } from 'react-icons/ai';
import TableProps from './TableProps';
import TableState from './TableState';
import Tbody from './Tbody/Tbody';
import Thead from './Thead/Thead';
import './Table.scss';

export default function Table({ className, specs, ...rest }: TableProps) {
  const [state, setState] = useState<TableState>({
    filterKey: null,
    filterDir: 'asc',
    editingEnabled: false
  });

  const handleEnableEditing = (e: MouseEvent<HTMLButtonElement>): void => setState({...state, editingEnabled: !state.editingEnabled});

  return (
    <section className={`table-container ${className || ''}`.trim()}>
      {specs &&
        <>
          <header className="table-header">
            <Button type="button" text={state.editingEnabled ? 'Disable Editing' : 'Enable Editing' } onClick={handleEnableEditing}>
              { !state.editingEnabled && <AiFillSetting /> }
              { state.editingEnabled && <AiFillLock /> }
            </Button>
          </header>
          <table {...rest}>
            <Thead tableState={state} specs={specs} />
            <Tbody tableState={state} specs={specs} />
          </table>
        </>
      }
    </section>
  )
}
