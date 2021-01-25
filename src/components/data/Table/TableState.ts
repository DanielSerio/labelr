import { SortDirection } from "../../../types";

export default interface TableState {
  filterKey: string|null;
  filterDir: SortDirection;
  editingEnabled: boolean;
}