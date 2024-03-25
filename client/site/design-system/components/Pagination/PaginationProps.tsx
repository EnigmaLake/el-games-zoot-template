import React from "react";

export interface PaginationProps {
  page: number;
  pageCount: number;
  onPageChange: React.Dispatch<React.SetStateAction<number>>;
  isLoading: boolean;
}
