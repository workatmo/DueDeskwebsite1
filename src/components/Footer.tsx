import { Link } from "react-router-dom";
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

export function Footer() {
    return (
        <footer className="bg-primary text-white pt-16 pb-8">
            <div className="container px-4">
                {/* Top Section: Logo & Downloads */}
                <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-12">
                    {/* Brand / Logo */}
                    <div className="flex flex-col items-center md:items-start">
                        <h2 className="text-4xl font-extrabold tracking-tight text-white mb-0">Duedesk</h2>
                        <p className="text-sm font-handwriting italic text-white/90 -mt-1 ml-1" style={{ fontFamily: "cursive" }}>
                            Digital Incharge
                        </p>
                    </div>

                    {/* Download Buttons */}
                    <div className="flex flex-col md:flex-row items-center gap-6">
                        <span className="font-bold text-lg tracking-wide uppercase">Download Now</span>
                        <div className="flex gap-4">
                            {/* Google Play Button Placeholder */}
                            <a href="#" className="bg-black text-white px-4 py-2 rounded-lg flex items-center gap-3 hover:opacity-80 transition-opacity border border-white/20">
                                <img
                                    src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                                    alt="Get it on Google Play"
                                    className="h-8"
                                />
                            </a>
                            {/* App Store Button Placeholder */}
                            <a href="#" className="bg-black text-white px-4 py-2 rounded-lg flex items-center gap-3 hover:opacity-80 transition-opacity border border-white/20">
                                <img
                                    src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg"
                                    alt="Download on the App Store"
                                    className="h-8"
                                />
                            </a>
                        </div>
                    </div>
                </div>

                {/* Divider */}
                <div className="border-t border-white/30 my-8"></div>

                {/* Bottom Section: Copyright & Links */}
                <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-sm md:text-base">
                    <p className="text-white/90 text-center md:text-left">
                        Copyright © 2026 Duedesk. All rights reserved.
                    </p>

                    <div className="flex flex-wrap justify-center gap-8 items-center">
                        <Link to="#" className="text-white/90 hover:text-white hover:underline transition-colors">
                            Terms
                        </Link>
                        <Link to="#" className="text-white/90 hover:text-white hover:underline transition-colors">
                            Privacy Policy
                        </Link>
                        <Link to="#" className="text-white/90 hover:text-white hover:underline transition-colors">
                            Refund & Cancellation
                        </Link>

                        {/* Social Icons */}
                        <div className="flex gap-4 ml-4">
                            <a href="#" className="bg-white/10 p-2 rounded-full hover:bg-white/20 transition-colors text-white">
                                <Facebook size={18} />
                            </a>
                            <a href="#" className="bg-white/10 p-2 rounded-full hover:bg-white/20 transition-colors text-white">
                                <Instagram size={18} />
                            </a>
                            <a href="#" className="bg-white/10 p-2 rounded-full hover:bg-white/20 transition-colors text-white">
                                <Twitter size={18} />
                            </a>
                            <a href="#" className="bg-white/10 p-2 rounded-full hover:bg-white/20 transition-colors text-white">
                                <Linkedin size={18} />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
