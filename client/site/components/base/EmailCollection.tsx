import {
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Grid,
  GridItem,
  Input,
} from "@chakra-ui/react";
import type { FC, ReactNode } from "react";
import { ChangeEvent, useCallback, useRef, useState } from "react";
import { string } from "yup";
import { useSweepsCorpToastPreset } from "../../hooks/useSweepsCorpToast";

interface EmailCollectionFormProps {
  formTitle?: string | ReactNode;
  size?: string;
}

export const EmailCollectionForm: FC<EmailCollectionFormProps> = ({
  formTitle,
  size,
}) => {
  const emailInputRef = useRef(null);
  const [email, setEmail] = useState<string | null>();
  const [isSubmittingEmail, setIsSubmittingEmail] = useState<boolean>(false);
  const [formError, setFormError] = useState<string>();

  const toast = useSweepsCorpToastPreset({
    duration: 5000,
    preventOverlapping: false,
    iconHeight: 8,
    iconWidth: 8,
  });

  const handleEmailSubmit = useCallback(() => {
    const saveContact = async () => {
      setIsSubmittingEmail(true);
      const postBody = {
        email,
        description: "marketplace",
      };

      const response = await fetch("/api/promotions/collect-contact", {
        method: "POST",
        body: JSON.stringify(postBody),
      });
      setIsSubmittingEmail(false);

      if (response.ok) {
        if (emailInputRef?.current) {
          const emailInput: HTMLInputElement = emailInputRef.current;
          emailInput.value = "";
        }
        toast(
          <div>
            <p>
              <b>Mission Accomplished!</b>
            </p>
            <p>Keep an eye on your email for exciting news and updates</p>
          </div>,
          "success"
        );
      } else {
        const { error } = await response.json();

        const duplicateContactError = error?.body?.message.startsWith(
          "Contact already exists"
        );
        const duplicateContactMessage =
          "It looks like you've already made a splash with this email.";
        const genericErrorMessage =
          "Unexpected deep sea currents swept away your request. Please try again.";
        const genericTitle = "This is awkward...";
        const duplicateTitle = "You've already signed up!";
        toast(
          <div>
            <p>
              <b>{duplicateContactError ? duplicateTitle : genericTitle}</b>
            </p>
            <p>
              {duplicateContactError
                ? duplicateContactMessage
                : genericErrorMessage}
            </p>
          </div>,
          duplicateContactError ? "success" : "error"
        );
      }
    };

    saveContact();
  }, [email, toast]);

  const handleEmailOnChange = useCallback(
    (evt: ChangeEvent<HTMLInputElement>) => {
      const currentTarget = evt.currentTarget;
      const verifyEmailBeforeSave = async () => {
        const providedEmail = currentTarget.value;
        const schema = string().email();
        const isValid = await schema.isValid(providedEmail);
        if (isValid) {
          setFormError("");
          setEmail(currentTarget.value);
        } else {
          setFormError("A valid email is required");
          setEmail(null);
        }
      };

      verifyEmailBeforeSave();
    },
    [setEmail, setFormError]
  );

  return (
    <FormControl isInvalid={!!formError}>
      {formTitle && <FormLabel textAlign="center">{formTitle}</FormLabel>}
      <Grid templateColumns="repeat(4, 1fr)" gap={4}>
        <GridItem colSpan={{ base: 4, md: 3 }}>
          <Input
            ref={emailInputRef}
            type="email"
            placeholder="Email address..."
            onChange={handleEmailOnChange}
            borderRadius="6px"
            fontSize={!size ? "2sm" : undefined}
            size={size}
            backgroundColor="_background.bgSolidL2"
            isDisabled={isSubmittingEmail}
          />
        </GridItem>
        <GridItem colSpan={{ base: 4, md: 1 }}>
          <Button
            w="100%"
            onClick={handleEmailSubmit}
            variant="primary"
            loadingText="Submitting"
            isDisabled={!email}
            isLoading={isSubmittingEmail}
            size={size}
          >
            Submit
          </Button>
        </GridItem>
      </Grid>
      {formError && <FormErrorMessage>{formError}</FormErrorMessage>}
    </FormControl>
  );
};
