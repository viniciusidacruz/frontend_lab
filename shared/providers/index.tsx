"use client";

import { QueryClientProvider } from "@tanstack/react-query";

import { queryClient } from "@/shared/config";

export const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};
