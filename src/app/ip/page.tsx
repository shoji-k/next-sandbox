import { ClientIp } from "@/component/Ip/Ip";

export default async function IpPage() {
  const data = await getData();

  return (
    <main className="flex flex-col gap-2 p-12">
      <h1>IP</h1>
      <div>Your Server IP: {data.origin}</div>
      <div>
        Your Client IP: <ClientIp />
      </div>
    </main>
  );
}

async function getData() {
  const res = await fetch("https://httpbin.org/ip");

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}
