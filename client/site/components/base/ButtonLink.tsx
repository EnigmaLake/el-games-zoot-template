import { Button, ButtonProps } from "@chakra-ui/react";
import Link from "next/link";
import { FC } from "react";

interface Props extends ButtonProps {
  href: string;
}

const ButtonLink: FC<Props> = ({ href, children, ...buttonProps }) => {
  return (
    <Button variant="link" {...buttonProps}>
      <Link legacyBehavior href={href}>
        {children}
      </Link>
    </Button>
  );
};

export default ButtonLink;
