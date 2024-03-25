import { useToast } from "@chakra-ui/react";
import { FC, ReactNode, useCallback } from "react";
import {
  SweepsCorpToast,
  SweepsCorpToastError,
  SweepsCorpToastInfo,
  SweepsCorpToastPresetProps,
  SweepsCorpToastSuccess,
} from "../components/base/SweepsCorpToast/SweepsCorpToast";

export type ToastType = "success" | "error" | "info" | "custom";
type SweepsCorpToastFunction = (
  text: string | null,
  icon?: ReactNode,
  visibilityDuration?: number
) => void;
export type SweepsCorpToastPresetFunction = (
  text: string | ReactNode | null,
  toastType?: ToastType
) => void;

const TOAST_VISIBILITY_DURATION = 3000;

export const toastTypeToPresetComponent: Record<
  ToastType,
  FC<SweepsCorpToastPresetProps>
> = {
  success: SweepsCorpToastSuccess,
  error: SweepsCorpToastError,
  info: SweepsCorpToastInfo,
  custom: SweepsCorpToast,
};

/**
 * A hook that displays a customizable toast message.
 *
 * Usage:
 *   const toast = useSweepsCorpToast();
 *   // show the toast message
 *   toast("I am a message", <ExampleIcon />, 5000);
 *
 * @param text The string to display
 * @param icon The icon to display, preceding the toast message
 * @param visibilityDuration The amount of time the toast will show before auto-closing, in ms.
 */
export const useSweepsCorpToast = (): SweepsCorpToastFunction => {
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
      render: () => <SweepsCorpToast icon={icon} text={text ?? ""} />,
    });
};

/**
 * A hook that displays one of a number of toast message presets.
 *
 * Usage:
 *   const toast = useSweepsCorpToastPreset();
 *   // display the toast message
 *   toast("I am a message", "success");
 *
 * @param text The string to display
 * @param toastType One of the preset toast types. Default is "info".
 */
export const useSweepsCorpToastPreset = (options?: {
  preventOverlapping?: boolean;
  duration?: number;
  iconHeight?: number;
  iconWidth?: number;
  customIcon?: ReactNode;
}): SweepsCorpToastPresetFunction => {
  const {
    preventOverlapping = false,
    duration = TOAST_VISIBILITY_DURATION,
    iconHeight = 4,
    iconWidth = 4,
    customIcon,
  } = options ?? {};
  const toast = useToast();

  return useCallback(
    (text: string | ReactNode | null, toastType: ToastType = "info") => {
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
