import { atom, useRecoilState } from "recoil";

import { ServerToClientSocketEventPayload } from "../../../game/websocket/socket";

export const useCurrentScoreboardAtom = atom<
  ServerToClientSocketEventPayload[]
>({
  key: "currentScoreboard",
  default: [],
});

export function useSetCurrentScoreboardState() {
  return useRecoilState(useCurrentScoreboardAtom);
}
