import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { useState } from "react";
import headerLogo from "@/assets/images/Headerlogo.png";

export function Header() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const location = useLocation();



    return (
        <div className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4">
            <header className="bg-white rounded-full shadow-2xl w-full max-w-5xl px-6 md:px-10 h-20 flex items-center justify-between transition-all duration-300">
                {/* Logo */}
                <div className="flex-shrink-0 flex items-center">
                    <Link to="/" className="flex items-center">
                        <img src={headerLogo} alt="Duedesk" className="h-10 md:h-12 w-auto" />
                    </Link>
                </div>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center space-x-8">
                    <Link
                        to="/"
                        className={`text-base font-semibold transition-colors ${location.pathname === "/" ? "text-primary" : "text-gray-700 hover:text-primary"}`}
                    >
                        Home
                    </Link>
                    <Link
                        to="/pricing"
                        className={`text-base font-semibold transition-colors ${location.pathname === "/pricing" ? "text-primary" : "text-gray-700 hover:text-primary"}`}
                    >
                        Pricing
                    </Link>
                    <Link
                        to="/about"
                        className={`text-base font-semibold transition-colors ${location.pathname === "/about" ? "text-primary" : "text-gray-700 hover:text-primary"}`}
                    >
                        About
                    </Link>
                    <Link
                        to="/contact"
                        className={`text-base font-semibold transition-colors ${location.pathname === "/contact" ? "text-primary" : "text-gray-700 hover:text-primary"}`}
                    >
                        Contact Us
                    </Link>
                </nav>

                {/* Desktop Buttons */}
                <div className="hidden md:flex items-center space-x-4">
                    <Button asChild variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white font-bold rounded-full px-6 py-5 text-sm transition-all duration-300">
                        <a href="https://dash.theduedesk.com/register?merchant=1" target="_blank" rel="noopener noreferrer">
                            Get Started
                        </a>
                    </Button>
                    <Button asChild className="bg-primary hover:bg-primary/90 text-white font-bold rounded-full px-8 py-5 text-sm shadow-lg shadow-primary/30 transition-all duration-300">
                        <a href="https://dash.theduedesk.com/login" target="_blank" rel="noopener noreferrer">
                            Login
                        </a>
                    </Button>
                </div>

                {/* Mobile Menu Button */}
                <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
                    <SheetTrigger asChild>
                        <button className="md:hidden p-2 text-gray-600">
                            <Menu className="h-6 w-6" />
                        </button>
                    </SheetTrigger>
                    <SheetContent side="top" className="rounded-b-3xl">
                        <div className="flex flex-col gap-6 py-6 items-center">
                            <Link to="/" onClick={() => setIsMobileMenuOpen(false)}>
                                <img src={headerLogo} alt="Duedesk" className="h-10 w-auto" />
                            </Link>
                            <nav className="flex flex-col gap-4 text-center">
                                <Link
                                    to="/"
                                    className={`text-lg font-semibold transition-colors ${location.pathname === "/" ? "text-primary" : "text-gray-800 hover:text-primary"}`}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    Home
                                </Link>
                                <Link
                                    to="/pricing"
                                    className={`text-lg font-semibold transition-colors ${location.pathname === "/pricing" ? "text-primary" : "text-gray-800 hover:text-primary"}`}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    Pricing
                                </Link>
                                <Link
                                    to="/about"
                                    className={`text-lg font-semibold transition-colors ${location.pathname === "/about" ? "text-primary" : "text-gray-800 hover:text-primary"}`}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    About
                                </Link>
                                <Link
                                    to="/contact"
                                    className={`text-lg font-semibold transition-colors ${location.pathname === "/contact" ? "text-primary" : "text-gray-800 hover:text-primary"}`}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    Contact Us
                                </Link>
                            </nav>
                            <div className="flex flex-col gap-3 mt-2 w-full max-w-xs">
                                <Button asChild variant="outline" className="w-full border-primary text-primary font-bold rounded-full">
                                    <a href="https://dash.theduedesk.com/register?merchant=1" target="_blank" rel="noopener noreferrer">
                                        Get Started
                                    </a>
                                </Button>
                                <Button asChild className="w-full bg-primary text-white font-bold rounded-full">
                                    <a href="https://dash.theduedesk.com/login" target="_blank" rel="noopener noreferrer">
                                        Login
                                    </a>
                                </Button>
                            </div>
                        </div>
                    </SheetContent>
                </Sheet>
            </header>
        </div>
    );
}
