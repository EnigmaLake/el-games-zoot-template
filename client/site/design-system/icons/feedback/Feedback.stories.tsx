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
import { Info } from "./Info";
import { Text } from "../../components/Typography/Text";
import { IconProps } from "../../types/shared";
import { Warning } from "./Warning";
import { Help } from "./Help";
import { Success } from "./Success";
import { Fail } from "./Fail";

const icons: Record<string, FC<IconProps>> = {
  info: Info,
  warning: Warning,
  help: Help,
  success: Success,
  fail: Fail,
};

export default {
  title: "Design System/Icons/Feedback",
  component: Icon,
} as Meta<typeof Info>;

const CopyIcon: FC<
  PropsWithChildren<{
    name: string;
    icon: FC<IconProps>;
  }>
> = (props) => {
  const { name, icon } = props;
  const toast = useToast();

  const IconComponent = icon;
  const copyString = `<${name} />`;
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
      key={`${name}`}
      onClick={onTileClick}
    >
      <IconComponent boxSize={84} />
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
        <Flex
          direction="column"
          justifyContent="center"
          alignItems="center"
          key={icon.displayName}
        >
          <CopyIcon name={iconName ?? ""} icon={icon} />
        </Flex>
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
