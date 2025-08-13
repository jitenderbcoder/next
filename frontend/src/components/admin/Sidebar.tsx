import React from "react";
import Link from "next/link";

export default function Sidebar() {
  return (
    <aside className="w-64 bg-white shadow-md h-screen p-4">
      <h2 className="text-lg font-bold mb-6">Admin Panel</h2>
      <nav className="flex flex-col gap-2">
        <Link href="/dashboard" className="hover:bg-gray-200 p-2 rounded">
          Dashboard
        </Link>
        <Link href="/users" className="hover:bg-gray-200 p-2 rounded">
          Users
        </Link>
        <Link href="/settings" className="hover:bg-gray-200 p-2 rounded">
          Settings
        </Link>
      </nav>
    </aside>
  );
}
