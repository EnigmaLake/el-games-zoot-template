import { useCallback } from "react";
import { SetterOrUpdater, atom, useRecoilState } from "recoil";

const modalOptionsState = atom<object | null>({
  key: "modalOptions",
  default: null,
});

export function useGlobalDisclosure(
  recoilState: [boolean, SetterOrUpdater<boolean>]
) {
  const [isOpen, setIsOpen] = recoilState;
  const [modalOptions, setModalOptions] = useRecoilState(modalOptionsState);

  const onOpen = (options?: object) => {
    setModalOptions(options ?? null);
    setIsOpen(true);
  };

  const onClose = useCallback(() => {
    setIsOpen(false);

    // Clear out modal options when closing the modal.
    // It should be up to the modal consumer to supply options as necessary.
    setModalOptions(null);
  }, [setIsOpen, setModalOptions]);

  const onToggle = useCallback(() => {
    setIsOpen((prevIsOpen) => !prevIsOpen);
  }, [setIsOpen]);

  return { isOpen, onOpen, onClose, onToggle, modalOptions };
}
