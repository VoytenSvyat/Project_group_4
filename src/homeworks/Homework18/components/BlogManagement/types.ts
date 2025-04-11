import { Dispatch, SetStateAction } from "react";

export interface BlogContextInterface {
  postedMessage: string,
  setPostedMessage: (() => void) | Dispatch<SetStateAction<string>>
}