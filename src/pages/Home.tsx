import { Link } from "react-router-dom";
import { EnquiryModal } from "@/components/EnquiryModal";
import { Button } from "@/components/ui/button";
import { Clock, Rocket, Scissors, Smartphone } from "lucide-react";
import heroBg from "@/assets/images/homesection1.png";
import missedCallsImg from "@/assets/images/Frustrated&Missedanyjoiningcalls.png";
import remindersImg from "@/assets/images/Tiredofremainders&follow-Ups.png";
import paymentsImg from "@/assets/images/Troubleconfirmingpaymentsreceived.png";
import vacatingImg from "@/assets/images/Tiredofmessyvacatingandrefunddisputes.png";
import cashImg from "@/assets/images/Tiredofhandlingcasheverymonth.png";
import retentionImg from "@/assets/images/Findingithardtoattract&retainstudents.png";
import merchantBg from "@/assets/images/BeOurMerchant&Enjoy3MonthsFreeTrail..png";

export default function Home() {
    return (
        <div className="flex flex-col">
            {/* Hero Section */}
            <section className="relative h-screen min-h-[800px] w-full overflow-hidden snap-start snap-always">
                {/* Background Image */}
                <div className="absolute inset-0 z-0">
                    <img
                        src={heroBg}
                        alt="Office Background"
                        className="w-full h-full object-cover"
                    />
                    {/* Dark Overlay for Text Readability */}
                    <div className="absolute inset-0 bg-black/40"></div>
                </div>

                <div className="container relative z-10 h-full flex flex-col justify-center items-center text-center text-white px-8 pt-20">
                    <h1 className="text-5xl md:text-7xl lg:text-9xl font-black font-heading tracking-tighter leading-none uppercase drop-shadow-2xl mb-4">
                        Digital <span className="text-white">Incharge</span>
                    </h1>

                    <p className="text-xl md:text-2xl font-medium tracking-wide mb-8">
                        No More Chasing Behind Payments – We Do It For You
                    </p>

                    <p className="text-lg md:text-xl text-gray-100 max-w-4xl mx-auto leading-relaxed mb-12 font-medium">
                        Instant cabin bookings with real-time vacancies—no manual tracking, no missed payments. Our smart reminders and dedicated calling team ensure timely collections, while you manage cabins effortlessly. Enjoy smooth, transparent shifting, vacate, and refund processes. Streamline your StudyHall operations with DueDesk.
                    </p>



                    <div className="flex flex-col sm:flex-row justify-center gap-6 w-full max-w-2xl">
                        <EnquiryModal>
                            <Button className="relative z-50 bg-transparent border-2 border-white hover:bg-white hover:text-primary text-white font-bold text-xl px-12 py-7 rounded-full uppercase tracking-wider transition-all duration-300 min-w-[200px]">
                                Demo
                            </Button>
                        </EnquiryModal>
                        <Button asChild className="bg-primary hover:bg-primary/90 text-white font-bold text-xl px-12 py-7 rounded-full uppercase tracking-wider shadow-xl transition-all duration-300 min-w-[240px] flex items-center gap-3">
                            <a href="https://dash.theduedesk.com/register?merchant=1" target="_blank" rel="noopener noreferrer">
                                Join Now
                            </a>
                        </Button>
                    </div>

                    <div className="absolute bottom-8 left-0 right-0 text-center">
                        <p className="text-sm font-medium tracking-widest text-white/80 uppercase">
                            www.theduedesk.com
                        </p>
                    </div>
                </div>
            </section>

            {/* Why Choose Duedesk Section */}
            <section className="min-h-screen flex items-center justify-center py-20 bg-primary snap-start snap-always">
                <div className="container max-w-5xl px-8 text-center uppercase">
                    <h2 className="text-3xl md:text-5xl font-black font-heading text-white uppercase tracking-tight mb-16 drop-shadow-md">
                        Why To Choose Duedesk?
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-4">
                        {/* Card 1 */}
                        <div className="bg-white rounded-[2.5rem] p-8 -rotate-2 hover:rotate-0 transition-transform duration-300 shadow-xl flex flex-col items-center justify-between min-h-[320px]">
                            <div className="text-center space-y-2">
                                <h3 className="text-5xl font-black text-gray-900">75%</h3>
                                <p className="text-xl font-bold text-gray-800">Time Saved</p>
                            </div>

                            <div className="bg-blue-50 p-6 rounded-full">
                                <Clock className="h-12 w-12 text-blue-500" strokeWidth={1.5} />
                            </div>
                        </div>

                        {/* Card 2 */}
                        <div className="bg-white rounded-[2.5rem] p-8 rotate-1 hover:rotate-0 transition-transform duration-300 shadow-xl flex flex-col items-center justify-between min-h-[320px]">
                            <div className="text-center space-y-2">
                                <h3 className="text-5xl font-black text-gray-900">90%</h3>
                                <p className="text-xl font-bold text-gray-800">In-Time Payments</p>
                            </div>

                            <div className="bg-purple-50 p-6 rounded-full">
                                <Rocket className="h-12 w-12 text-purple-500" strokeWidth={1.5} />
                            </div>
                        </div>

                        {/* Card 3 */}
                        <div className="bg-white rounded-[2.5rem] p-8 rotate-3 hover:rotate-0 transition-transform duration-300 shadow-xl flex flex-col items-center justify-between min-h-[320px]">
                            <div className="text-center space-y-2">
                                <h3 className="text-5xl font-black text-gray-900">60%</h3>
                                <p className="text-xl font-bold text-gray-800">Cost Reduction</p>
                            </div>

                            <div className="bg-orange-50 p-6 rounded-full">
                                <Scissors className="h-12 w-12 text-orange-500" strokeWidth={1.5} />
                            </div>
                        </div>

                        {/* Card 4 */}
                        <div className="bg-white rounded-[2.5rem] p-8 -rotate-1 hover:rotate-0 transition-transform duration-300 shadow-xl flex flex-col items-center justify-between min-h-[320px]">
                            <div className="text-center space-y-2">
                                <h3 className="text-5xl font-black text-gray-900">10X</h3>
                                <p className="text-xl font-bold text-gray-800">Faster Fee Collection</p>
                            </div>

                            <div className="bg-primary/10 p-6 rounded-full">
                                <Smartphone className="h-12 w-12 text-primary" strokeWidth={1.5} />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Frustrated & Missed Calls Section */}
            <section className="min-h-screen flex items-center bg-white snap-start snap-always overflow-hidden relative">
                <div className="container max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-12 items-center relative z-10 px-8 py-6">
                    {/* Left: Text Content */}
                    <div className="space-y-8 max-w-3xl">
                        <h2 className="text-4xl md:text-6xl font-black font-heading text-gray-950 leading-[1.1] tracking-tight">
                            Frustrated & Missed any <br /><span className="text-primary">joining calls?</span>
                        </h2>
                        <p className="text-xl md:text-2xl text-gray-600 font-medium leading-relaxed">
                            With DueDesk, students can check seat availability and book cabins instantly through the QRcode—so you never lose a joining again.
                        </p>
                    </div>

                    {/* Right: Tilted Image & Floating Icons */}
                    <div className="relative flex justify-center items-center">
                        {/* Floating Decoration Icons - Removed */}

                        {/* Main Image */}
                        <div className="relative z-10 transform rotate-3 hover:rotate-0 transition-all duration-500 ease-out">
                            <div className="bg-transparent">
                                <img
                                    src={missedCallsImg}
                                    alt="Missed Calls Illustration"
                                    className="w-full max-w-3xl object-contain drop-shadow-2xl"
                                />
                            </div>
                        </div>
                    </div>
                </div>


            </section>

            {/* Tired of Remainders Section */}
            <section className="min-h-screen flex items-center bg-white snap-start snap-always relative overflow-hidden">
                <div className="container max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-12 items-center relative z-10 px-8 py-6">
                    {/* Left: Support Agent Image & Overlays */}
                    <div className="relative flex justify-center items-center order-2 md:order-1">
                        {/* Floating Icons - Removed */}

                        {/* Main Image */}
                        <div className="relative z-10">
                            <img
                                src={remindersImg}
                                alt="Reminders Illustration"
                                className="w-full max-w-3xl object-contain drop-shadow-2xl"
                            />
                        </div>
                    </div>

                    {/* Right: Text Content */}
                    <div className="space-y-8 max-w-3xl order-1 md:order-2">
                        <h2 className="text-4xl md:text-6xl font-black font-heading text-gray-950 leading-[1.1] tracking-tight">
                            Tired of remainders <br /> <span className="text-primary">& follow-ups?</span>
                        </h2>
                        <p className="text-xl md:text-2xl text-gray-600 font-medium leading-relaxed">
                            With DueDesk, automated remainders and our calling team ensure you get payments on time, no more chasing students every month.
                        </p>
                    </div>
                </div>
            </section>

            {/* Payments Section */}
            <section className="min-h-screen flex items-center bg-white snap-start snap-always relative overflow-hidden">
                <div className="container max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-12 items-center relative z-10 px-8 py-6">
                    {/* Left: Text Content */}
                    <div className="space-y-8 max-w-3xl">
                        <h2 className="text-4xl md:text-6xl font-black font-heading text-gray-950 leading-[1.1] tracking-tight">
                            Trouble confirming <br /><span className="text-primary">payments received?</span>
                        </h2>
                        <p className="text-xl md:text-2xl text-gray-600 font-medium leading-relaxed">
                            With DueDesk, every transaction is tracked in real-time with instant notifications & daily settlements — so you never waste time reconfirming payments.
                        </p>
                    </div>

                    {/* Right: Businessman Image & Overlays */}
                    <div className="relative flex justify-center items-center">
                        {/* Floating Icons - Removed */}

                        {/* Main Image */}
                        <div className="relative z-10">
                            <img
                                src={paymentsImg}
                                alt="Payments Illustration"
                                className="w-full max-w-3xl object-contain drop-shadow-2xl"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Vacating & Refunds Section */}
            <section className="min-h-screen flex items-center bg-white snap-start snap-always relative overflow-hidden">
                <div className="container max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-12 items-center relative z-10 px-8 py-6">
                    {/* Left: Student Image & Overlays */}
                    <div className="relative flex justify-center items-center order-2 md:order-1">
                        {/* Falling Money Icons - Removed */}

                        {/* Process Pills Overlay - Removed */}

                        {/* Main Image */}
                        <div className="relative z-10 w-full max-w-3xl">
                            <img
                                src={vacatingImg}
                                alt="Vacating Illustration"
                                className="w-full h-auto object-contain drop-shadow-2xl"
                            />
                        </div>
                    </div>

                    {/* Right: Text Content */}
                    <div className="space-y-8 max-w-3xl order-1 md:order-2">
                        <h2 className="text-4xl md:text-5xl font-black font-heading text-gray-950 leading-[1.1] tracking-tight">
                            Tired of messy vacating <br /><span className="text-primary">& refund disputes?</span>
                        </h2>
                        <p className="text-xl text-gray-600 font-medium leading-relaxed">
                            With DueDesk, vacating is transparent and tracked with instant updates. Late vacates auto-forfeit refunds, reducing disputes, while approved refunds reach the student’s UPI within 24 hours.
                        </p>
                    </div>
                </div>
            </section>

            {/* Cash Handling Section */}
            <section className="min-h-screen flex items-center bg-white snap-start snap-always relative overflow-hidden">
                <div className="container max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-12 items-center relative z-10 px-8 py-6">
                    {/* Left: Text Content */}
                    <div className="space-y-8 max-w-3xl order-1">
                        <h2 className="text-4xl md:text-5xl font-black font-heading text-gray-950 leading-[1.1] tracking-tight">
                            Still handling cash payments <br /><span className="text-primary">every month?</span>
                        </h2>
                        <p className="text-xl text-gray-600 font-medium leading-relaxed">
                            With DueDesk, go fully digital — secure payments, instant receipts, and guaranteed settlements to your bank within 24 hours. No more cash chaos!
                        </p>
                    </div>

                    {/* Right: Businessman Image & Overlays */}
                    <div className="relative flex justify-center items-center order-2">
                        {/* Falling Money Icons - Removed */}

                        {/* Main Image */}
                        <div className="relative z-10">
                            <img
                                src={cashImg}
                                alt="Cash Handling Illustration"
                                className="w-full max-w-3xl object-contain drop-shadow-2xl"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Retention Section (Coupons & Loyalty) */}
            <section className="min-h-screen flex items-center bg-white snap-start snap-always relative overflow-hidden">
                <div className="container max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-12 items-center relative z-10 px-8 py-6">
                    {/* Left: Custom Coupons Visuals */}
                    <div className="relative flex flex-col items-center justify-center space-y-8 order-2 md:order-1">

                        {/* Falling Money Decoration - Removed */}

                        {/* Coupon Image */}
                        <div className="relative w-full max-w-3xl z-10 hover:scale-105 transition-transform duration-500">
                            <img
                                src={retentionImg}
                                alt="Retention Strategies"
                                className="w-full h-auto object-contain drop-shadow-2xl"
                            />
                        </div>
                    </div>

                    {/* Right: Text Content */}
                    <div className="space-y-8 max-w-3xl order-1 md:order-2">
                        <h2 className="text-4xl md:text-5xl font-black font-heading text-gray-950 leading-[1.1] tracking-tight">
                            Finding it hard to attract & <br /><span className="text-primary">retain students?</span>
                        </h2>
                        <p className="text-xl text-gray-600 font-medium leading-relaxed">
                            DueDesk boosts loyalty with coupons, referral rewards, and limited-time offers that push students to pay on time.
                        </p>
                    </div>
                </div>
            </section>

            {/* Merchant CTA Section */}
            <section className="min-h-screen flex items-center relative overflow-hidden snap-start snap-always">
                {/* Background Image */}
                <div className="absolute inset-0 z-0">
                    <img
                        src={merchantBg}
                        alt="Merchant Background"
                        className="w-full h-full object-cover"
                    />
                    {/* Dark Overlay for Text Readability - Optional/Adjustable */}
                    <div className="absolute inset-0 bg-black/20"></div>
                </div>

                <div className="container relative z-10 px-8 py-6 flex flex-col items-start justify-center h-full leading-tight">
                    <div className="space-y-8 max-w-2xl text-white text-left">
                        <h2 className="text-4xl md:text-6xl font-black font-heading leading-tight drop-shadow-lg">
                            Be Our Merchant & <br />Enjoy 3 Months <br />Free Trial.
                        </h2>
                        <p className="text-lg md:text-2xl font-medium opacity-95 leading-relaxed drop-shadow-md">
                            Become a DueDesk merchant today and enjoy 3 months free! Streamline your cabin bookings, payments, and operations with our hassle-free platform. Start now and see the difference!
                        </p>
                        <div className="flex flex-wrap gap-6 pt-8">
                            <EnquiryModal>
                                <Button variant="outline" className="relative z-50 border-2 border-white text-white hover:bg-white hover:text-primary bg-transparent text-xl px-10 py-7 rounded-full font-bold uppercase tracking-wider transition-all backdrop-blur-sm">
                                    Demo
                                </Button>
                            </EnquiryModal>
                            <Button asChild className="bg-black text-white hover:bg-gray-900 border-2 border-transparent text-xl px-10 py-7 rounded-full font-bold uppercase tracking-wider shadow-xl transition-transform hover:scale-105">
                                <a href="https://dash.theduedesk.com/register?merchant=1" target="_blank" rel="noopener noreferrer">
                                    Join Now
                                </a>
                            </Button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Pricing Section - Green Background with White Cards */}
            <section id="pricing" className="min-h-screen flex items-center justify-center bg-primary snap-start snap-always py-20">
                <div className="container px-6">
                    {/* Heading */}
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-black font-heading text-white tracking-wide uppercase leading-tight drop-shadow-md">
                            Zero Setup Charges. Zero Commission. <br />Choose the Plan That Fits You.
                        </h2>
                    </div>

                    {/* Pricing Cards Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 max-w-5xl mx-auto">

                        {/* Starter Plan */}
                        <div className="bg-white rounded-2xl p-8 flex flex-col md:flex-row items-center justify-between shadow-xl hover:shadow-2xl transition-all duration-300 gap-6 scale-95 opacity-90 origin-right">
                            <div className="space-y-2 text-center md:text-left">
                                <h3 className="text-2xl font-bold text-gray-800">Starter Plan</h3>
                                <p className="text-sm text-gray-500 max-w-[200px] leading-relaxed">
                                    This plan is best for entrepreneurs.
                                </p>
                            </div>
                            <div className="text-center md:text-right">
                                <div className="text-4xl font-extrabold text-primary tracking-tight">₹1,999</div>
                                <div className="text-sm font-bold text-primary mt-1">/ month</div>
                            </div>
                        </div>

                        {/* Saver Plan */}
                        <div className="bg-white rounded-2xl p-8 flex flex-col md:flex-row items-center justify-between shadow-2xl hover:shadow-primary/20 transition-all duration-300 gap-6 border-2 border-primary relative scale-110 z-10 shadow-primary/20 origin-left">
                            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-black text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest shadow-lg">
                                Most Popular
                            </div>
                            <div className="space-y-2 text-center md:text-left">
                                <h3 className="text-2xl font-bold text-gray-800">Saver Plan</h3>
                                <p className="text-sm text-gray-500 max-w-[200px] leading-relaxed">
                                    Enjoy savings of up to ₹499 with this plan.
                                </p>
                            </div>
                            <div className="text-center md:text-right">
                                <div className="text-4xl font-extrabold text-primary tracking-tight">₹5,499</div>
                                <div className="text-sm font-bold text-primary mt-1">/ 3 months</div>
                            </div>
                        </div>

                        {/* Smart Plan */}
                        <div className="bg-white rounded-2xl p-8 flex flex-col md:flex-row items-center justify-between shadow-xl hover:shadow-2xl transition-all duration-300 gap-6 scale-95 opacity-90 origin-right">
                            <div className="space-y-2 text-center md:text-left">
                                <h3 className="text-2xl font-bold text-gray-800">Smart Plan</h3>
                                <p className="text-sm text-gray-500 max-w-[200px] leading-relaxed">
                                    Enjoy savings of up to ₹999 with this plan.
                                </p>
                            </div>
                            <div className="text-center md:text-right">
                                <div className="text-4xl font-extrabold text-primary tracking-tight">₹10,999</div>
                                <div className="text-sm font-bold text-primary mt-1">/ 6 months</div>
                            </div>
                        </div>

                        {/* Max Value Plan */}
                        <div className="bg-white rounded-2xl p-8 flex flex-col md:flex-row items-center justify-between shadow-xl hover:shadow-2xl transition-all duration-300 gap-6 scale-95 opacity-90 origin-left">
                            <div className="space-y-2 text-center md:text-left">
                                <h3 className="text-2xl font-bold text-gray-800">Max Value Plan</h3>
                                <p className="text-sm text-gray-500 max-w-[200px] leading-relaxed">
                                    Pay for 11 Months, Enjoy 12 & Get 1 Month Free!
                                </p>
                            </div>
                            <div className="text-center md:text-right">
                                <div className="text-4xl font-extrabold text-primary tracking-tight">₹21,999</div>
                                <div className="text-sm font-bold text-primary mt-1">/ 12 months</div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* Combined Stats & Testimonials Section */}
            <section className="min-h-screen flex flex-col snap-start snap-always">
                {/* Stats Header (Black Strip) */}
                <div className="bg-black text-white pt-32 pb-12">
                    <div className="container px-4">
                        <div className="flex flex-wrap justify-between items-center gap-8 md:gap-4 text-center md:text-left">
                            {/* Target 2026 Title Block */}
                            <div className="w-full md:w-auto flex flex-col items-center md:items-start leading-tight">
                                <span className="text-3xl md:text-4xl font-bold">Target</span>
                                <span className="text-3xl md:text-4xl font-bold text-white">2026</span>
                            </div>

                            {/* Stat 1 */}
                            <div className="w-[45%] md:w-auto space-y-1">
                                <div className="text-4xl md:text-5xl font-black">250+</div>
                                <div className="text-gray-400 font-medium text-sm md:text-base">Studyhalls</div>
                            </div>

                            {/* Stat 2 */}
                            <div className="w-[45%] md:w-auto space-y-1">
                                <div className="text-4xl md:text-5xl font-black">5,000</div>
                                <div className="text-gray-400 font-medium text-sm md:text-base">Cabins</div>
                            </div>

                            {/* Stat 3 */}
                            <div className="w-[45%] md:w-auto space-y-1">
                                <div className="text-4xl md:text-5xl font-black">30+</div>
                                <div className="text-gray-400 font-medium text-sm md:text-base">Cities</div>
                            </div>

                            {/* Stat 4 */}
                            <div className="w-[45%] md:w-auto space-y-1">
                                <div className="text-4xl md:text-5xl font-black">24/7</div>
                                <div className="text-gray-400 font-medium text-sm md:text-base">Customer Care</div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Testimonials Content (White Background) */}
                <div className="flex-grow flex items-center bg-white py-12">

                    <div className="container">
                        {/* Heading & Description */}
                        <div className="text-center max-w-3xl mx-auto mb-10 space-y-4">
                            <h2 className="text-3xl md:text-4xl font-black font-heading text-gray-900 leading-tight">
                                What Our Customers Says
                            </h2>
                            <p className="text-base text-gray-500 leading-relaxed">
                                See how DueDesk is transforming study hall management for owners like you.
                            </p>
                        </div>

                        {/* Testimonial Cards Row */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 relative items-stretch">
                            {/* Card 1 */}
                            <div className="bg-white p-6 rounded-2xl shadow-xl hover:-translate-y-2 transition-transform duration-300 border border-gray-100 flex flex-col justify-between">
                                <div>
                                    <div className="flex justify-between items-start mb-3">
                                        <div className="flex text-yellow-500 text-xs">
                                            {[...Array(5)].map((_, i) => <span key={i}>⭐</span>)}
                                        </div>
                                        <span className="text-gray-300 text-2xl leading-none font-serif">“</span>
                                    </div>
                                    <p className="text-lg font-bold text-gray-900 mb-2 leading-tight">
                                        “Duedesk made our fee collection and renewals much easier.”
                                    </p>
                                    <p className="text-sm text-gray-500 leading-relaxed">
                                        Managing student joinings and monthly payments is now well organized and transparent.
                                    </p>
                                </div>
                                <div className="mt-4 pt-4 border-t border-gray-100">
                                    <h4 className="font-bold text-gray-900 text-sm">— Ramesh Kumar</h4>
                                    <p className="text-xs text-gray-500">Ganesh Study Hall</p>
                                </div>
                            </div>

                            {/* Card 2 (Highlighted) */}
                            <div className="bg-white p-6 rounded-2xl shadow-2xl hover:-translate-y-2 transition-transform duration-300 border-2 border-primary/20 relative flex flex-col justify-between md:-mt-4 md:mb-4">
                                <div>
                                    <div className="absolute -top-3 left-6 bg-primary text-white px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wide">
                                        Top Rated
                                    </div>
                                    <div className="flex justify-between items-start mb-3">
                                        <div className="flex text-yellow-500 text-xs">
                                            {[...Array(5)].map((_, i) => <span key={i}>⭐</span>)}
                                        </div>
                                        <span className="text-primary text-2xl leading-none font-serif">“</span>
                                    </div>
                                    <p className="text-lg font-bold text-gray-900 mb-2 leading-tight">
                                        “Everything is in one place now.”
                                    </p>
                                    <p className="text-sm text-gray-600 leading-relaxed font-medium">
                                        From QR joinings to payment tracking and renewals, Duedesk reduced our manual work completely.
                                    </p>
                                </div>
                                <div className="mt-4 pt-4 border-t border-gray-100">
                                    <h4 className="font-bold text-gray-900 text-sm">— Suresh Reddy</h4>
                                    <p className="text-xs text-primary font-medium">Officer's Study Hall</p>
                                </div>
                            </div>

                            {/* Card 3 */}
                            <div className="bg-white p-6 rounded-2xl shadow-xl hover:-translate-y-2 transition-transform duration-300 border border-gray-100 flex flex-col justify-between">
                                <div>
                                    <div className="flex justify-between items-start mb-3">
                                        <div className="flex text-yellow-500 text-xs">
                                            {[...Array(5)].map((_, i) => <span key={i}>⭐</span>)}
                                        </div>
                                        <span className="text-gray-300 text-2xl leading-none font-serif">“</span>
                                    </div>
                                    <p className="text-lg font-bold text-gray-900 mb-2 leading-tight">
                                        “Built for real study hall operations.”
                                    </p>
                                    <p className="text-sm text-gray-500 leading-relaxed">
                                        Duedesk helped us manage students, dues, and vacating records without confusion.
                                    </p>
                                </div>
                                <div className="mt-4 pt-4 border-t border-gray-100">
                                    <h4 className="font-bold text-gray-900 text-sm">— Anita Sharma</h4>
                                    <p className="text-xs text-gray-500">SharmaJi Study Space</p>
                                </div>
                            </div>
                        </div>
                        {/* View More Button - Removed */}
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="min-h-[70vh] flex items-center bg-white snap-start snap-always py-20 border-t border-gray-100">
                <div className="container max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-16 items-start px-8">
                    {/* Left: Heading & Intro */}
                    <div className="space-y-6">
                        <h2 className="text-4xl md:text-5xl font-black font-heading text-black tracking-tight">
                            FAQs
                        </h2>
                        <p className="text-lg text-gray-600 leading-relaxed max-w-md">
                            Delve into our FAQ section to get quick answers to common questions about our services.
                        </p>
                    </div>

                    {/* Right: Accordion Questions */}
                    <div className="space-y-4">
                        {[
                            {
                                question: "What is Duedesk?",
                                answer: "Duedesk is a fee collection and management software designed specifically for study hall owners. It helps manage student onboarding, monthly fee tracking, renewals, occupancy, and operational records in one place."
                            },
                            {
                                question: "Can students discover or book study halls through Duedesk?",
                                answer: "No. Duedesk is not a marketplace. Students cannot browse, discover, or book study halls through the platform. Duedesk is used only by study hall owners to manage students after they decide to join."
                            },
                            {
                                question: "How do students join a study hall using Duedesk?",
                                answer: "Each study hall is provided with a unique joining QR code. Students who visit the study hall can scan the QR code to complete their joining and make payments. Merchants can also add students manually through the dashboard."
                            },
                            {
                                question: "How are payments settled to the study hall?",
                                answer: "Student payments are processed through secure, authorized payment gateways and 100% of the study hall fee is settled directly to the merchant’s registered bank account as per the settlement cycle. Duedesk does not deduct any commission."
                            },
                            {
                                question: "How does Duedesk earn revenue?",
                                answer: "Duedesk operates on a subscription-based model. Study hall owners pay a fixed subscription fee to use the platform. Duedesk does not earn from student payments or fee collections."
                            }
                        ].map((item, index) => (
                            <details key={index} className="group border-b border-gray-200 pb-4 cursor-pointer">
                                <summary className="flex justify-between items-center font-bold text-lg md:text-xl text-gray-900 list-none outline-none">
                                    <span>{item.question}</span>
                                    <span className="text-primary transform group-open:rotate-180 transition-transform duration-300">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-down"><path d="m6 9 6 6 6-6" /></svg>
                                    </span>
                                </summary>
                                <p className="mt-4 text-gray-600 leading-relaxed animate-in fade-in slide-in-from-top-2 duration-300">
                                    {item.answer}
                                </p>
                            </details>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
