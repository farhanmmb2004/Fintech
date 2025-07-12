// pages/Home.jsx
import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";
import { DashboardHeader } from "@/components/DashboardHeader";
import { MetricsCards } from "@/components/MetricsCards";
import { SalesChart } from "@/components/SalesChart";
import { DataTable } from "@/components/DataTable";
import { NewsActivity } from "@/components/NewsActivity";

const Home = () => {
  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-gray-50">
        {/* <AppSidebar /> */}
        <main className="flex-1 flex flex-col">
          <DashboardHeader />
          <div className="flex-1 p-6 space-y-6">
            <MetricsCards />
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2">
                <SalesChart />
              </div>
              <div className="lg:col-span-1">
                <NewsActivity />
              </div>
            </div>
            <DataTable />
          </div>
        </main>
      </div>
    </SidebarProvider>
  );
};

export default Home;