import { atom, useRecoilState } from "recoil";

import { SERVER_TO_CLIENT_EVENTS } from "../../components/game/websocket/socket";

export const useGameRoundInfoAtom = atom<{
  gameRoundUuid: string;
  gameRoundStatus?: SERVER_TO_CLIENT_EVENTS;
  gameRoundTimestamp: number;
}>({
  key: "gameRoundInfo",
  default: {
    gameRoundUuid: "",
    gameRoundStatus: undefined,
    gameRoundTimestamp: 0,
  },
});

export function useSetGameRoundInfoState() {
  return useRecoilState(useGameRoundInfoAtom);
}
