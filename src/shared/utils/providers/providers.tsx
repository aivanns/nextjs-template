'use client'

import i18n from "@/shared/i18n/i18n";
import { queryClient } from "@/shared/lib/react-query";
import { HeroUIProvider } from "@heroui/react";
import { QueryClientProvider } from "@tanstack/react-query";
import { I18nextProvider } from "react-i18next";
import { Toaster } from "sonner";

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <HeroUIProvider>
          <I18nextProvider i18n={i18n}>
            <Toaster richColors />
            {children}
          </I18nextProvider>
        </HeroUIProvider>
      </QueryClientProvider>
    </>
  );
};

export default Providers;
