"use client";

type Props = {
  children: React.ReactNode;
};

import { trpc } from "@/utils/trpc";

function TRPCLayout({ children }: Props) {
  return (
    <main className="flex flex-col gap-2 p-12">
      <h1>TRPC</h1>
      {children}
    </main>
  );
}

export default trpc.withTRPC(TRPCLayout);
