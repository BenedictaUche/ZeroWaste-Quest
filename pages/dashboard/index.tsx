"use client";

import React, { useState, useRef } from "react";
import SidebarNav, { SidebarNavItem } from "@/components/sidebar-nav";
import Challenges from "./challenges";
import Community from "@/components/community";
import Rewards from "@/components/rewards";
import Home from "@/components/dashboard/home";
import { PiHouse, PiUsers, PiGift } from "react-icons/pi";
import { TfiCup } from "react-icons/tfi";

interface DashboardProps {
  children: React.ReactNode;
}

const Index = ({  }: DashboardProps) => {
  const [activeLink, setActiveLink] = useState<string>("home");
  const contentRef = useRef<HTMLDivElement | null>(null);

  const handleLinkClick = (link: string) => {
    setActiveLink(link);
    scrollToContent();
    console.log(link);
  };

  const scrollToContent = () => {
    if (contentRef.current) {
      contentRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  }

  return (
    <div className="bg-gray-100 h-min-screen">
      <div className="flex flex-row">
        <SidebarNav>
          <SidebarNavItem href="//dashboard/home" onClick={handleLinkClick} className="flex items-center gap-1">
            <PiHouse className="w-6 h-6 text-gray-500" />
            Home
          </SidebarNavItem>
          <SidebarNavItem
            href="/dashboard/challenges"
            onClick={handleLinkClick}
            className="flex items-center gap-1"
          >
            <TfiCup className="w-6 h-6 text-gray-500" />
            Challenges
          </SidebarNavItem>
          <SidebarNavItem href="/dashboard/community" onClick={handleLinkClick} className="flex items-center gap-1">
            <PiUsers className="w-6 h-6 text-gray-500" />
            Community
          </SidebarNavItem>
          <SidebarNavItem href="/dashboard/rewards" onClick={handleLinkClick} className="flex items-center gap-1">
            <PiGift className="w-6 h-6 text-gray-500" />
            Rewards
          </SidebarNavItem>
        </SidebarNav>
        <div className="flex-1">
            <div className=" border-b-2 border-gray-800 py-6 pl-4">
                <h1 className="text-3xl font-bold">Dashboard</h1>
            </div>
          <div ref={contentRef} id="home" className="p-4">
            <div>
              <Home />
            </div>
          </div>
          <div ref={contentRef} id="challenges" className="p-4">
            <div className="bg-white rounded-lg shadow-lg p-4">
              <Challenges />
            </div>
          </div>
          <div ref={contentRef} id="community" className="p-4">
            <div className="bg-white rounded-lg shadow-lg p-4">
              <Community />
            </div>
          </div>
          <div ref={contentRef} id="rewards" className="p-4">
            <div className="bg-white rounded-lg shadow-lg p-4">
              <Rewards />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
