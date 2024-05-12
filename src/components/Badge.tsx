import { cn } from "@/lib/utils";

interface BadgeProps { 
  children: React.ReactNode;
}

export default function Badge({ children }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-block px-2 py-0.5 text-xs font-medium bg-primary-foreground rounded-full",
      )}
    >
      {children}
    </span>
  );
}