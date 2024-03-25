import { createIcon } from "@chakra-ui/icon";
import { IconProps } from "../../types/shared";
import { FC } from "react";

const Default = createIcon({
  displayName: "FavoritesDefault",
  viewBox: "0 0 24 24",
  defaultProps: {
    fill: "#F3F3F3",
  },
  path: (
    <path
      fillRule="evenodd"
      d="M14.293 3.421a5.737 5.737 0 0 1 6.253 9.36l-8.015 8.014a.75.75 0 0 1-1.06 0L3.454 12.78a5.738 5.738 0 1 1 8.115-8.115l.43.431.431-.43a5.736 5.736 0 0 1 1.862-1.245Zm2.196 1.063a4.236 4.236 0 0 0-2.997 1.242l-.961.961a.75.75 0 0 1-1.06 0l-.962-.96a4.238 4.238 0 1 0-5.993 5.993L12 19.204l7.484-7.484a4.24 4.24 0 0 0 .92-4.619 4.237 4.237 0 0 0-3.916-2.617Z"
      clipRule="evenodd"
    />
  ),
});

const Thick = createIcon({
  displayName: "FavoritesThick",
  viewBox: "0 0 24 24",
  defaultProps: {
    fill: "#F3F3F3",
  },
  path: (
    <path
      fillRule="evenodd"
      d="M14.192 3.186a5.987 5.987 0 0 1 6.526 9.767l-8.015 8.015a1 1 0 0 1-1.414 0l-8.016-8.015a5.988 5.988 0 1 1 8.469-8.469l.254.254.253-.254a5.987 5.987 0 0 1 1.943-1.298Zm2.292 1.544a3.987 3.987 0 0 0-2.82 1.168l-.961.962a1 1 0 0 1-1.414 0l-.961-.961a3.988 3.988 0 0 0-5.64 5.64l7.308 7.307 7.308-7.308a3.985 3.985 0 0 0 0-5.64 3.988 3.988 0 0 0-2.82-1.168Z"
      clipRule="evenodd"
    />
  ),
});

const Thin = createIcon({
  displayName: "FavoritesThin",
  viewBox: "0 0 24 24",
  defaultProps: {
    fill: "#F3F3F3",
  },
  path: (
    <path
      fillRule="evenodd"
      d="M14.388 3.652a5.486 5.486 0 0 1 7.59 5.07 5.487 5.487 0 0 1-1.609 3.882l-8.015 8.015a.5.5 0 0 1-.707 0l-8.015-8.015a5.488 5.488 0 0 1 7.761-7.762l.608.608.607-.608a5.486 5.486 0 0 1 1.78-1.19Zm2.1.582a4.487 4.487 0 0 0-3.173 1.315l-.96.961a.5.5 0 0 1-.708 0l-.961-.96a4.488 4.488 0 0 0-6.347 6.346L12 19.558l7.661-7.662a4.487 4.487 0 0 0-3.173-7.662Z"
      clipRule="evenodd"
    />
  ),
});

export const Favorites: FC<IconProps> = ({ variant = "default", ...rest }) => {
  const VARIANTS = {
    default: Default,
    thick: Thick,
    thin: Thin,
  };

  const Component = VARIANTS[variant];
  return <Component {...rest} />;
};
