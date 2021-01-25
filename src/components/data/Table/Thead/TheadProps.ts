import { ComponentPropsWithoutRef } from 'react';
import { ISpec } from '../../../../types';
import TableState from '../TableState';

export default interface TheadProps extends ComponentPropsWithoutRef<'thead'> {
  specs: ISpec[];
  tableState: TableState;
}