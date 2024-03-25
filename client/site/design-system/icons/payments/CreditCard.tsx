import { createIcon } from "@chakra-ui/react";

const CreditCard = createIcon({
  displayName: "CreditCard",
  viewBox: "0 0 20 20",
  defaultProps: {
    width: 5,
    height: 5,
    color: "brand-purple",
  },
  path: [
    <path
      key="cred-card-0"
      fillRule="evenodd"
      clipRule="evenodd"
      d="M2.49998 3.95833C1.92468 3.95833 1.45831 4.4247 1.45831 4.99999V15C1.45831 15.5753 1.92468 16.0417 2.49998 16.0417H17.5C18.0753 16.0417 18.5416 15.5753 18.5416 15V4.99999C18.5416 4.4247 18.0753 3.95833 17.5 3.95833H2.49998ZM0.208313 4.99999C0.208313 3.73434 1.23433 2.70833 2.49998 2.70833H17.5C18.7656 2.70833 19.7916 3.73434 19.7916 4.99999V15C19.7916 16.2656 18.7656 17.2917 17.5 17.2917H2.49998C1.23433 17.2917 0.208313 16.2656 0.208313 15V4.99999Z"
      fill="currentColor"
    />,
    <path
      key="cred-card-1"
      fillRule="evenodd"
      clipRule="evenodd"
      d="M0.208313 8.33333C0.208313 7.98815 0.488135 7.70833 0.833313 7.70833H19.1666C19.5118 7.70833 19.7916 7.98815 19.7916 8.33333C19.7916 8.67851 19.5118 8.95833 19.1666 8.95833H0.833313C0.488135 8.95833 0.208313 8.67851 0.208313 8.33333Z"
      fill="currentColor"
    />,
  ],
});

export { CreditCard };
