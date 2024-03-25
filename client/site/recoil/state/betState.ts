import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist();

interface BetStateAmount
  extends Record<
    string,
    {
      isBetEnabled: boolean;
      isBetPlaced: boolean;
    }
  > {}

export const useBetStateAtom = atom<BetStateAmount>({
  key: "betState",
  default: {
    "0": {
      isBetEnabled: false,
      isBetPlaced: false,
    },
  },
  effects: [persistAtom],
});
