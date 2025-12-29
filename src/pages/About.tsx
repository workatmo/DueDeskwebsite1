export default function About() {
    return (
        <div className="container pt-44 pb-24 max-w-3xl mx-auto px-[15px]">
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl text-gray-900 mb-8 border-b pb-4">
                We are Duedesk
            </h1>

            <div className="space-y-8 text-gray-800 text-lg leading-relaxed text-justify font-medium">
                <section className="space-y-6">
                    <p>
                        Duedesk was created to solve a very real problem faced by study hall owners — <strong>managing student joinings, monthly fee collections, renewals, and vacating records efficiently</strong>. In many study halls, these operations are still handled manually through registers, spreadsheets, or informal follow-ups, leading to missed payments, errors, and unnecessary administrative stress.
                    </p>
                    <p>
                        Duedesk is a <strong>software-as-a-service (SaaS) platform</strong> built exclusively to support <strong>study hall owners and operators</strong> in digitizing and streamlining these operational processes. Duedesk does not operate as a marketplace and does not enable students to search, discover, compare, or book study halls.
                    </p>
                    <p>
                        The platform is designed strictly for <strong>merchant use</strong>. Duedesk provides tools that help study hall owners manage students <strong>after a student has independently decided to join a particular study hall</strong>. Duedesk does not influence admissions, pricing, seat allocation, or student decisions, and does not act as an intermediary or broker between students and study hall owners.
                    </p>
                    <p>
                        When a study hall partners with Duedesk, it is onboarded as a merchant and provided with a <strong>unique Joining QR code</strong>. This QR code is used only for onboarding students who physically visit the study hall and choose to join. Merchants may also manually add students into the system. Duedesk does not provide public listings or open access for student discovery.
                    </p>
                    <p>
                        Once students are onboarded, Duedesk functions as an <strong>operational management system</strong> that helps merchants track fee payments, renewal cycles, outstanding dues, occupancy, and vacating status. As part of its service offering, Duedesk may assist merchants with reminders and follow-ups for monthly fee renewals, while the underlying commercial relationship remains directly between the merchant and the student.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">Payment and Settlement Framework</h2>
                    <p>
                        Payments made by students are processed through authorized third-party payment gateways. Funds collected from students are settled <strong>100% to the respective merchant’s registered bank account</strong> as per the applicable settlement cycle. Duedesk does not deduct any commission, margin, or percentage from the study hall fee collected from students.
                    </p>
                    <p className="mt-4">
                        Duedesk operates on a <strong>subscription-based revenue model</strong>. All revenues earned by Duedesk arise solely from subscription fees paid by merchants for access to the software and related services. Subscription fees are independent of student payments, transaction value, or volume.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">Legal & Compliance Positioning</h2>
                    <p>
                        Duedesk acts strictly as a <strong>technology service provider</strong>. It does not function as a marketplace, booking platform, broker, agent, or commission-based intermediary. All services availed by students are provided directly by the respective study hall owners, who remain solely responsible for service delivery, pricing, statutory compliance, and tax obligations.
                    </p>
                    <p className="mt-4">
                        Duedesk does not retain any portion of the consideration payable to merchants, does not participate in revenue sharing, and does not assume ownership of student fees beyond temporary settlement handling as permitted by payment gateway frameworks.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">What We Stand For</h2>
                    <ul className="space-y-4">
                        <li><strong>Merchant-first approach</strong> — built specifically for study hall operations</li>
                        <li><strong>Simplicity</strong> — easy onboarding and intuitive workflows</li>
                        <li><strong>Transparency</strong> — clear settlements with no hidden deductions</li>
                        <li><strong>Efficiency</strong> — reduced manual work and better operational control</li>
                    </ul>
                </section>

                <section>
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Promise</h2>
                    <p>No spreadsheets. No payment confusion. No operational chaos.</p>
                    <p>Just a simple, reliable system to manage your study hall better.</p>
                </section>

                <section>
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">One-Line Compliance Summary</h2>
                    <p>
                        Duedesk is a merchant-facing SaaS platform for study hall fee and student management and does not operate as a marketplace or commission-based intermediary.
                    </p>
                </section>
            </div>
        </div>
    );
}
