import { ComponentPropsWithoutRef, ComponentPropsWithRef } from "react";

export default interface ControlProps extends ComponentPropsWithoutRef<'label'> {
  error?: string|false|null;
  labelText: string;
}