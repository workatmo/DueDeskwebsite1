import { useState, FormEvent } from "react";
import { Loader2, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

interface EnquiryFormProps {
    variant?: "page" | "modal";
    onSuccess?: () => void;
}

export function EnquiryForm({ variant = "page", onSuccess }: EnquiryFormProps) {
    const [isLoading, setIsLoading] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [error, setError] = useState<string | null>(null);

    async function handleSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setIsLoading(true);
        setError(null);

        const formData = new FormData(e.currentTarget);
        const data = {
            name: formData.get("name"),
            phone: formData.get("phone"),
            institution_name: formData.get("institution_name"),
            message: formData.get("message"),
        };

        try {
            const response = await fetch("https://dash.theduedesk.com/api/v1/demo-enquiry", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json",
                },
                body: JSON.stringify(data),
            });

            const result = await response.json();

            if (!response.ok) {
                throw new Error(result.message || "Something went wrong");
            }

            setIsSuccess(true);
            if (onSuccess) {
                setTimeout(onSuccess, 3000); // Auto close or notify parent
            }
        } catch (err: any) {
            setError(err.message || "Failed to submit enquiry");
        } finally {
            setIsLoading(false);
        }
    }

    if (isSuccess) {
        return (
            <div className={`flex flex-col items-center justify-center py-12 text-center space-y-4 bg-green-50/50 rounded-3xl border border-green-100 p-8 ${variant === 'modal' ? 'h-full' : ''}`}>
                <div className="rounded-full bg-green-100 p-4">
                    <CheckCircle2 className="h-12 w-12 text-green-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Thank You!</h3>
                <p className="text-gray-600 max-w-xs mx-auto">
                    We have received your enquiry. Our team will contact you shortly.
                </p>

            </div>
        );
    }

    const containerClasses = variant === "page"
        ? "bg-white rounded-3xl p-6 md:p-8 shadow-xl border border-gray-100"
        : "p-1"; // Minimal styling for modal

    return (
        <div className={containerClasses}>
            <div className="mb-8">
                <h2 className="text-2xl md:text-3xl font-black font-heading text-gray-900 mb-2">
                    Request a Demo
                </h2>
                <p className="text-gray-600">
                    Fill in your details and we'll schedule a personalized demo for you.
                </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
                <div className="space-y-2">
                    <Label htmlFor="name" className="text-xs uppercase font-bold text-gray-500 tracking-wider">Your Name <span className="text-red-500">*</span></Label>
                    <Input
                        id="name"
                        name="name"
                        required
                        placeholder="Enter your full name"
                        className="h-12 rounded-xl border-gray-200 focus:border-primary focus:ring-primary/20 bg-gray-50/50"
                    />
                </div>

                <div className="space-y-2">
                    <Label htmlFor="phone" className="text-xs uppercase font-bold text-gray-500 tracking-wider">Phone Number <span className="text-red-500">*</span></Label>
                    <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        required
                        placeholder="Enter your mobile number"
                        className="h-12 rounded-xl border-gray-200 focus:border-primary focus:ring-primary/20 bg-gray-50/50"
                    />
                </div>

                <div className="space-y-2">
                    <Label htmlFor="institution_name" className="text-xs uppercase font-bold text-gray-500 tracking-wider">Institution Name <span className="text-red-500">*</span></Label>
                    <Input
                        id="institution_name"
                        name="institution_name"
                        required
                        placeholder="Study Hall / Library Name"
                        className="h-12 rounded-xl border-gray-200 focus:border-primary focus:ring-primary/20 bg-gray-50/50"
                    />
                </div>

                <div className="space-y-2">
                    <Label htmlFor="message" className="text-xs uppercase font-bold text-gray-500 tracking-wider">Message</Label>
                    <Textarea
                        id="message"
                        name="message"
                        rows={3}
                        placeholder="Any specific requirements?"
                        className="w-full rounded-xl border-gray-200 p-3 text-sm focus:border-primary focus:ring-4 focus:ring-primary/20 bg-gray-50/50 resize-none outline-none transition-all"
                    />
                </div>

                {error && (
                    <div className="p-3 rounded-lg bg-red-50 text-red-600 text-sm font-medium">
                        {error}
                    </div>
                )}

                <Button
                    type="submit"
                    disabled={isLoading}
                    className="w-full h-12 text-lg font-bold uppercase tracking-wide bg-primary hover:bg-primary/90 text-white rounded-xl shadow-lg transition-transform active:scale-[0.98]"
                >
                    {isLoading ? (
                        <>
                            <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                            Submitting...
                        </>
                    ) : (
                        "Submit Enquiry"
                    )}
                </Button>
            </form>
        </div>
    );
}
