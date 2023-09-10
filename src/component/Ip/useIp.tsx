import { useEffect, useState } from "react";

type Response = {
  origin: string;
};

export function useIp() {
  const [ip, setIp] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch("https://httpbin.org/ip");
        const data = (await res.json()) as Response;
        setIp(data.origin);
      } catch (e) {
        console.warn(e);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  return [loading, ip];
}
