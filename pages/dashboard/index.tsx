import React, { useState } from "react";
import SidebarNav, { SidebarNavItem } from "@/components/sidebar-nav";
import challenges from "./challenges";
import community from "./community";
import rewards from "./rewards";

interface DashboardProps {
  children: React.ReactNode;
}

const index = ({ children }: DashboardProps) => {
  const [activeLink, setActiveLink] = useState<string>("home");

  const handleLinkClick = (link: string) => {
    setActiveLink(link);
  };

  return (
    <div className="bg-gray-100 h-screen">
      <div className="flex flex-row">
        <SidebarNav>
          <SidebarNavItem href="/dashboard" onClick={handleLinkClick}>
            Home
          </SidebarNavItem>
          <SidebarNavItem
            href="/dashboard/challenges"
            onClick={handleLinkClick}
          >
            Challenges
          </SidebarNavItem>
          <SidebarNavItem href="/dashboard/community" onClick={handleLinkClick}>
            Community
          </SidebarNavItem>
          <SidebarNavItem href="/dashboard/rewards" onClick={handleLinkClick}>
            Rewards
          </SidebarNavItem>
        </SidebarNav>
        <div className="flex-1">
          {/* Your dashboard content here */}
          {activeLink === "home" && (
            <div className="p-4">
              <div className="bg-white rounded-lg shadow-lg p-4">
                <h1 className="text-xl font-bold">Home Dashboard</h1>
              </div>
            </div>
          )}
          {activeLink === "challenges" && (
            <div className="p-4">
              <div className="bg-white rounded-lg shadow-lg p-4">
                <h1 className="text-xl font-bold">Challenges Dashboard</h1>
              </div>
            </div>
          )}
          {activeLink === "community" && (
            <div className="p-4">
              <div className="bg-white rounded-lg shadow-lg p-4">
                <h1 className="text-xl font-bold">Community Dashboard</h1>
              </div>
            </div>
          )}
          {activeLink === "rewards" && (
            <div className="p-4">
              <div className="bg-white rounded-lg shadow-lg p-4">
                <h1 className="text-xl font-bold">Rewards Dashboard</h1>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default index;
