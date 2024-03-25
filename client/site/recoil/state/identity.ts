import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist();

export type AuthInfo =
  | {
      id: number;
      avatar?: string;
      nickname?: string;
      accessToken: string;
    }
  | undefined;

export const identity = atom<AuthInfo>({
  key: "identity",
  default: undefined,
  effects: [persistAtom],
});
