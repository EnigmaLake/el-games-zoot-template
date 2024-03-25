import { useRecoilState } from "recoil";
import { identity } from "../recoil/state/identity";

export function useIdentityState() {
  const [loginInfo] = useRecoilState(identity);

  return {
    loginInfo,
  };
}

export default useIdentityState;
