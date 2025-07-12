import { Button } from "@/components/ui/Button.jsx";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { User, Bell } from "lucide-react";

export function DashboardHeader() {
  return (
    <header className="bg-white border-b px-6 py-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <SidebarTrigger />
          <div>
            <h1 className="text-xl font-semibold text-gray-900">Dashboard</h1>
            <p className="text-sm text-gray-500">Home &gt; Home Page</p>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <Button variant="outline" size="sm" className="bg-blue-600 text-white hover:bg-blue-700">
            Send E-SMS
          </Button>
          <div className="flex items-center space-x-2">
            <Bell className="h-5 w-5 text-gray-500" />
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center">
                <User className="h-4 w-4 text-gray-600" />
              </div>
              <span className="text-sm font-medium">Damini Rohit Agrawal</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}