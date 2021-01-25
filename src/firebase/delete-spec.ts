import DB from "./db";

export const DeleteSpec = async (specName: string): Promise<void> => {
  try {
    return await DB.doc(`specs/${specName}`).delete();
  } catch (e) { return await e; }
};