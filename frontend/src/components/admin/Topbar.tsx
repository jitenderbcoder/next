import React from "react";
import { Bell, User } from "lucide-react";

export default function Topbar() {
    return (
        <header className="flex items-center justify-between px-6 py-3 bg-white shadow">
            {/* Left: Page Title */}
            <h1 className="text-lg font-semibold">Dashboard</h1>

            {/* Right: Icons + Profile */}
            <div className="flex items-center gap-4">
                {/* Notifications */}
                <button className="relative p-2 hover:bg-gray-100 rounded-full">
                    <Bell className="w-5 h-5 text-gray-600" />
                    <span className="absolute top-1 right-1 inline-flex h-2 w-2 rounded-full bg-red-500"></span>
                </button>

                {/* User profile */}
                <div className="flex items-center gap-2 cursor-pointer">
                    <User className="w-5 h-5 text-gray-600" />
                    <span className="text-sm font-medium">Admin</span>
                </div>
            </div>
        </header>
    );
}
