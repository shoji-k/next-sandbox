"use client";

import { useIp } from "./useIp";

export function ClientIp() {
  const [loading, ip] = useIp();

  if (loading) return <>Loading...</>;
  if (!ip) return <>Can&apos;t get</>;

  return <>{ip}</>;
}
