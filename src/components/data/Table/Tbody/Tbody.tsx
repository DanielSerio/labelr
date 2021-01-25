import React from 'react'
import { ISpec, PrintMode } from '../../../../types'
import Button from '../../../controls/Button/Button'
import TbodyProps from './TbodyProps';
import { MdCompareArrows, MdDeleteForever } from 'react-icons/md';
import { ChangeSpec, DeleteSpec } from '../../../../firebase';

export default function Tbody({ tableState, specs, ...rest}: TbodyProps) {
  const handleDelete = (specName: string) => {
    DeleteSpec(specName);
  };

  const handleToggle = (specName: string, mode: PrintMode) => {
    ChangeSpec(specName, mode);
  };

  return (
    <tbody {...rest}>
      {specs.map((spec: ISpec) => {
        return (
          <tr className={spec.printMode === 'development' ? spec.printMode : undefined} key={spec.name}>
            <td>
              <div className="cell">{spec.name.toLocaleUpperCase()}</div>
            </td>
            <td>
              <div className="cell">{spec.printMode.toLocaleUpperCase()}</div>
            </td>
            {tableState.editingEnabled &&
              <>
                <td>
                  <div className="cell">
                    <Button 
                      type="button" 
                      color={spec.printMode === 'development' ? 'warn' : 'success'} 
                      text={spec.printMode === 'production' ? 'Switch to Development' : 'Switch to Production'}
                      onClick={() => handleToggle(spec.name, spec.printMode === 'development' ? 'production' : 'development')}>
                      <MdCompareArrows />
                    </Button>
                  </div>
                </td>
                <td>
                  <div className="cell">
                    <Button type="button" color="error" text="Delete" onClick={() => handleDelete(spec.name)}>
                      <MdDeleteForever />
                    </Button>
                  </div>
                </td>
              </>
            }
          </tr>
        );
      })}
    </tbody>
  )
}
