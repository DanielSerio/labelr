import { ISpec, SortDirection } from "../types";

export function sortSpecs(key: string, specs: ISpec[], sortDirection: SortDirection = 'asc'): ISpec[] {
  const sortAsc = (): ISpec[] => {
    return specs.sort((a: ISpec, b: ISpec) => {
      return +((a as any)[key] > (b as any)[key]);
    });
  };
  const sortDsc = (): ISpec[] => {
    return specs.sort((a: ISpec, b: ISpec) => {
      return +((a as any)[key] < (b as any)[key]);
    });
  };
  if (sortDirection === 'asc')  return sortAsc();
  return sortDsc();
}