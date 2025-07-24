import React, { useState, useEffect } from 'react';
import Sidebar from './Sidebar';
import Header from './Header';
import DashboardHeader from './DashboardHeader';
import Footer from './Footer';

const Layout = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  // Check if device is mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024); // lg breakpoint is 1024px
    };

    // Check on mount
    checkMobile();

    // Add event listener for window resize
    window.addEventListener('resize', checkMobile);

    // Cleanup
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <div className={`flex flex-col bg-gray-50 dark:bg-gray-900 transition-colors duration-300 ${
      isMobile ? 'min-h-screen w-full overflow-x-hidden' : 'min-h-[100dvh]'
    }`}>
      <Sidebar isOpen={sidebarOpen} onToggle={toggleSidebar} />
      
      {/* Content Wrapper - Different styles for mobile vs desktop */}
      <div className={`flex-1 flex flex-col transition-all duration-300 ease-in-out relative ${
        isMobile 
          ? 'w-full max-w-full ml-0' 
          : 'ml-0 lg:ml-64'
      }`}>
        <Header onMenuToggle={toggleSidebar} />
        <DashboardHeader />
        
        {/* Main Content */}
        <main className={`flex-1 overflow-auto bg-gray-50 dark:bg-gray-900  ${
          isMobile ? 'w-full max-w-full' : ''
        }`}>
          {isMobile ? (
            <div className="w-full max-w-full overflow-x-auto">
              {children}
            </div>
          ) : (
            children
          )}
        </main>
        
        <Footer />
      </div>
      
      {/* Mobile Overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/30 dark:bg-black/50 backdrop-blur-sm z-40 lg:hidden transition-colors duration-300"
          onClick={toggleSidebar}
        />
      )}
    </div>
  );
};

export default Layout;