import React from 'react'
import { ISpec } from '../../../../types'
import Button from '../../../controls/Button/Button'
import TbodyProps from './TbodyProps';
import { MdCompareArrows, MdDeleteForever } from 'react-icons/md';

export default function Tbody({ tableState, specs, ...rest}: TbodyProps) {
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
                    <Button type="button" color={spec.printMode === 'development' ? 'warn' : 'success'} text={spec.printMode === 'production' ? 'Switch to Development' : 'Switch to Production'}>
                      <MdCompareArrows />
                    </Button>
                  </div>
                </td>
                <td>
                  <div className="cell">
                    <Button type="button" color="error" text="Delete">
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
