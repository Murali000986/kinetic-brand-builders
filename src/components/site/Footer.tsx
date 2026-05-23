import { Link } from "@tanstack/react-router";
import { Mail, MapPin, Phone, Instagram, Linkedin, Youtube, ArrowUpRight } from "lucide-react";
import { Logo } from "./Logo";

const SERVICES = [
  "Digital Marketing",
  "Video Production",
  "Video Editing",
  "Web Development",
  "Software Development",
  "Ecommerce Websites",
];
const COMPANY = [
  { label: "About", to: "/about" },
  { label: "Stories", to: "/stories" },
  { label: "Services", to: "/services" },
  { label: "Blog", to: "/blog" },
  { label: "Contact", to: "/contact" },
  { label: "Privacy Policy", to: "/privacy" },
] as const;

export function Footer() {
  return (
    <footer className="border-t border-line bg-white">
      <div className="container-page py-16 md:py-20">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-4">
            <Logo />
            <p className="mt-5 max-w-sm text-[15px] leading-relaxed text-ink-muted">
              A full-service digital studio. We design and build
              websites, campaigns, videos and software that help modern brands grow.
            </p>
            <div className="mt-6 flex items-center gap-2">
              {[
                { Icon: Instagram, href: "https://www.instagram.com/mr_dine_tn29/" },
                { Icon: Linkedin, href: "https://www.linkedin.com/in/murali-n-8316b0390/" },
                { Icon: Youtube, href: "https://www.youtube.com/@dineshvlogs..2" },
              ].map(({ Icon, href }, i) => (
                <a
                  key={i}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Social link"
                  className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-line text-ink-soft transition-colors hover:bg-surface-muted hover:text-ink"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div className="md:col-span-3">
            <h4 className="text-[12px] font-600 uppercase tracking-[0.14em] text-ink-muted">Services</h4>
            <ul className="mt-4 space-y-2.5">
              {SERVICES.map((s) => (
                <li key={s}>
                  <Link to="/services" className="text-[14.5px] text-ink-soft hover:text-ink">
                    {s}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-2">
            <h4 className="text-[12px] font-600 uppercase tracking-[0.14em] text-ink-muted">Company</h4>
            <ul className="mt-4 space-y-2.5">
              {COMPANY.map((c) => (
                <li key={c.label}>
                  <Link to={c.to} className="text-[14.5px] text-ink-soft hover:text-ink">
                    {c.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-3">
            <h4 className="text-[12px] font-600 uppercase tracking-[0.14em] text-ink-muted">Contact</h4>
            <ul className="mt-4 space-y-3 text-[14.5px] text-ink-soft">

              <li className="flex items-start gap-2.5"><Mail className="mt-0.5 h-4 w-4 text-ink-muted" /> murali701081@gmail.com</li>
              <li className="flex items-start gap-2.5"><Phone className="mt-0.5 h-4 w-4 text-ink-muted" /> +91-9042846208</li>
            </ul>
            <Link
              to="/contact"
              className="mt-5 inline-flex items-center gap-1.5 rounded-full border border-line bg-white px-4 py-2 text-[13.5px] font-500 text-ink transition-colors hover:bg-surface-muted"
            >
              Book a call <ArrowUpRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-3 border-t border-line pt-6 md:flex-row md:items-center">
          <p className="text-[13px] text-ink-muted">
            © {new Date().getFullYear()} BASK. All rights reserved.
          </p>
          <p className="text-[13px] text-ink-muted">Working worldwide</p>
        </div>
      </div>
    </footer>
  );
}
