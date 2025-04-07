import { Sidebar } from "@/components/layout/sidebar";
import { Toaster } from "sonner";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex h-screen bg-nova-dark">
    {/* Sidebar */}
    <Sidebar role="admin" />

    {/* Main Content */}
    <div className="flex-1 overflow-auto">
      <div className="p-8">{children}</div>
    </div>
    <Toaster />
  </div>
  );
}