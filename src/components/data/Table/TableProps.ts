import { ComponentPropsWithoutRef } from 'react';
import { ISpec } from '../../../types';

export default interface TableProps extends ComponentPropsWithoutRef<'table'> {
  specs?: ISpec[];
}