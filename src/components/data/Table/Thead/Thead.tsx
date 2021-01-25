import React from 'react'
import { ISpec } from '../../../../types'
import TheadProps from './TheadProps'
import { BiSortAZ, BiSortZA } from 'react-icons/bi'
import Button from '../../../controls/Button/Button'

export default function Thead({ tableState, specs, ...rest }: TheadProps) {
  return (
    <thead {...rest}>
      <tr>
        <>
          {Object.keys(specs[0]).map((key: string) => {
            return (
              <td key={key}>
                <div className="cell">
                  <span>{key === 'printMode' ? 'Print Status' : 'Name'}</span>
                  {(tableState.filterKey && tableState.filterKey === key) &&
                    <>
                      {tableState.filterDir === 'asc' &&
                        <Button color="secondary">
                          <BiSortAZ />
                        </Button>
                      }
                      {tableState.filterDir === 'dsc' &&
                        <Button color="secondary">
                          <BiSortZA />
                        </Button>
                      }
                    </>
                  }
                </div>
              </td>
            );
          })}
          {tableState.editingEnabled &&
            <>
              <td>
                <div className="cell">
                  Change Status
                </div>
              </td>
              <td>
                <div className="cell">
                  Delete
                </div>
              </td>
            </>
          }
        </>
      </tr>
    </thead>
  )
}
