import {
  Button,
  Flex,
  Icon,
  SimpleGrid,
  useClipboard,
  useToast,
  VStack,
} from "@chakra-ui/react";
import type { FC, PropsWithChildren } from "react";
import { Meta } from "@storybook/react";
import { Twitter } from "./Twitter";
import { Discord } from "./Discord";
import { YouTube } from "./YouTube";
import { Twitch } from "./Twitch";
import { Google } from "./Google";
import { Facebook } from "./Facebook";
import { Apple } from "./Apple";
import { LinkedIn } from "./LinkedIn";
import { Text } from "../../components/Typography/Text";
import { ColorMode, IconProps } from "../../types/shared";

const icons: Record<string, FC<IconProps>> = {
  twitter: Twitter,
  discord: Discord,
  youtube: YouTube,
  twitch: Twitch,
  google: Google,
  facebook: Facebook,
  apple: Apple,
  linkedin: LinkedIn,
};

export default {
  title: "Design System/Icons/Social",
  component: Icon,
} as Meta<typeof Twitter>;

const ICON_COLORS: ColorMode[] = ["light", "dark"];

const CopyIcon: FC<
  PropsWithChildren<{
    name: string;
    color: ColorMode;
    icon: FC<IconProps>;
  }>
> = (props) => {
  const { name, color, icon } = props;
  const toast = useToast();

  const IconComponent = icon;
  const copyString = `<${name} colorMode="${color}" />`;
  const { onCopy } = useClipboard(copyString);

  const onCopySuccess = () => toast({ title: "Copied!" });

  const onTileClick = () => {
    onCopy();
    onCopySuccess();
  };

  return (
    <Button
      height="min-content"
      variant="ghost"
      key={`${name}-${color}`}
      onClick={onTileClick}
    >
      <IconComponent boxSize={8} colorMode={color} />
    </Button>
  );
};
const IconTile: FC<
  PropsWithChildren<{
    icon: FC<IconProps>;
  }>
> = ({ icon }) => {
  const iconName = icon.displayName;
  return (
    <VStack
      borderWidth={1}
      background="greys.grey800"
      borderColor="greys.grey600"
      borderRadius="lg"
      px={3}
      py={2}
    >
      <Flex gap={3}>
        {ICON_COLORS.map((color: ColorMode) => {
          return (
            <Flex
              direction="column"
              justifyContent="center"
              alignItems="center"
              key={icon.displayName}
            >
              <CopyIcon color={color} name={iconName ?? ""} icon={icon} />
              <Text variant="small">{color}</Text>
            </Flex>
          );
        })}
      </Flex>
      <Text variant="large">{icon.displayName}</Text>
    </VStack>
  );
};

const IconGrid: FC = () => (
  <SimpleGrid minChildWidth="160px" spacing={3}>
    {Object.keys(icons).map((iconName) => (
      <IconTile icon={icons[iconName]} key={iconName} />
    ))}
  </SimpleGrid>
);

export const Default = () => <IconGrid />;
