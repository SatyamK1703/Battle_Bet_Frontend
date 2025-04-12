

"use client";

import { useState } from "react";
import { Home, Gamepad2, BarChart2, User } from "lucide-react";

export default function Navbar() {
  const [activeTab, setActiveTab] = useState("home");

  return (
    <div className="fixed bottom-0 left-0 w-full z-50 bg-cyan-400">
      <div className="max-w-md mx-auto">
        {/* Bottom navigation bar */}
        <div className="px-2 py-1">
          <div className="flex items-center justify-between bg-cyan-400 rounded-full p-1">
            <button
              onClick={() => setActiveTab("home")}
              className={`flex-1 flex items-center justify-center rounded-full py-2 px-4 ${
                activeTab === "home" 
                  ? "bg-white text-neutral-800" 
                  : "text-neutral-400 hover:bg-cyan-400 transition-colors"
              }`}
            >
              <div className="flex items-center gap-2">
                <Home size={20} />
                {activeTab === "home" && <span>Home</span>}
              </div>
            </button>

            <button
              onClick={() => setActiveTab("gamepad")}
              className={`flex-1 flex items-center justify-center rounded-full p-2 ${
                activeTab === "gamepad" 
                  ? "bg-white text-neutral-800" 
                  : "text-neutral-400 hover:bg-neutral-700 transition-colors"
              }`}
            >
              <div className="flex items-center gap-2">
                <Gamepad2 size={20} />
                {activeTab === "gamepad" && <span>Games</span>}
              </div>
            </button>

            <button
              onClick={() => setActiveTab("stats")}
              className={`flex-1 flex items-center justify-center rounded-full p-2 ${
                activeTab === "stats" 
                  ? "bg-white text-neutral-800" 
                  : "text-neutral-400 hover:bg-neutral-700 transition-colors"
              }`}
            >
              <div className="flex items-center gap-2">
                <BarChart2 size={20} />
                {activeTab === "stats" && <span>Stats</span>}
              </div>
            </button>

            <button
              onClick={() => setActiveTab("profile")}
              className={`flex-1 flex items-center justify-center rounded-full p-2 ${
                activeTab === "profile" 
                  ? "bg-white text-neutral-800" 
                  : "text-neutral-400 hover:bg-neutral-700 transition-colors"
              }`}
            >
              <div className="flex items-center gap-2">
                <User size={20} />
                {activeTab === "profile" && <span>Profile</span>}
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}