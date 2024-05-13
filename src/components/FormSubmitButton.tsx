"use client";

import { useFormStatus } from "react-dom";
import { Button } from "./ui/button";
import { Loader2 } from "lucide-react";

export default function FormSubmitButton(Props: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  const {pending} = useFormStatus();
  return (
    <Button {...Props} type="submit" disabled={Props.disabled || pending}>
      <span className="flex items-center justify-center gap-1">
        {pending && <Loader2 size={16} className="animate-spin" />}
        {Props.children}
      </span>
    </Button>
  )
}