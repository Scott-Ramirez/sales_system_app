// import Header from "@/components/Layouts/header";
import { Header } from "@/src/components/Layouts/header";
// import Sidebar from "@/components/Layouts/sidebar";
import { Sidebar } from "@/src/components/Layouts/sidebar";

export default function ProtectedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar />
      <div className="relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden">
        <Header />
        <main className="p-4 md:p-6">{children}</main>
      </div>
    </div>
  );
}