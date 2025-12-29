import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Check } from "lucide-react";

export default function Pricing() {
    return (
        <div className="container py-24 space-y-12 bg-white">
            <div className="text-center space-y-4 pt-10">
                <h1 className="text-4xl md:text-5xl font-black font-heading tracking-tight text-gray-900 uppercase">
                    Zero Setup Charges. Zero Commission. <br />Choose the Plan That Fits You.
                </h1>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                    Simple, transparent pricing for study hall owners of all sizes.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto px-8">
                {/* Starter Plan */}
                <PricingCard
                    title="Starter Plan"
                    price="₹1,999"
                    period="/ month"
                    description="This plan is best for entrepreneurs."
                    features={[
                        "QR Code Joinings",
                        "Automated Reminders",
                        "Payment Tracking",
                        "Basic Reports"
                    ]}
                    buttonText="Get Started"
                    buttonVariant="outline"
                />

                {/* Saver Plan */}
                <PricingCard
                    title="Saver Plan"
                    price="₹5,499"
                    period="/ 3 months"
                    description="Enjoy savings of up to ₹499 with this plan."
                    features={[
                        "Everything in Starter",
                        "3-Month Commitment",
                        "Priority Support",
                        "Advanced Analytics"
                    ]}
                    buttonText="Get Started"
                    buttonVariant="default"
                    popular
                />

                {/* Smart Plan */}
                <PricingCard
                    title="Smart Plan"
                    price="₹10,999"
                    period="/ 6 months"
                    description="Enjoy savings of up to ₹999 with this plan."
                    features={[
                        "Everything in Saver",
                        "6-Month Commitment",
                        "Custom Branding",
                        "Dedicated Account Manager"
                    ]}
                    buttonText="Get Started"
                    buttonVariant="outline"
                />

                {/* Max Value Plan */}
                <PricingCard
                    title="Max Value Plan"
                    price="₹21,999"
                    period="/ 12 months"
                    description="Pay for 11 Months, Enjoy 12 & Get 1 Month Free!"
                    features={[
                        "Everything in Smart",
                        "12-Month Commitment",
                        "Early Access to Features",
                        "VIP Training"
                    ]}
                    buttonText="Get Started"
                    buttonVariant="outline"
                />
            </div>
        </div>
    );
}

function PricingCard({ title, price, period, description, features, buttonText, buttonVariant, popular }: any) {
    return (
        <Card className={`flex flex-col relative ${popular ? 'border-primary shadow-2xl scale-110 z-10 shadow-primary/20' : 'border-gray-200 shadow-lg scale-90 opacity-90'} transition-all duration-300 hover:shadow-xl`}>
            {popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-black text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest">
                    Best Value
                </div>
            )}
            <CardHeader className="text-center pt-8">
                <CardTitle className="text-2xl font-bold text-gray-900">{title}</CardTitle>
                <div className="mt-4 flex flex-col items-center">
                    <span className="text-4xl font-black text-primary tracking-tight">{price}</span>
                    <span className="text-sm font-bold text-gray-500 mt-1 uppercase tracking-wider">{period}</span>
                </div>
                <CardDescription className="mt-4 text-gray-600 font-medium">{description}</CardDescription>
            </CardHeader>
            <CardContent className="flex-1 px-8 py-6">
                <ul className="space-y-4">
                    {features.map((feature: string) => (
                        <li key={feature} className="flex items-start">
                            <Check className="mr-3 h-5 w-5 text-primary shrink-0" />
                            <span className="text-gray-700 text-sm font-medium">{feature}</span>
                        </li>
                    ))}
                </ul>
            </CardContent>
            <CardFooter className="pb-8 px-8">
                <Button className="w-full font-bold py-6 rounded-xl transition-all duration-300" variant={buttonVariant}>
                    <a href="https://dash.theduedesk.com/register?merchant=1" target="_blank" rel="noopener noreferrer">
                        {buttonText}
                    </a>
                </Button>
            </CardFooter>
        </Card>
    )
}
