"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

type Props = {
  children: React.ReactNode;
};

const queryClient = new QueryClient();

export default function AdminLayout({ children }: Props) {
  return (
    <main className="flex min-h-screen flex-col items-center gap-8 p-8 bg-amber-100">
      <QueryClientProvider client={queryClient}>
        {children}
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </main>
  );
}
