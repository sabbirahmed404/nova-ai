"use client"

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import {
  LayoutDashboard,
  Users,
  Bot,
  Phone,
  CreditCard,
  MessageSquare,
  LogOut,
  PackageOpen,
  BarChart3,
  Settings,
  Mail,
  Menu,
  X
} from 'lucide-react';

type SidebarProps = {
  role: 'user' | 'admin';
};

export const Sidebar = ({ role }: SidebarProps) => {
  const router = useRouter();
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);
      if (mobile) {
        setIsCollapsed(true);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const userNavItems = [
    { name: 'Overview', icon: LayoutDashboard, link: '/dashboard' },
    { name: 'My Assistants', icon: Bot, link: '/dashboard/assistants' },
    { name: 'Call Analytics', icon: Phone, link: '/dashboard/call-analytics' },
    { name: 'Billing & Subscription', icon: CreditCard, link: '/dashboard/billing' },
    { name: 'Feedback', icon: MessageSquare, link: '/dashboard/feedback' },
  ];

  const adminNavItems = [
    { name: 'Overview', icon: LayoutDashboard, link: '/dashboard/admin' },
    { name: 'User Management', icon: Users, link: '/dashboard/admin/users' },
    { name: 'Subscription Control', icon: PackageOpen, link: '/dashboard/admin/subscriptions' },
    { name: 'Platform Analytics', icon: BarChart3, link: '/dashboard/admin/analytics' },
    { name: 'Assistant Configurations', icon: Settings, link: '/dashboard/admin/assistants' },
    { name: 'Feedback & Support', icon: Mail, link: '/dashboard/admin/feedback' },
  ];

  const navItems = role === 'admin' ? adminNavItems : userNavItems;

  const handleLogout = () => {
    // Handle logout logic here
    router.push('/');
  };

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <>
      {/* Mobile menu button */}
      <button
        onClick={toggleSidebar}
        className="md:hidden fixed top-4 left-4 z-50 p-2 rounded-md bg-nova-blue/10 text-white"
      >
        {isCollapsed ? <Menu size={24} /> : <X size={24} />}
      </button>

      <div
        className={`
          h-full glass border-r border-r-white/10
          ${isCollapsed ? 'w-[70px]' : 'w-64'}
          ${isMobile ? 'fixed z-40' : 'relative'}
          transition-all duration-300
        `}
      >
        <div className="p-4">
          <Link href="/" className="flex items-center mb-8">
            {!isCollapsed ? (
              <span className="text-2xl font-bold gradient-text">Nova<span className="text-white">AI</span></span>
            ) : (
              <span className="text-2xl font-bold gradient-text">N</span>
            )}
          </Link>

          <nav className="space-y-1 mt-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.link}
                className={`
                  flex items-center gap-3 p-3 rounded-md
                  hover:bg-nova-blue/10 text-gray-300 hover:text-white
                  transition-colors
                  ${isCollapsed ? 'justify-center' : ''}
                `}
              >
                <item.icon size={18} />
                {!isCollapsed && <span>{item.name}</span>}
              </Link>
            ))}
          </nav>
        </div>

        <div className={`absolute bottom-0 ${isCollapsed ? 'w-[70px]' : 'w-64'} p-4`}>
          <Button
            variant="outline"
            className={`
              flex items-center gap-2 border-nova-blue
              ${isCollapsed ? 'justify-center p-3' : 'w-full'}
            `}
            onClick={handleLogout}
          >
            <LogOut size={18} />
            {!isCollapsed && <span>Log Out</span>}
          </Button>
        </div>
      </div>

      {/* Overlay for mobile when sidebar is open */}
      {!isCollapsed && isMobile && (
        <div
          className="fixed inset-0 bg-black/50 z-30 md:hidden"
          onClick={toggleSidebar}
        />
      )}
    </>
  );
};