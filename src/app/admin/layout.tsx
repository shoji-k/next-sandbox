import { NextAuthProvider } from "@/providers/NextAuthProvider";

type Props = {
  children: React.ReactNode;
};

export default function AdminLayout({ children }: Props) {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-8 bg-amber-100">
      <NextAuthProvider>{children}</NextAuthProvider>
    </main>
  );
}
