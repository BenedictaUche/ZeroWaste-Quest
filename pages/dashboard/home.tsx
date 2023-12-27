"use client";

import React, { PureComponent } from "react";
import Image from "next/image";
import { PiStarLight, PiBook, PiCalendar } from "react-icons/pi";
import { TfiCup } from "react-icons/tfi";
import Leaf from "@/public/leaf.svg";
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from "recharts";

const data = [
  {
    name: "Jan",
    total: Math.floor(Math.random() * 5000) + 1000,
  },
  {
    name: "Feb",
    total: Math.floor(Math.random() * 5000) + 1000,
  },
  {
    name: "Mar",
    total: Math.floor(Math.random() * 5000) + 1000,
  },
  {
    name: "Apr",
    total: Math.floor(Math.random() * 5000) + 1000,
  },
  {
    name: "May",
    total: Math.floor(Math.random() * 5000) + 1000,
  },
  {
    name: "Jun",
    total: Math.floor(Math.random() * 5000) + 1000,
  },
  {
    name: "Jul",
    total: Math.floor(Math.random() * 5000) + 1000,
  },
  {
    name: "Aug",
    total: Math.floor(Math.random() * 5000) + 1000,
  },
  {
    name: "Sep",
    total: Math.floor(Math.random() * 5000) + 1000,
  },
  {
    name: "Oct",
    total: Math.floor(Math.random() * 5000) + 1000,
  },
  {
    name: "Nov",
    total: Math.floor(Math.random() * 5000) + 1000,
  },
  {
    name: "Dec",
    total: Math.floor(Math.random() * 5000) + 1000,
  },
];

const Home = () => {
  return (
    <div className="flex flex-col gap-16">
      <div className="bg-white rounded-lg shadow-lg p-4">
        <div className="flex items-center gap-6">
          <div>
            <PiCalendar className="w-8 h-8 font-bold text-black/80" />
          </div>
          <div>
            <h4 className="text-lime-500 font-bold text-xl">
              Plastic-Free Week Challenge
            </h4>
            <p>
              <span className="font-bold">Days left: </span>6
            </p>
          </div>
        </div>
      </div>
      {/* The user's progress in the challenge will be displayed here */}
      <div className="bg-white rounded-lg shadow-lg p-4">
        <div className="flex items-center gap-6">
          <div>
            <TfiCup className="w-8 h-8 font-bold text-black/80" />
          </div>
          <div>
            <h4 className=" font-bold text-xl">Your progress</h4>
            <div className="flex items-center">
              <div className="bg-lime-600 w-[80px] h-[1.2em] pl-4 py-2 flex items-center rounded-tr-[8px] rounded-br-[8px] border-2 border-zinc-800 relative">
                <p className="text-white font-bold">100</p>
                <Image
                  src={Leaf}
                  alt="leaf"
                  className="absolute z-10 -left-8 -top-4 w-12 h-12"
                />
              </div>
            </div>
          </div>
        </div>
        <ResponsiveContainer width="100%" height={350}>
                <BarChart data={data}>
                  <XAxis
                    dataKey="name"
                    stroke="#888888"
                    fontSize={12}
                    tickLine={false}
                    axisLine={false}
                  />
                  <YAxis
                    stroke="#888888"
                    fontSize={12}
                    tickLine={false}
                    axisLine={false}
                    tickFormatter={(value) => `$${value}`}
                  />
                  <Bar
                    dataKey="total"
                    fill="currentColor"
                    radius={[4, 4, 0, 0]}
                    className="fill-primary"
                  />
                </BarChart>
              </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Home;
