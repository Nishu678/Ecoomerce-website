import HeaderAdmin from "@/components/common/HeaderAdmin";
import SidebarAdmin from "@/components/common/SidebarAdmin";
import { Link, Outlet, createFileRoute } from "@tanstack/react-router";
import { ShoppingCart } from "lucide-react";

export const Route = createFileRoute("/admin")({
  component: AdminLayout,
});

function AdminLayout() {
  return (
    <div className="flex h-screen overflow-hidden">
      {/* Sidebar */}
      <SidebarAdmin />

      {/* Right Side */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <header className="h-16 bg-white border-b border-gray-200 flex items-center px-4 shadow-md">
          <HeaderAdmin />
        </header>

        {/* Page Content */}
        <main className="flex-1 overflow-auto p-4 bg-[#f0f9f9]">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
