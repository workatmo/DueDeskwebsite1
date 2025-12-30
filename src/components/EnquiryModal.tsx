import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { EnquiryForm } from "./EnquiryForm";
import { useState } from "react";

interface EnquiryModalProps {
    children: React.ReactNode;
}

export function EnquiryModal({ children }: EnquiryModalProps) {
    const [open, setOpen] = useState(false);

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
                {children}
            </DialogTrigger>
            <DialogContent className="max-w-lg p-0 bg-transparent border-none shadow-none text-left">
                <div className="bg-white rounded-3xl p-6 shadow-2xl">
                    <EnquiryForm
                        variant="modal"
                        onSuccess={() => setTimeout(() => setOpen(false), 3000)}
                    />
                </div>
            </DialogContent>
        </Dialog>
    );
}
