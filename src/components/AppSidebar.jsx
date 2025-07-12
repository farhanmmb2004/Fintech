import { useState } from "react";
import { 
  Home, 
  DollarSign, 
  TrendingUp, 
  CreditCard, 
  FileText, 
  BarChart3, 
  Settings, 
  HelpCircle,
  ChevronDown,
  ChevronRight
} from "lucide-react";
import { useLocation } from "react-router-dom";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar"; 

const menuItems = [
  { title: "Home", icon: Home, url: "/home", active: true },
  { 
    title: "Financial Inclusion", 
    icon: DollarSign, 
    url: "#", 
    hasSubmenu: true,
    submenu: ["Overview", "Reports", "Analytics"]
  },
  { 
    title: "Travel", 
    icon: TrendingUp, 
    url: "#", 
    hasSubmenu: true,
    submenu: ["Bookings", "Expenses", "Reports"]
  },
  { 
    title: "Bill Payment", 
    icon: CreditCard, 
    url: "#", 
    hasSubmenu: true,
    submenu: ["Utilities", "Mobile", "DTH"]
  },
  { title: "Other Services", icon: FileText, url: "#" },
  { 
    title: "Payment Gateway", 
    icon: BarChart3, 
    url: "#", 
    hasSubmenu: true,
    submenu: ["Transactions", "Settlement", "Reports"]
  },
  { 
    title: "Report", 
    icon: BarChart3, 
    url: "#", 
    hasSubmenu: true,
    submenu: ["Sales", "Financial", "Custom"]
  },
  { 
    title: "Complaint", 
    icon: FileText, 
    url: "#", 
    hasSubmenu: true,
    submenu: ["New", "Pending", "Resolved"]
  }
];

const bottomMenuItems = [
  { title: "Customer Setting", icon: Settings, url: "#" },
  { title: "Support", icon: HelpCircle, url: "#" }
];

export function AppSidebar() {
  const { collapsed } = useSidebar();
  const location = useLocation();
  const [expandedItems, setExpandedItems] = useState([]);

  const toggleExpanded = (title) => {
    setExpandedItems(prev => 
      prev.includes(title) 
        ? prev.filter(item => item !== title)
        : [...prev, title]
    );
  };

  const isActive = (url) => location.pathname === url;

  return (
    <Sidebar className={collapsed ? "w-16" : "w-64"} collapsible>
      <SidebarContent className="bg-white border-r">
        {/* Logo */}
        <div className="p-4 border-b">
          <div className="flex items-center">
            <div className="w-8 h-8 bg-red-600 rounded flex items-center justify-center">
              <span className="text-white font-bold text-sm">S</span>
            </div>
            {!collapsed && (
              <span className="ml-2 font-bold">
                <span className="text-red-600">saral</span>
                <span className="text-black">money</span>
              </span>
            )}
          </div>
        </div>

        {/* Main Menu */}
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton 
                    className={`w-full justify-start ${
                      isActive(item.url) ? "bg-blue-50 text-blue-600 border-r-2 border-blue-600" : "hover:bg-gray-50"
                    }`}
                    onClick={() => item.hasSubmenu && toggleExpanded(item.title)}
                  >
                    <div className="flex items-center w-full">
                      <item.icon className="h-4 w-4" />
                      {!collapsed && (
                        <>
                          <span className="ml-3 flex-1 text-left">{item.title}</span>
                          {item.hasSubmenu && (
                            expandedItems.includes(item.title) ? 
                            <ChevronDown className="h-4 w-4" /> : 
                            <ChevronRight className="h-4 w-4" />
                          )}
                        </>
                      )}
                    </div>
                  </SidebarMenuButton>
                  {!collapsed && item.hasSubmenu && expandedItems.includes(item.title) && (
                    <div className="ml-7 mt-1 space-y-1">
                      {item.submenu?.map((subItem) => (
                        <div key={subItem} className="py-1 px-3 text-sm text-gray-600 hover:text-blue-600 cursor-pointer">
                          {subItem}
                        </div>
                      ))}
                    </div>
                  )}
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        {/* Bottom Menu */}
        <div className="mt-auto border-t">
          <SidebarGroup>
            <SidebarGroupContent>
              <SidebarMenu>
                {bottomMenuItems.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton className="w-full justify-start hover:bg-gray-50">
                      <item.icon className="h-4 w-4" />
                      {!collapsed && <span className="ml-3">{item.title}</span>}
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </div>
      </SidebarContent>
    </Sidebar>
  );
}