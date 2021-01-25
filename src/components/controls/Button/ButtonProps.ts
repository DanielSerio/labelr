import { ComponentPropsWithoutRef } from "react";

export default interface ButtonProps extends ComponentPropsWithoutRef<'button'> {
  color?: 'primary'|'secondary'|'success'|'warn'|'error';
  text?: string;
}