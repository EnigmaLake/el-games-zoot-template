import {
  Button,
  Icon,
  SimpleGrid,
  useClipboard,
  useToast,
  VStack,
} from "@chakra-ui/react";
import type { FC, PropsWithChildren, ReactNode } from "react";
import { Meta } from "@storybook/react";

import { Text } from "../../components/Typography/Text";
import { ApplePay } from "./ApplePay";
import { Bank } from "./Bank";
import { CreditCard } from "./CreditCard";
import { GooglePay } from "./GooglePay";
import { Tokens } from "./Tokens";

const paymentOptions = [
  {
    label: "Credit Card",
    icon: <CreditCard />,
    id: "CreditCard",
  },
  {
    label: "Bank Transfer",
    icon: <Bank />,
    id: "Bank",
  },
  {
    label: "Google Pay",
    icon: <GooglePay />,
    id: "GooglePay",
  },
  {
    label: "Apple Pay",
    icon: <ApplePay />,
    id: "ApplePay",
  },
  {
    label: "Tokens",
    icon: <Tokens />,
    id: "Tokens",
  },
];

export default {
  title: "Design System/Icons/PaymentMethods",
  component: Icon,
} as Meta<typeof CreditCard>;

const CopyIcon: FC<
  PropsWithChildren<{
    id: string;
    icon: ReactNode;
  }>
> = (props) => {
  const { id, icon } = props;
  const toast = useToast();

  const copyString = `<${id} />`;
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
      key={`${id}`}
      onClick={onTileClick}
    >
      {icon}
    </Button>
  );
};
const IconTile: FC<
  PropsWithChildren<{
    icon: ReactNode;
    label: string;
    id: string;
  }>
> = (props) => {
  return (
    <VStack
      borderWidth={1}
      background="greys.grey800"
      borderColor="greys.grey600"
      borderRadius="lg"
      px={3}
      py={2}
    >
      <CopyIcon {...props} />
      <Text variant="large">{props.label}</Text>
    </VStack>
  );
};

const IconGrid: FC = () => (
  <SimpleGrid minChildWidth="160px" spacing={3}>
    {paymentOptions.map((payment) => (
      <IconTile {...payment} key={payment.label} />
    ))}
  </SimpleGrid>
);

export const Default = () => <IconGrid />;
