"use client";

import { Admin } from "@/component/app/Admin";
import { SessionProvider } from "next-auth/react";

export default function AdminPage() {
  return (
    <SessionProvider>
      <Admin />
    </SessionProvider>
  );
}
