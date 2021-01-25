import { ComponentPropsWithoutRef } from 'react';
import { ISpec } from '../../../../types';
import TableState from '../TableState';

export default interface TbodyProps extends ComponentPropsWithoutRef<'tbody'> {
  specs: ISpec[];
  tableState: TableState;
}