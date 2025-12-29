import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Check } from "lucide-react";
import { Link } from "react-router-dom";

export default function Pricing() {
    return (
        <div className="container py-24 space-y-12">
            <div className="text-center space-y-4">
                <h1 className="text-4xl font-bold tracking-tight">Simple, transparent pricing</h1>
                <p className="text-xl text-muted-foreground">Choose the plan that's right for you.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {/* Starter Plan */}
                <PricingCard
                    title="Starter"
                    price="$0"
                    description="Perfect for individuals and hobby projects."
                    features={["Up to 3 projects", "Community support", "Basic analytics", "1GB storage"]}
                    buttonText="Get Started"
                    buttonVariant="outline"
                />

                {/* Pro Plan */}
                <PricingCard
                    title="Pro"
                    price="$29"
                    description="For growing teams and businesses."
                    features={["Unlimited projects", "Priority support", "Advanced analytics", "20GB storage", "Custom domain"]}
                    buttonText="Upgrade to Pro"
                    buttonVariant="default"
                    popular
                />

                {/* Enterprise Plan */}
                <PricingCard
                    title="Enterprise"
                    price="Custom"
                    description="For large organizations with specific needs."
                    features={["Unlimited everything", "Dedicated success manager", "SSO & Audit logs", "SLA", "On-premise deployment"]}
                    buttonText="Contact Sales"
                    buttonVariant="outline"
                />
            </div>
        </div>
    );
}

function PricingCard({ title, price, description, features, buttonText, buttonVariant, popular }: any) {
    return (
        <Card className={`flex flex-col ${popular ? 'border-primary shadow-lg scale-105' : ''}`}>
            <CardHeader>
                <CardTitle className="text-2xl">{title}</CardTitle>
                <div className="mt-4 flex items-baseline text-5xl font-extrabold tracking-tight">
                    {price}
                    {price !== "Custom" && <span className="text-xl font-normal text-muted-foreground ml-1">/mo</span>}
                </div>
                <CardDescription className="mt-2">{description}</CardDescription>
            </CardHeader>
            <CardContent className="flex-1">
                <ul className="space-y-4">
                    {features.map((feature: string) => (
                        <li key={feature} className="flex items-center">
                            <Check className="mr-2 h-4 w-4 text-primary" />
                            <span className="text-muted-foreground">{feature}</span>
                        </li>
                    ))}
                </ul>
            </CardContent>
            <CardFooter>
                <Button className="w-full" variant={buttonVariant} asChild={buttonText === "Contact Sales"}>
                    {buttonText === "Contact Sales" ? <Link to="/contact">{buttonText}</Link> : buttonText}
                </Button>
            </CardFooter>
        </Card>
    )
}
