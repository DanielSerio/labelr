export type PrintMode = 'production'|'development';

export interface ISpec {
  name: string;
  printMode: PrintMode;
}