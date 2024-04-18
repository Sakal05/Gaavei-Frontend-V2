import { IOwnCollection } from "./IOwnCollection";

export interface IProfileCover {
  address: string;
  role: string;
}
export interface IProfile {
  address: string;
  role: string;
  tokens: string;
  balance: string;
  collections: IOwnCollection[] | null;
}
