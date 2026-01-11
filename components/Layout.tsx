import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { NavTab } from '../types';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const location = useLocation();
  const navigate = useNavigate();
  
  // Routes that shouldn't show the bottom nav
  // Removed '/policy' so the navigation bar remains visible on the Policy page
  const hiddenNavRoutes = ['/details', '/calculator', '/settings', '/export', '/manual', '/import'];
  // Keep nav visible for main tabs, hide for others including policy/calculator for better focus
  const showNav = !hiddenNavRoutes.some(route => location.pathname.startsWith(route));

  // Determine active tab
  const currentTab: NavTab = 
    location.pathname === '/' ? 'home' :
    location.pathname === '/history' ? 'history' :
    location.pathname === '/library' ? 'library' : 
    location.pathname === '/policy' ? 'policy' : 'home';

  const handleNav = (tab: NavTab) => {
    if (tab === 'home') navigate('/');
    if (tab === 'history') navigate('/history');
    if (tab === 'library') navigate('/library');
    if (tab === 'policy') navigate('/policy'); 
  };

  return (
    <div className="flex flex-col min-h-screen bg-background-light w-full md:max-w-2xl lg:max-w-4xl mx-auto shadow-2xl relative overflow-hidden transition-all duration-300">
      <div className={`flex-1 overflow-y-auto overflow-x-hidden ${showNav ? 'pb-[84px]' : ''}`}>
        {children}
      </div>

      {showNav && (
        <nav className="fixed bottom-0 w-full md:max-w-2xl lg:max-w-4xl bg-white/90 backdrop-blur-md border-t border-gray-100 z-50 pb-safe-bottom">
          <div className="flex items-center justify-around h-[84px] pb-4">
            <button 
              onClick={() => handleNav('home')}
              className={`flex flex-col items-center justify-center w-full h-full gap-1 transition-colors ${currentTab === 'home' ? 'text-primary' : 'text-gray-400 hover:text-gray-600'}`}
            >
              <span className={`material-symbols-outlined text-[26px] ${currentTab === 'home' ? 'filled' : ''}`}>home</span>
              <span className="text-[10px] font-medium">首页</span>
            </button>

            <button 
              onClick={() => handleNav('history')}
              className={`flex flex-col items-center justify-center w-full h-full gap-1 transition-colors ${currentTab === 'history' ? 'text-primary' : 'text-gray-400 hover:text-gray-600'}`}
            >
              <span className={`material-symbols-outlined text-[26px] ${currentTab === 'history' ? 'filled' : ''}`}>history</span>
              <span className="text-[10px] font-medium">历史</span>
            </button>

            <button 
              onClick={() => handleNav('library')}
              className={`flex flex-col items-center justify-center w-full h-full gap-1 transition-colors ${currentTab === 'library' ? 'text-primary' : 'text-gray-400 hover:text-gray-600'}`}
            >
              <span className={`material-symbols-outlined text-[26px] ${currentTab === 'library' ? 'filled' : ''}`}>inventory_2</span>
              <span className="text-[10px] font-medium">产品库</span>
            </button>

            <button 
              onClick={() => handleNav('policy')}
              className={`flex flex-col items-center justify-center w-full h-full gap-1 transition-colors ${currentTab === 'policy' ? 'text-primary' : 'text-gray-400 hover:text-gray-600'}`}
            >
              <span className={`material-symbols-outlined text-[26px] ${currentTab === 'policy' ? 'filled' : ''}`}>article</span>
              <span className="text-[10px] font-medium">政策</span>
            </button>
          </div>
        </nav>
      )}
    </div>
  );
};

export default Layout;