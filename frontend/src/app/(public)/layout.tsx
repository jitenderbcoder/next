import Footer from "@/components/public/Footer";
import Navbar from "@/components/public/NavBar";
import React from "react";


export default function PublicLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer          />
        </div>
    );
}
