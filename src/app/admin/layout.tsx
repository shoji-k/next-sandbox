type Props = {
  children: React.ReactNode;
};

export default function AdminLayout({ children }: Props) {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-amber-100">
      {children}
    </main>
  );
}
