import React, { useState } from 'react';
import { ChevronDown, ChevronRight, Home, DollarSign, TrendingUp, CreditCard, FileText, BarChart3, Settings, HelpCircle, Menu, X, Coins } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const menuItems = [
  { title: "Home", icon: Home, url: "/", active: true },
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

const Sidebar = ({ isOpen, onToggle }) => {
  const [expandedItems, setExpandedItems] = useState([]);
  const location = useLocation();

  const toggleSubmenu = (title) => {
    setExpandedItems(prev => 
      prev.includes(title) 
        ? prev.filter(item => item !== title)
        : [...prev, title]
    );
  };

  const isActive = (url) => location.pathname === url;

  return (
    <>
      {/* Mobile Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 backdrop-blur-sm bg-transparent bg-opacity-50 z-40 lg:hidden"
          onClick={onToggle}
        />
      )}
      
      {/* Sidebar */}
      <div className={`
        fixed left-0 top-0 h-full bg-white border-r border-gray-200 z-50 transition-transform duration-300 ease-in-out
        ${isOpen ? 'translate-x-0' : '-translate-x-full'} 
        lg:translate-x-0 lg:static lg:z-auto
        w-64 flex flex-col
      `}>
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-gray-200">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-green-500 rounded-lg flex items-center justify-center">
              <Coins className="w-5 h-5 text-white" />
            </div>
            <h1 className="text-xl font-bold text-gray-800">SaralMoney</h1>
          </div>
          <button 
            onClick={onToggle}
            className="lg:hidden p-1 rounded-md hover:bg-gray-100"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Navigation */}
        <nav className="flex-1 overflow-y-auto py-4">
          <ul className="space-y-1 px-3">
            {menuItems.map((item) => (
              <li key={item.title}>
                {item.hasSubmenu ? (
                  <div>
                    <button
                      onClick={() => toggleSubmenu(item.title)}
                      className="w-full flex items-center justify-between px-3 py-2 text-sm text-gray-700 rounded-lg hover:bg-gray-100 transition-colors"
                    >
                      <div className="flex items-center">
                        <item.icon className="w-5 h-5 mr-3" />
                        <span>{item.title}</span>
                      </div>
                      {expandedItems.includes(item.title) ? (
                        <ChevronDown className="w-4 h-4" />
                      ) : (
                        <ChevronRight className="w-4 h-4" />
                      )}
                    </button>
                    
                    {expandedItems.includes(item.title) && (
                      <ul className="mt-1 ml-8 space-y-1">
                        {item.submenu?.map((subItem) => (
                          <li key={subItem}>
                            <Link
                              to="#"
                              className="block px-3 py-1.5 text-sm text-gray-600 rounded-md hover:bg-gray-50 hover:text-gray-900 transition-colors"
                            >
                              {subItem}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                ) : (
                  <Link
                    to={item.url}
                    className={`flex items-center px-3 py-2 text-sm rounded-lg transition-colors ${
                      isActive(item.url)
                        ? 'bg-blue-50 text-blue-700 border-r-2 border-blue-700'
                        : 'text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    <item.icon className="w-5 h-5 mr-3" />
                    <span>{item.title}</span>
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </nav>

        {/* Bottom Menu */}
        <div className="border-t border-gray-200 p-3">
          <ul className="space-y-1">
            {bottomMenuItems.map((item) => (
              <li key={item.title}>
                <Link
                  to={item.url}
                  className="flex items-center px-3 py-2 text-sm text-gray-700 rounded-lg hover:bg-gray-100 transition-colors"
                >
                  <item.icon className="w-5 h-5 mr-3" />
                  <span>{item.title}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Sidebar;