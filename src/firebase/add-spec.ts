import { ISpec } from "../types";
import DB from "./db";

export const AddSpec = async (specName: string): Promise<void> => {
  specName = specName.toLocaleUpperCase();
  try {
    return await DB.doc(`specs/${specName}`).set({
      name: specName,
      printMode: 'development'
    });
  } catch (e) { return await e; }
};