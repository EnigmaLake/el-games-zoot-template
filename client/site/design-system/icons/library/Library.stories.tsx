import {
  Flex,
  Icon,
  SimpleGrid,
  useClipboard,
  useToast,
  VStack,
} from "@chakra-ui/react";
import type { FC, PropsWithChildren } from "react";
import { Meta } from "@storybook/react";
import { Check1 } from "./Check1";
import { Minus } from "./Minus";
import { Error } from "./Error";
import { Search } from "./Search";
import { ArrowDown } from "./ArrowDown";
import { ArrowUpRight } from "./ArrowUpRight";
import { ArrowRight } from "./ArrowRight";
import { Info1 } from "./Info1";
import { Text } from "../../components/Typography/Text";
import { IconButton } from "../../components/Button/IconButton";
import { IconProps, IconVariant } from "../../types/shared";
import { CardStack2 } from "./CardStack2";
import { Listing } from "./Listing";
import { Globe } from "./Globe";
import { Chat } from "./Chat";
import { RobotCharlie } from "./RobotCharlie";
import { ExternalLink } from "./ExternalLink";
import { TrendIncrease } from "./TrendIncrease";
import { TrendDecrease } from "./TrendDecrease";
import { Favorites } from "./Favorites";
import { ListView } from "./ListView";
import { CardDeck } from "./CardDeck";
import { CloseX } from "./CloseX";
import { Beginning } from "./Beginning";
import { End } from "./End";
import { ChevronRight } from "./ChevronRight";
import { Notification } from "./Notification";
import { Reload } from "./Reload";
import { BarChart } from "./BarChart";
import { Sound } from "./Sound";
import { Compress } from "./Compress";
import { ArrowSimpleRight } from "./ArrowSimpleRight";
import { BackIcon } from "./BackIcon";
import { Gift } from "./Gift";
import { Graph } from "./Graph";

const icons: Record<string, FC<IconProps>> = {
  check1: Check1,
  minus: Minus,
  error: Error,
  search: Search,
  cardstack2: CardStack2,
  listing: Listing,
  globe: Globe,
  trendIncrease: TrendIncrease,
  arrowUpRight: ArrowUpRight,
  arrowRight: ArrowRight,
  arrowDown: ArrowDown,
  chat: Chat,
  externalLink: ExternalLink,
  robotCharlie: RobotCharlie,
  info1: Info1,
  trendDecrease: TrendDecrease,
  favorites: Favorites,
  listView: ListView,
  cardDeck: CardDeck,
  closeX: CloseX,
  beginning: Beginning,
  end: End,
  chevronRight: ChevronRight,
  notification: Notification,
  reload: Reload,
  barChart: BarChart,
  sound: Sound,
  compress: Compress,
  arrowSimpleRight: ArrowSimpleRight,
  backIcon: BackIcon,
  gift: Gift,
  graph: Graph,
};

export default {
  title: "Design System/Icons/Library",
  component: Icon,
} as Meta<typeof Check1>;

const ICON_VARIANTS: IconVariant[] = ["default", "thin", "thick"];

const CopyIcon: FC<
  PropsWithChildren<{
    name: string;
    variant: IconVariant;
    icon: FC<IconProps>;
  }>
> = (props) => {
  const { name, variant, icon } = props;
  const toast = useToast();

  const IconComponent = icon;
  const copyString = `<${name} variant="${variant}" />`;
  const { onCopy } = useClipboard(copyString);

  const onCopySuccess = () => toast({ title: "Copied!" });

  const onTileClick = () => {
    onCopy();
    onCopySuccess();
  };

  return (
    <IconButton
      variant="tertiary"
      key={`${name}-${variant}`}
      onClick={onTileClick}
    >
      <IconComponent variant={variant} />
    </IconButton>
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
        {ICON_VARIANTS.map((variant: IconVariant) => {
          return (
            <Flex
              direction="column"
              justifyContent="center"
              alignItems="center"
              key={icon.displayName}
            >
              <CopyIcon variant={variant} name={iconName ?? ""} icon={icon} />
              <Text variant="small">{variant}</Text>
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
