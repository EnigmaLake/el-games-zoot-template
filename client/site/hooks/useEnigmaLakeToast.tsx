import { ToastPosition, useToast } from "@chakra-ui/react";
import { FC, ReactNode, useCallback } from "react";
import {
  EnigmaLakeToastPresetProps,
  EnigmaLakeToastSuccess,
  EnigmaLakeToastError,
  EnigmaLakeToastInfo,
  EnigmaLakeToast,
} from "../components/base/EnigmaLakeToast/EnigmaLakeToast";

export type ToastType = "success" | "error" | "info" | "custom";
type EnigmaLakeToastFunction = (
  text: string | null,
  icon?: ReactNode,
  visibilityDuration?: number
) => void;
export type EnigmaLakeToastPresetFunction = (
  text: string | ReactNode | null,
  toastType?: ToastType,
  position?: ToastPosition
) => void;

const TOAST_VISIBILITY_DURATION = 3000;

export const toastTypeToPresetComponent: Record<
  ToastType,
  FC<EnigmaLakeToastPresetProps>
> = {
  success: EnigmaLakeToastSuccess,
  error: EnigmaLakeToastError,
  info: EnigmaLakeToastInfo,
  custom: EnigmaLakeToast,
};

/**
 * A hook that displays a customizable toast message.
 *
 * Usage:
 *   const toast = useEnigmaLakeToast();
 *   // show the toast message
 *   toast("I am a message", <ExampleIcon />, 5000);
 *
 * @param text The string to display
 * @param icon The icon to display, preceding the toast message
 * @param visibilityDuration The amount of time the toast will show before auto-closing, in ms.
 */
export const useEnigmaLakeToast = (): EnigmaLakeToastFunction => {
  const toast = useToast();

  return (
    text: string | ReactNode | null,
    icon?: ReactNode,
    visibilityDuration: number = TOAST_VISIBILITY_DURATION
  ) =>
    toast({
      containerStyle: {
        minWidth: "initial",
      },
      description: text ?? "",
      duration: visibilityDuration,
      render: () => <EnigmaLakeToast icon={icon} text={text ?? ""} />,
    });
};

/**
 * A hook that displays one of a number of toast message presets.
 *
 * Usage:
 *   const toast = useEnigmaLakeToastPreset();
 *   // display the toast message
 *   toast("I am a message", "success");
 *
 * @param text The string to display
 * @param toastType One of the preset toast types. Default is "info".
 */
export const useEnigmaLakeToastPreset = (options?: {
  preventOverlapping?: boolean;
  duration?: number;
  iconHeight?: number;
  iconWidth?: number;
  customIcon?: ReactNode;
}): EnigmaLakeToastPresetFunction => {
  const {
    preventOverlapping = false,
    duration = TOAST_VISIBILITY_DURATION,
    iconHeight = 4,
    iconWidth = 4,
    customIcon,
  } = options ?? {};
  const toast = useToast();

  return useCallback(
    (
      text: string | ReactNode | null,
      toastType: ToastType = "info",
      position: ToastPosition = "bottom"
    ) => {
      const PresetComponent = toastTypeToPresetComponent[toastType];
      const id = `${text}-${toastType}`;

      if (toast.isActive(id) && preventOverlapping) {
        return null;
      }

      toast({
        id,
        containerStyle: {
          minWidth: "initial",
        },
        description: text ?? "",
        duration,
        position: position,
        render: () => (
          <PresetComponent
            key={`${text}-${toastType}`}
            text={text ?? ""}
            height={iconHeight}
            width={iconWidth}
            icon={customIcon}
          />
        ),
      });
    },
    [customIcon, duration, iconHeight, iconWidth, preventOverlapping, toast]
  );
};
