import { atom } from "recoil";

import { Repo } from "type";

export const reposState = atom<Repo[]>({
  key: "repos",
  default: [],
});
