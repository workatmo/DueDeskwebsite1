export default function Contact() {
    return (
        <div className="container pt-44 pb-24 max-w-3xl mx-auto px-6">
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl text-gray-900 mb-8 border-b pb-4 uppercase">
                Contact Us
            </h1>

            <div className="space-y-8 text-gray-800 text-lg leading-relaxed text-left font-medium">
                <section>
                    <p>
                        If you have any questions, concerns, or need assistance related to the <strong>DueDesk</strong> platform, please feel free to get in touch with us using the information below:
                    </p>
                </section>

                <section className="space-y-4">
                    <div>
                        <p className="text-xl font-bold text-gray-900">Operational Address:</p>
                        <p>Above HDFC Bank, Gandhinagar, Hyderabad, Telangana, India</p>
                    </div>

                    <div>
                        <p className="text-xl font-bold text-gray-900 inline">Telephone: </p>
                        <p className="inline">+91 8985847945</p>
                    </div>

                    <div>
                        <p className="text-xl font-bold text-gray-900 inline">Email: </p>
                        <p className="inline text-primary">support@theduedesk.com</p>
                    </div>
                </section>

                <section className="pt-8 border-t italic text-gray-600">
                    <p>
                        We’re here to help you with any queries regarding your payments, account access, or platform-related assistance. Our team will get back to you at the earliest possible time.
                    </p>
                </section>
            </div>
        </div>
    );
}
