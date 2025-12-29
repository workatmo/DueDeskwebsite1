import { Target, Rocket, ShieldCheck, Heart } from "lucide-react";

export default function About() {
    return (
        <div className="flex flex-col min-h-screen">
            {/* Hero Section */}
            <section className="bg-primary text-white pt-44 pb-32">
                <div className="container px-4 text-center">
                    <h1 className="text-4xl md:text-6xl font-black font-heading tracking-tight uppercase mb-6">
                        We are Duedesk
                    </h1>
                    <p className="text-xl md:text-2xl font-medium max-w-3xl mx-auto opacity-90 leading-relaxed">
                        Empowering study hall owners with digital solutions to streamline operations and enhance student experiences.
                    </p>
                </div>
            </section>

            {/* Company Story Section */}
            <section className="py-24 bg-white">
                <div className="container px-4 max-w-4xl mx-auto">
                    <div className="space-y-8 text-gray-800 text-lg leading-relaxed text-justify font-medium">
                        <h2 className="text-3xl font-black font-heading text-gray-900 mb-8 border-b-4 border-primary w-fit pb-2">
                            Our Story
                        </h2>
                        <div className="space-y-6">
                            <p>
                                Duedesk was created to solve a very real problem faced by study hall owners — <strong>managing student joinings, monthly fee collections, renewals, and vacating records efficiently</strong>. In many study halls, these operations are still handled manually through registers, spreadsheets, or informal follow-ups, leading to missed payments, errors, and unnecessary administrative stress.
                            </p>
                            <p>
                                Duedesk is a <strong>software-as-a-service (SaaS) platform</strong> built exclusively to support <strong>study hall owners and operators</strong> in digitizing and streamlining these operational processes. Duedesk does not operate as a marketplace and does not enable students to search, discover, compare, or book study halls.
                            </p>
                            <p>
                                The platform is designed strictly for <strong>merchant use</strong>. Duedesk provides tools that help study hall owners manage students <strong>after a student has independently decided to join a particular study hall</strong>. Duedesk does not influence admissions, pricing, seat allocation, or student decisions, and does not act as an intermediary or broker between students and study hall owners.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Mission & Vision Section */}
            <section className="py-24 bg-gray-50">
                <div className="container px-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
                        {/* Mission Card */}
                        <div className="bg-white p-10 rounded-3xl shadow-xl border border-gray-100 flex flex-col items-center text-center space-y-6 hover:-translate-y-2 transition-transform duration-300">
                            <div className="bg-blue-50 p-6 rounded-2xl">
                                <Target className="h-12 w-12 text-blue-600" />
                            </div>
                            <h3 className="text-3xl font-black font-heading text-gray-900 uppercase tracking-tight">Our Mission</h3>
                            <p className="text-gray-600 font-medium leading-relaxed">
                                To digitize study hall management across India, making operations seamless, transparent, and efficient for owners while providing a professional experience for students.
                            </p>
                        </div>

                        {/* Vision Card */}
                        <div className="bg-white p-10 rounded-3xl shadow-xl border border-gray-100 flex flex-col items-center text-center space-y-6 hover:-translate-y-2 transition-transform duration-300">
                            <div className="bg-purple-50 p-6 rounded-2xl">
                                <Rocket className="h-12 w-12 text-purple-600" />
                            </div>
                            <h3 className="text-3xl font-black font-heading text-gray-900 uppercase tracking-tight">Our Vision</h3>
                            <p className="text-gray-600 font-medium leading-relaxed">
                                To become the operating system for every professional study space, setting the standard for facility management and financial transparency in the education auxiliary sector.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* What We Stand For */}
            <section className="py-24 bg-white">
                <div className="container px-4 max-w-6xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-black font-heading text-gray-900 text-center uppercase mb-16">
                        What We Stand For
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            { icon: Heart, title: "Merchant-first", desc: "Built specifically for study hall operations and their unique needs." },
                            { icon: ShieldCheck, title: "Transparency", desc: "Clear settlements with no hidden deductions or commissions." },
                            { icon: Rocket, title: "Simplicity", desc: "Easy onboarding and intuitive workflows for daily use." },
                            { icon: Target, title: "Efficiency", desc: "Reduced manual work and better operational control for owners." }
                        ].map((item, i) => (
                            <div key={i} className="flex flex-col items-center text-center space-y-4">
                                <div className="bg-primary/10 p-4 rounded-full">
                                    <item.icon className="h-8 w-8 text-primary" />
                                </div>
                                <h4 className="text-xl font-bold text-gray-900">{item.title}</h4>
                                <p className="text-gray-600 text-sm font-medium">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Our Promise Section */}
            <section className="bg-gray-900 text-white py-20 snap-start">
                <div className="container px-4 text-center">
                    <h2 className="text-3xl md:text-5xl font-black font-heading uppercase mb-8">Our Promise</h2>
                    <p className="text-xl md:text-2xl font-bold text-primary mb-4 italic">"No spreadsheets. No payment confusion. No operational chaos."</p>
                    <p className="text-lg md:text-xl opacity-80 max-w-2xl mx-auto">
                        Just a simple, reliable system to manage your study hall better, every single day.
                    </p>
                </div>
            </section>
        </div>
    );
}
