import { ComponentPropsWithoutRef } from "react";

export default interface ControlErrorProps extends ComponentPropsWithoutRef<'div'> {
  error: string;
}