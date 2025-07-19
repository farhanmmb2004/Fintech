import React, { useState } from 'react';
import Sidebar from './Sidebar';
import Header from './Header';
import DashboardHeader from './DashboardHeader';
import Footer from './Footer';
const Layout = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Sidebar isOpen={sidebarOpen} onToggle={toggleSidebar} />
      
      {/* Main content wrapper with proper margin for sidebar */}
      <div className="transition-all duration-300 ease-in-out lg:ml-64">
        <Header onMenuToggle={toggleSidebar} />
         <DashboardHeader />

        
        <main className="min-h-screen overflow-auto">
          {children}
        </main>
        <Footer />
      </div>

      {/* Mobile overlay backdrop */}
      {sidebarOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={toggleSidebar}
        />
      )}
    </div>
  );
};

export default Layout;