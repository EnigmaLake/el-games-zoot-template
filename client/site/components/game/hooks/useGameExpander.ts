import { useGameExpendedState } from "../../../recoil/state/gameExpended";

export const useGameExpander = () => {
  const [isGameExpanded, setIsGameExpanded] = useGameExpendedState();

  return {
    isGameExpanded,
    setIsGameExpanded,
  };
};
