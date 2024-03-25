import { Input as ChakraInput, Flex } from "@chakra-ui/react";
import { FC, useEffect, useState } from "react";
import { Beginning } from "../../icons/library/Beginning";
import { ChevronLeft } from "../../icons/library/ChevronLeft";
import { ChevronRight } from "../../icons/library/ChevronRight";
import { End } from "../../icons/library/End";
import { IconButton } from "../Button/IconButton";
import { Text } from "../Typography/Text";
import { PaginationProps } from "./PaginationProps";

export const Pagination: FC<PaginationProps> = ({
  page,
  pageCount,
  onPageChange,
  isLoading,
}) => {
  const [inputPage, setInputPage] = useState(page);

  useEffect(() => {
    setInputPage(page);
  }, [page]);

  return (
    <Flex
      align="center"
      gap={1}
      textTransform="initial"
      alignSelf={{ base: "center", md: "flex-end" }}
    >
      <IconButton
        size="xs"
        variant="tertiary"
        disabled={page === 1 || isLoading}
        onClick={() => onPageChange(1)}
        data-testid="beginning"
      >
        <Beginning variant="thick" fill="text-secondary" />
      </IconButton>
      <IconButton
        size="xs"
        variant="tertiary"
        disabled={page === 1 || isLoading}
        onClick={() => onPageChange((prevPage) => prevPage - 1)}
        data-testid="previous"
      >
        <ChevronLeft variant="thick" fill="text-secondary" />
      </IconButton>
      <Text variant="small" color="secondary">
        Page
      </Text>
      <ChakraInput
        isDisabled={isLoading}
        maxLength={`${pageCount}`.length}
        h="1.375rem"
        w="2.1875rem"
        px={1}
        py={0.5}
        textAlign="center"
        fontSize="1rem"
        color="text-primary"
        background="background-level-2"
        border={0}
        value={inputPage}
        onChange={(e) => {
          const value = parseInt(e.target.value) || 1;
          setInputPage(value > pageCount ? pageCount : value);
        }}
        onBlur={(e) => onPageChange(parseInt(e.target.value) || 1)}
        data-testid="page"
      />
      <Text variant="small" color="secondary">
        of {pageCount}
      </Text>
      <IconButton
        size="xs"
        variant="tertiary"
        disabled={page === pageCount || isLoading}
        onClick={() => onPageChange((prevPage) => prevPage + 1)}
        data-testid="next"
      >
        <ChevronRight variant="default" fill="text-secondary" />
      </IconButton>
      <IconButton
        size="xs"
        variant="tertiary"
        disabled={page === pageCount || isLoading}
        onClick={() => onPageChange(pageCount)}
        data-testid="end"
      >
        <End variant="thick" fill="text-secondary" />
      </IconButton>
    </Flex>
  );
};
