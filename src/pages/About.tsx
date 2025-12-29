import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function About() {
    return (
        <div className="container py-24 space-y-20 max-w-4xl mx-auto px-6">
            {/* Hero Heading */}
            <div className="text-center space-y-6">
                <h1 className="text-4xl font-extrabold tracking-tight sm:text-6xl font-heading text-gray-900">
                    We Are <span className="text-primary">Duedesk</span>
                </h1>
                <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
                    A merchant-facing SaaS platform for study hall fee and student management.
                </p>
            </div>

            {/* Introduction */}
            <div className="space-y-6 text-gray-700 leading-8 text-lg">
                <p>
                    Duedesk was created to solve a very real problem faced by study hall owners — managing student joinings, monthly fee collections, renewals, and vacating records efficiently. In many study halls, these operations are still handled manually through registers, spreadsheets, or informal follow-ups, leading to missed payments, errors, and unnecessary administrative stress.
                </p>
                <p>
                    Duedesk is a software-as-a-service (SaaS) platform built exclusively to support study hall owners and operators in digitizing and streamlining these operational processes. Duedesk does not operate as a marketplace and does not enable students to search, discover, compare, or book study halls.
                </p>
            </div>

            {/* Merchant Use Section */}
            <div className="bg-gray-50 p-8 rounded-3xl border border-gray-100 space-y-4">
                <h3 className="text-2xl font-bold text-gray-900">Strictly for Merchant Use</h3>
                <p className="text-gray-600 leading-relaxed">
                    The platform is designed strictly for merchant use. Duedesk provides tools that help study hall owners manage students after a student has independently decided to join a particular study hall. Duedesk does not influence admissions, pricing, seat allocation, or student decisions, and does not act as an intermediary or broker between students and study hall owners.
                </p>
            </div>

            {/* Onboarding Process */}
            <div className="space-y-6 text-gray-700 leading-8 text-lg">
                <p>
                    When a study hall partners with Duedesk, it is onboarded as a merchant and provided with a unique Joining QR code. This QR code is used only for onboarding students who physically visit the study hall and choose to join. Merchants may also manually add students into the system. Duedesk does not provide public listings or open access for student discovery.
                </p>
                <p>
                    Once students are onboarded, Duedesk functions as an operational management system that helps merchants track fee payments, renewal cycles, outstanding dues, occupancy, and vacating status. As part of its service offering, Duedesk may assist merchants with reminders and follow-ups for monthly fee renewals, while the underlying commercial relationship remains directly between the merchant and the student.
                </p>
            </div>

            {/* Payment Framework */}
            <div className="space-y-4">
                <h2 className="text-3xl font-bold font-heading text-gray-900">Payment and Settlement Framework</h2>
                <div className="prose prose-lg text-gray-700">
                    <p>
                        Payments made by students are processed through authorized third-party payment gateways. Funds collected from students are settled 100% to the respective merchant’s registered bank account as per the applicable settlement cycle. Duedesk does not deduct any commission, margin, or percentage from the study hall fee collected from students.
                    </p>
                    <p>
                        Duedesk operates on a subscription-based revenue model. All revenues earned by Duedesk arise solely from subscription fees paid by merchants for access to the software and related services. Subscription fees are independent of student payments, transaction value, or volume.
                    </p>
                </div>
            </div>

            {/* Legal & Compliance */}
            <div className="bg-blue-50/50 p-8 rounded-3xl border border-blue-100 space-y-4">
                <h2 className="text-3xl font-bold font-heading text-gray-900">Legal & Compliance Positioning</h2>
                <p className="text-gray-700 leading-relaxed">
                    Duedesk acts strictly as a technology service provider. It does not function as a marketplace, booking platform, broker, agent, or commission-based intermediary. All services availed by students are provided directly by the respective study hall owners, who remain solely responsible for service delivery, pricing, statutory compliance, and tax obligations.
                </p>
                <p className="text-gray-700 leading-relaxed">
                    Duedesk does not retain any portion of the consideration payable to merchants, does not participate in revenue sharing, and does not assume ownership of student fees beyond temporary settlement handling as permitted by payment gateway frameworks.
                </p>
            </div>

            {/* Values & Promise */}
            <div className="grid md:grid-cols-2 gap-12 pt-8">
                <div className="space-y-6">
                    <h3 className="text-2xl font-bold text-gray-900">What We Stand For</h3>
                    <ul className="space-y-4">
                        {[
                            { title: "Merchant-first approach", desc: "Built specifically for study hall operations" },
                            { title: "Simplicity", desc: "Easy onboarding and intuitive workflows" },
                            { title: "Transparency", desc: "Clear settlements with no hidden deductions" },
                            { title: "Efficiency", desc: "Reduced manual work and better operational control" }
                        ].map((item, i) => (
                            <li key={i} className="flex gap-3">
                                <div className="h-6 w-6 rounded-full bg-primary/20 flex items-center justify-center shrink-0 mt-1">
                                    <div className="h-2 w-2 rounded-full bg-primary" />
                                </div>
                                <div>
                                    <span className="font-bold text-gray-900">{item.title}</span>
                                    <span className="text-gray-600 block"> — {item.desc}</span>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="bg-gray-900 text-white p-8 rounded-3xl flex flex-col justify-center space-y-6 text-center md:text-left">
                    <h3 className="text-2xl font-bold text-emerald-400">Our Promise</h3>
                    <div className="space-y-2 text-xl font-medium opacity-90">
                        <p>No spreadsheets.</p>
                        <p>No payment confusion.</p>
                        <p>No operational chaos.</p>
                    </div>
                    <p className="text-lg text-gray-300 pt-4 border-t border-gray-700">
                        Just a simple, reliable system to manage your study hall better.
                    </p>
                </div>
            </div>

            {/* Footer Quote */}
            <div className="text-center pt-12 pb-8">
                <p className="text-sm text-gray-500 italic max-w-2xl mx-auto">
                    "Duedesk is a merchant-facing SaaS platform for study hall fee and student management and does not operate as a marketplace or commission-based intermediary."
                </p>
            </div>
        </div>
    );
}
