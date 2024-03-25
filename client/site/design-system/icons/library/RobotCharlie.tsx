import { createIcon } from "@chakra-ui/icon";
import { IconProps } from "../../types/shared";
import { FC } from "react";

const Default = createIcon({
  displayName: "RobotCharlieDefault",
  viewBox: "0 0 24 24",
  defaultProps: {
    fill: "#F3F3F3",
    fillRule: "evenodd",
    clipRule: "evenodd",
  },
  path: [
    <path
      key="0"
      d="M7.5436 15.2813C7.56596 15.2529 7.63006 15.1885 7.72534 15.1215C7.87364 15.0173 8.03565 14.9555 8.20865 14.9508H8.17948C8.35476 14.9555 8.51686 15.0172 8.66402 15.121C8.75816 15.1874 8.82087 15.2509 8.84227 15.2786L9.16994 15.7035L10.0198 15.0482L9.69213 14.6232C9.60995 14.5167 9.47388 14.3789 9.28236 14.2439C8.97338 14.026 8.61346 13.8889 8.20849 13.8779H8.17941C7.77679 13.8889 7.41793 14.0259 7.10852 14.2433C6.91717 14.3778 6.78076 14.5148 6.69806 14.6205L6.36768 15.0432L7.21325 15.7041L7.5436 15.2813ZM15.0558 15.2813C15.0782 15.2529 15.1423 15.1885 15.2375 15.1215C15.3858 15.0173 15.5478 14.9555 15.7208 14.9508H15.6917C15.867 14.9555 16.0291 15.0172 16.1762 15.121C16.2704 15.1874 16.3331 15.2509 16.3545 15.2786L16.6821 15.7035L17.532 15.0482L17.2043 14.6232C17.1221 14.5167 16.9861 14.3789 16.7946 14.2439C16.4856 14.026 16.1257 13.8889 15.7207 13.8779H15.6916C15.289 13.8889 14.9301 14.0259 14.6207 14.2433C14.4294 14.3778 14.293 14.5148 14.2103 14.6205L13.8799 15.0432L14.7254 15.7041L15.0558 15.2813Z"
    />,
    <path
      key="1"
      d="M12.0017 4.21951C17.7521 4.21951 20.4214 6.53063 21.6603 8.67585V1.53659H22.7334V17.6341C22.7334 17.6341 22.7334 23 12.0017 23C1.27002 23 1.27002 17.6341 1.27002 17.6341V1.53659H2.34319V8.67585C3.58212 6.53056 6.25132 4.21951 12.0017 4.21951ZM3.95295 14.9512C3.95295 12.7286 5.75265 10.9268 7.97868 10.9268H16.0248C18.2481 10.9268 20.0505 12.7281 20.0505 14.9512C20.0505 17.1738 18.2508 18.9756 16.0248 18.9756H7.97868C5.75531 18.9756 3.95295 17.1743 3.95295 14.9512ZM2.34319 1.53659C2.34319 1.24026 2.10293 1 1.8066 1C1.51028 1 1.27002 1.24026 1.27002 1.53659H2.34319ZM22.7334 1.53659C22.7334 1.24026 22.4932 1 22.1968 1C21.9005 1 21.6603 1.24026 21.6603 1.53659H22.7334Z"
    />,
  ],
});

export const RobotCharlie: FC<IconProps> = ({
  variant = "default",
  ...rest
}) => {
  const VARIANTS = {
    default: Default,
    thick: Default,
    thin: Default,
  };

  const Component = VARIANTS[variant];
  return <Component {...rest} />;
};
