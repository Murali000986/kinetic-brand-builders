import { Link } from "@tanstack/react-router";

export function Logo({ className = "" }: { className?: string }) {
  return (
    <Link to="/" className={`flex items-center gap-2.5 ${className}`}>
      <span className="relative inline-flex h-10 w-10 items-center justify-center rounded-full overflow-hidden ring-2 ring-[#4F46E5]/20 shadow-md bg-white">
        <img
          src="/bask-logo.jpg"
          alt="BASK Logo"
          className="h-full w-full object-cover rounded-full"
        />
      </span>
      <span className="font-display text-[18px] font-700 tracking-tight text-ink">
        BASK<span className="text-brand">.</span>
      </span>
    </Link>
  );
}
