import { Link, useLocation, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { useState } from "react";

export function Header() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();

    const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
        e.preventDefault();

        const element = document.getElementById(id);

        if (location.pathname === '/') {
            // Already on home page, just scroll
            if (element) {
                const headerOffset = 100; // Account for fixed header
                const elementPosition = element.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: "smooth"
                });
            }
        } else {
            // Not on home page, navigate then scroll
            navigate('/');
            // Small timeout to allow navigation to complete
            setTimeout(() => {
                const element = document.getElementById(id);
                if (element) {
                    const headerOffset = 100;
                    const elementPosition = element.getBoundingClientRect().top;
                    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                    window.scrollTo({
                        top: offsetPosition,
                        behavior: "smooth"
                    });
                }
            }, 100);
        }
        setIsMobileMenuOpen(false);
    };

    return (
        <div className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4">
            <header className="bg-white rounded-full shadow-2xl w-full max-w-7xl px-6 md:px-10 h-20 flex items-center justify-between transition-all duration-300">
                {/* Logo */}
                <div className="flex-shrink-0 flex items-center">
                    <Link to="/" className="text-3xl font-extrabold font-heading text-primary tracking-tight uppercase">
                        Dudesk
                    </Link>
                </div>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center space-x-8">
                    <a
                        href="/#pricing"
                        onClick={(e) => scrollToSection(e, 'pricing')}
                        className="text-base font-semibold text-gray-700 hover:text-primary transition-colors"
                    >
                        Pricing
                    </a>
                    <Link to="/about" className="text-base font-semibold text-gray-700 hover:text-primary transition-colors">
                        About
                    </Link>
                    <Link to="/contact" className="text-base font-semibold text-gray-700 hover:text-primary transition-colors">
                        Contact Us
                    </Link>
                </nav>

                {/* Desktop Buttons */}
                <div className="hidden md:flex items-center space-x-4">
                    <Button asChild variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white font-bold rounded-full px-6 py-5 text-sm transition-all duration-300">
                        <a href="https://dash.theduedesk.com/register?merchant=1" target="_blank" rel="noopener noreferrer">
                            Merchant SignUp
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
                            <Link to="/" className="text-2xl font-extrabold font-heading text-primary uppercase" onClick={() => setIsMobileMenuOpen(false)}>
                                Dudesk
                            </Link>
                            <nav className="flex flex-col gap-4 text-center">
                                <a
                                    href="/#pricing"
                                    onClick={(e) => scrollToSection(e, 'pricing')}
                                    className="text-lg font-semibold text-gray-800 hover:text-primary"
                                >
                                    Pricing
                                </a>
                                <Link
                                    to="/about"
                                    className="text-lg font-semibold text-gray-800 hover:text-primary"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    About
                                </Link>
                                <Link
                                    to="/contact"
                                    className="text-lg font-semibold text-gray-800 hover:text-primary"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    Contact Us
                                </Link>
                            </nav>
                            <div className="flex flex-col gap-3 mt-2 w-full max-w-xs">
                                <Button asChild variant="outline" className="w-full border-primary text-primary font-bold rounded-full">
                                    <a href="https://dash.theduedesk.com/register?merchant=1" target="_blank" rel="noopener noreferrer">
                                        Merchant SignUp
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
