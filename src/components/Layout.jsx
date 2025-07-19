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
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <Sidebar isOpen={sidebarOpen} onToggle={toggleSidebar} />
             
      {/* Main content wrapper with proper margin for sidebar */}
      <div className="transition-all duration-300 ease-in-out lg:ml-64">
        <Header onMenuToggle={toggleSidebar} />
        <DashboardHeader />
                 
        <main className="min-h-screen overflow-auto bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
          {children}
        </main>
        <Footer />
      </div>
       
      {/* Mobile overlay backdrop */}
      {sidebarOpen && (
        <div 
          className="fixed inset-0  bg-opacity-30 dark:bg-opacity-50 backdrop-blur-sm z-40 lg:hidden transition-colors duration-300"
          onClick={toggleSidebar}
        />
      )}
    </div>
  );
};

export default Layout;