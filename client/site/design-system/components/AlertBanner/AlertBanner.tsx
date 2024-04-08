import { Flex, Spinner, useStyleConfig } from "@chakra-ui/react";
import type { FC, PropsWithChildren } from "react";
import { Fail } from "../../icons/feedback/Fail";
import { Info } from "../../icons/feedback/Info";
import { Success } from "../../icons/feedback/Success";
import { Warning } from "../../icons/feedback/Warning";
import { PrimaryButton } from "../Button/PrimaryButton";

import { AlertBannerProps } from "./AlertBannerProps";

const BannerIcons: Record<
  AlertBannerProps["variant"],
  FC<
    PropsWithChildren<{
      fill: string;
      color?: string;
      boxSize?: number;
    }>
  >
> = {
  success: Success,
  error: Fail,
  errorWithPadding: Fail,
  warning: Warning,
  info: Info,
};

export const AlertBanner: FC<PropsWithChildren<AlertBannerProps>> = (props) => {
  const {
    variant,
    iconVariant = variant,
    showIcon = true,
    loading,
    buttonLabel,
    buttonOnClick,
    children,
    full,
    ...rest
  } = props;
  const styles = useStyleConfig("AlertBanner", { variant });

  const iconStyles = useStyleConfig("AlertBanner", { variant: iconVariant });
  const BannerIcon = loading ? Spinner : BannerIcons[iconVariant];

  return (
    <Flex
      flexDir="column"
      role="alert"
      sx={styles}
      width={full ? "full" : undefined}
      {...rest}
    >
      <Flex align="center" gap={2}>
        {(showIcon || loading) && (
          <BannerIcon
            boxSize={5}
            data-testid="alert-icon"
            fill="currentColor"
            color={loading ? "text-primary" : (iconStyles.color as string)}
          />
        )}
        {children}
        {buttonLabel && (
          <Flex flexGrow={1} justify="flex-end">
            <PrimaryButton size="xs" callout onClick={buttonOnClick}>
              {buttonLabel}
            </PrimaryButton>
          </Flex>
        )}
      </Flex>
    </Flex>
  );
};
