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
    submenu: ["Aeps", "Aeps Deposit", "Money Transfer", "Express Transfer", "Move To Bank"]

  },
  { 
    title: "Travel", 
    icon: TrendingUp, 
    url: "#", 
    hasSubmenu: true,
    submenu: ["flight", "Hotel", "Bus", "Train", "Car Rental"]
  },
  { 
    title: "Bill Payment", 
    icon: CreditCard, 
    url: "#", 
    hasSubmenu: true,
    submenu: ["Prepaid", "Postpaid", "DTH", "Electricity", "Water", "Gas [LPG]", "Gaspipe", "Broadband", "Landline", "Cable TV", "Loan EMI", "FASTag", "Card Payment", "Insurance"]

  },
  { title: "Other Services", icon: FileText, url: "#",
     hasSubmenu: true,
    submenu: ["Wallet Request"]

   },
  { 
    title: "Payment Gateway", 
    icon: BarChart3, 
    url: "#", 
    hasSubmenu: true,
    submenu: ["Add Wallets", "PG Settlement"]
  },
  { 
    title: "Report", 
    icon: BarChart3, 
    url: "#", 
    hasSubmenu: true,
    submenu: ["Passbook", "All Transaction", "Pending", "Failed", "Earning"]

  },
  { 
    title: "Complaint", 
    icon: FileText, 
    url: "#", 
    hasSubmenu: true,
    submenu: ["Success", "Pending", "Failed"]
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
      {/* Sidebar */}
     <div className={`
  fixed left-0 top-0 h-screen bg-transparent border-r border-gray-200 z-50 transition-transform duration-300 ease-in-out
  ${isOpen ? 'translate-x-0' : '-translate-x-full'} 
  lg:translate-x-0 lg:fixed lg:z-auto
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
            className="lg:hidden p-1 rounded-md hover:bg-gray-100 transition-colors duration-200"
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
                      className="w-full flex items-center justify-between px-3 py-2 text-sm text-gray-700 rounded-lg hover:bg-gray-100 transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
                    >
                      <div className="flex items-center">
                        <item.icon className="w-5 h-5 mr-3 transition-transform duration-200" />
                        <span className='font-bold'>{item.title}</span>
                      </div>
                      <div className={`transition-transform duration-300 ease-in-out ${
                        expandedItems.includes(item.title) ? 'rotate-180' : 'rotate-0'
                      }`}>
                        <ChevronDown className="w-4 h-4" />
                      </div>
                    </button>
                    
                    {/* Animated Dropdown Menu */}
                    <div className={`overflow-hidden transition-all duration-300 ease-in-out ${
                      expandedItems.includes(item.title) 
                        ? 'max-h-96 opacity-100' 
                        : 'max-h-0 opacity-0'
                    }`}>
                      <ul className="mt-1 ml-8 space-y-1">
                        {item.submenu?.map((subItem, index) => (
                          <li 
                            key={subItem}
                            className={`transform transition-all duration-200 ease-out ${
                              expandedItems.includes(item.title)
                                ? 'translate-x-0 opacity-100'
                                : '-translate-x-2 opacity-0'
                            }`}
                            style={{
                              transitionDelay: expandedItems.includes(item.title) 
                                ? `${index * 50}ms` 
                                : '0ms'
                            }}
                          >
                            <Link
  to={`/${item.title.toLowerCase().replace(/\s+/g, '-')}/${subItem.toLowerCase().replace(/\s+/g, '-')}`}
  className="block px-3 py-1.5 text-sm text-gray-600 rounded-md hover:bg-gray-50 hover:text-gray-900 transition-all duration-200 hover:translate-x-1 hover:scale-105 active:scale-95 relative overflow-hidden group"
>
  <span className="relative z-10">{subItem}</span>
  <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-green-50 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
</Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ) : (
                  <Link
                    to={item.url}
                    className={`font-bold flex items-center px-3 py-2 text-sm rounded-lg transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] group relative overflow-hidden ${
                      isActive(item.url)
                        ? 'bg-blue-50 text-blue-700 border-r-2 border-blue-700'
                        : 'text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    <item.icon className="w-5 h-5 mr-3 transition-transform duration-200 group-hover:scale-110" />
                    <span className="relative z-10 ">{item.title}</span>
                    {!isActive(item.url) && (
                      <div className="font-bold absolute inset-0 bg-gradient-to-r from-blue-50 to-green-50 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                    )}
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
                  className="flex items-center px-3 py-2 text-sm text-gray-700 rounded-lg hover:bg-gray-100 transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] group relative overflow-hidden"
                >
                  <item.icon className="w-5 h-5 mr-3 transition-transform duration-200 group-hover:scale-110" />
                  <span className="relative z-10">{item.title}</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-green-50 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
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
