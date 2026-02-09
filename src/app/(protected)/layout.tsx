import { redirect } from "next/navigation";

export default function ProtectedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const isAuthenticated = false; // luego se conecta a auth real

  if (!isAuthenticated) {
    redirect("/login");
  }

  return <>{children}</>;
}