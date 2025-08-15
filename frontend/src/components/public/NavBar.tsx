"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "../ui/navbar-menu";
import { cn } from "@/lib/utils";
import { LogOut, MenuIcon, Moon, Settings, Sun, User, X } from "lucide-react"; // Assuming you're using lucide-react for icons
import Image from "next/image"; // For logo image (optional)
import Link from "next/link";
import { ModeToggle } from "../ui/ModeToggle";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "../ui/dropdown-menu";
import { AnimatedThemeToggler } from "../magicui/animated-theme-toggler";

export default function Navbar() {
    return (
        <div className="relative w-full flex items-center justify-center">
            <NavbarUi className="top-2" />
        </div>
    );
}

function NavbarUi({ className }: { className?: string }) {
    const [active, setActive] = useState<string | null>(null);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    // Dropdown menu component for both desktop and mobile
    const ProfileDropdown = ({ isMobile = false }: { isMobile?: boolean }) => (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <button
                    className={cn(
                        "flex items-center",
                        isMobile ? "space-x-2" : "p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                    )}
                    aria-label="Open profile menu"
                >
                    <div className="w-8 h-8 rounded-full bg-gray-300 dark:bg-gray-600 flex items-center justify-center overflow-hidden">
                        <User className="w-6 h-6 text-gray-700 dark:text-gray-200" />
                        {/* Example with image */}
                        {/* 
            <Image
              src="/avatar.png"
              alt="User Avatar"
              width={32}
              height={32}
              className="object-cover"
            />
            */}
                    </div>
                    {isMobile && (
                        <span className="text-sm text-gray-700 dark:text-gray-200">Profile</span>
                    )}
                </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align={isMobile ? "start" : "end"} className="w-48">
                <DropdownMenuItem asChild>
                    <Link
                        href="/profile"
                        className="flex items-center space-x-2"
                        onClick={isMobile ? toggleMobileMenu : undefined}
                    >
                        <User className="w-4 h-4" />
                        <span>Profile</span>
                    </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                    <Link
                        href="/settings"
                        className="flex items-center space-x-2"
                        onClick={isMobile ? toggleMobileMenu : undefined}
                    >
                        <Settings className="w-4 h-4" />
                        <span>Settings</span>
                    </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                    <Link
                        href="/logout"
                        className="flex items-center space-x-2"
                        onClick={isMobile ? toggleMobileMenu : undefined}
                    >
                        <LogOut className="w-4 h-4" />
                        <span>Logout</span>
                    </Link>
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    );
    // Toggle mobile menu
    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };
    return (
        <>
            <div
                className={cn(
                    "fixed top-10 inset-x-0 max-w-full mx-auto z-50 flex items-center justify-between px-4",
                    className
                )}
            >

                {/* Logo on the left */}
                <div className="md:hidden flex items-center">
                    <Link href="/" className="text-xl font-bold text-gray-900 dark:text-white">
                        MyApp
                    </Link>
                    {/* Option for image-based logo */}
                    {/* 
        <Link href="/">
          <Image
            src="/logo.png"
            alt="Logo"
            width={40}
            height={40}
            className="object-contain"
          />
        </Link>
        */}
                </div>

                {/* Hamburger Menu Icon (visible on mobile) */}
                <button
                    className="md:hidden p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                    onClick={toggleMobileMenu}
                    aria-label="Toggle mobile menu"
                >
                    {isMobileMenuOpen ? (
                        <X className="w-6 h-6 text-gray-700 dark:text-gray-200" />
                    ) : (
                        <MenuIcon className="w-6 h-6 text-gray-700 dark:text-gray-200" />
                    )}
                </button>

                <Menu setActive={setActive}>
                    {/* Logo on the left */}
                    <div className="flex items-center w-full justify-start">
                        <Link href="/">
                            <Image
                                src="/logo.jpg"
                                alt="Logo"
                                width={80}
                                height={80}
                                className="object-contain rounded-full"
                            />
                        </Link>
                    </div>

                    {/* Center Menu */}
                    <div className="flex items-center gap-10 w-full justify-center">
                        <MenuItem setActive={setActive} active={active} item="Services">
                            <div className="flex flex-col space-y-4 text-sm">
                                <HoveredLink href="/web-dev">Web Development</HoveredLink>
                                <HoveredLink href="/interface-design">Interface Design</HoveredLink>
                                <HoveredLink href="/seo">Search Engine Optimization</HoveredLink>
                                <HoveredLink href="/branding">Branding</HoveredLink>
                            </div>
                        </MenuItem>
                        <MenuItem setActive={setActive} active={active} item="Products">
                            <div className="text-sm grid grid-cols-2 gap-10 p-4">
                                <ProductItem
                                    title="Algochurn"
                                    href="https://algochurn.com"
                                    src="https://assets.aceternity.com/demos/algochurn.webp"
                                    description="Prepare for tech interviews like never before."
                                />
                                <ProductItem
                                    title="Tailwind Master Kit"
                                    href="https://tailwindmasterkit.com"
                                    src="https://assets.aceternity.com/demos/tailwindmasterkit.webp"
                                    description="Production ready Tailwind css components for your next project"
                                />
                                <ProductItem
                                    title="Moonbeam"
                                    href="https://gomoonbeam.com"
                                    src="https://assets.aceternity.com/demos/Screenshot+2024-02-21+at+11.51.31%E2%80%AFPM.png"
                                    description="Never write from scratch again. Go from idea to blog in minutes."
                                />
                                <ProductItem
                                    title="Rogue"
                                    href="https://userogue.com"
                                    src="https://assets.aceternity.com/demos/Screenshot+2024-02-21+at+11.47.07%E2%80%AFPM.png"
                                    description="Respond to government RFPs, RFIs and RFQs 10x faster using AI"
                                />
                            </div>
                        </MenuItem>
                        <MenuItem setActive={setActive} active={active} item="Pricing">
                            <div className="flex flex-col space-y-4 text-sm">
                                <HoveredLink href="/hobby">Hobby</HoveredLink>
                                <HoveredLink href="/individual">Individual</HoveredLink>
                                <HoveredLink href="/team">Team</HoveredLink>
                                <HoveredLink href="/enterprise">Enterprise</HoveredLink>
                            </div>
                        </MenuItem>
                    </div>

                    {/* Right Side: Dark/Light Toggle, Sign In/Sign Up, Avatar */}
                    <div className="flex items-center space-x-4 w-full justify-end">
                        {/* Dark/Light Mode Toggle */}
                        {/* <ModeToggle /> */}
                        <AnimatedThemeToggler />

                        {/* Sign In / Sign Up Buttons */}
                        <Link
                            href="/signin"
                            className="text-sm font-medium text-gray-700 dark:text-gray-200 hover:underline"
                        >
                            Sign In
                        </Link>
                        <Link
                            href="/signup"
                            className="text-sm font-medium text-white bg-blue-600 px-4 py-2 rounded-md hover:bg-blue-700 transition-colors"
                        >
                            Sign Up
                        </Link>

                        {/* Avatar Profile */}
                        <ProfileDropdown />
                    </div>
                </Menu>


            </div>
            {/* Mobile Menu (slides in from right) */}
            <div
                className={cn(
                    "fixed inset-y-0 right-0 w-full overflow-scroll bg-white dark:bg-gray-800 shadow-lg transform transition-transform duration-300 ease-in-out z-50 md:hidden",
                    isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
                )}
            >
                <div className="flex flex-col h-full p-4">
                    {/* Close Button */}
                    <button
                        className="self-end p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700"
                        onClick={toggleMobileMenu}
                        aria-label="Close mobile menu"
                    >
                        <X className="w-6 h-6 text-gray-700 dark:text-gray-200" />
                    </button>

                    {/* Mobile Menu Items */}
                    <div className="flex flex-col space-y-4 mt-4">
                        <div className="flex flex-col space-y-2">
                            <span className="text-lg font-semibold text-gray-900 dark:text-white">Services</span>
                            <HoveredLink href="/web-dev" className="text-sm text-gray-700 dark:text-gray-200">
                                Web Development
                            </HoveredLink>
                            <HoveredLink href="/interface-design" className="text-sm text-gray-700 dark:text-gray-200">
                                Interface Design
                            </HoveredLink>
                            <HoveredLink href="/seo" className="text-sm text-gray-700 dark:text-gray-200">
                                Search Engine Optimization
                            </HoveredLink>
                            <HoveredLink href="/branding" className="text-sm text-gray-700 dark:text-gray-200">
                                Branding
                            </HoveredLink>
                        </div>

                        <div className="flex flex-col space-y-2">
                            <span className="text-lg font-semibold text-gray-900 dark:text-white">Products</span>
                            <div className="flex flex-col space-y-2">
                                <ProductItem
                                    title="Algochurn"
                                    href="https://algochurn.com"
                                    src="https://assets.aceternity.com/demos/algochurn.webp"
                                    description="Prepare for tech interviews like never before."
                                />
                                <ProductItem
                                    title="Tailwind Master Kit"
                                    href="https://tailwindmasterkit.com"
                                    src="https://assets.aceternity.com/demos/tailwindmasterkit.webp"
                                    description="Production ready Tailwind css components."
                                />
                                <ProductItem
                                    title="Moonbeam"
                                    href="https://gomoonbeam.com"
                                    src="https://assets.aceternity.com/demos/Screenshot+2024-02-21+at+11.51.31%E2%80%AFPM.png"
                                    description="Go from idea to blog in minutes."
                                />
                                <ProductItem
                                    title="Rogue"
                                    href="https://userogue.com"
                                    src="https://assets.aceternity.com/demos/Screenshot+2024-02-21+at+11.47.07%E2%80%AFPM.png"
                                    description="Respond to government RFPs 10x faster using AI."
                                />
                            </div>
                        </div>

                        <div className="flex flex-col space-y-2">
                            <span className="text-lg font-semibold text-gray-900 dark:text-white">Pricing</span>
                            <HoveredLink href="/hobby" className="text-sm text-gray-700 dark:text-gray-200">
                                Hobby
                            </HoveredLink>
                            <HoveredLink href="/individual" className="text-sm text-gray-700 dark:text-gray-200">
                                Individual
                            </HoveredLink>
                            <HoveredLink href="/team" className="text-sm text-gray-700 dark:text-gray-200">
                                Team
                            </HoveredLink>
                            <HoveredLink href="/enterprise" className="text-sm text-gray-700 dark:text-gray-200">
                                Enterprise
                            </HoveredLink>
                        </div>
                    </div>

                    {/* Mobile Right Side: Dark/Light Toggle, Sign In/Sign Up, Avatar */}
                    <div className="mt-auto flex flex-col space-y-4">
                        <ModeToggle />
                        <Link
                            href="/signin"
                            className="text-sm font-medium text-gray-700 dark:text-gray-200 hover:underline"
                            onClick={toggleMobileMenu}
                        >
                            Sign In
                        </Link>
                        <Link
                            href="/signup"
                            className="text-sm font-medium text-white bg-blue-600 px-4 py-2 rounded-md hover:bg-blue-700 transition-colors"
                            onClick={toggleMobileMenu}
                        >
                            Sign Up
                        </Link>
                        <ProfileDropdown />

                    </div>
                </div>
            </div>
        </>
    );
}