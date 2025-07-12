// src/layouts/AppLayout.jsx
import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar"; // ensure this is a named export

const AppLayout = ({ children }) => {
  return (
    <SidebarProvider>
      <div className="flex min-h-screen">
        <AppSidebar />
        <main className="flex-1 p-4">{children}</main>
      </div>
    </SidebarProvider>
  );
};

export default AppLayout;
