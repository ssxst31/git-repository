import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

import { Repo } from "type";

const { persistAtom } = recoilPersist();

export const reposSubscribeState = atom<Repo[]>({
  key: "reposSubscribe",
  default: [],
  effects_UNSTABLE: [persistAtom],
});
