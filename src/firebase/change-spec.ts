import { PrintMode } from "../types";
import DB from "./db";

export const ChangeSpec = async (specName: string, printMode: PrintMode): Promise<void> => {
  try {
    return await DB.doc(`specs/${specName}`).set({
      name: specName,
      printMode
    });
  } catch (e) { return await e; }
};