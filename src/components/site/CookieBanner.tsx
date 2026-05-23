import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "@tanstack/react-router";

export function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if user has already made a choice
    const consent = localStorage.getItem("bask-cookie-consent");
    if (!consent) {
      // Small delay so it doesn't pop up instantly on initial load
      const timer = setTimeout(() => setIsVisible(true), 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem("bask-cookie-consent", "accepted");
    setIsVisible(false);
  };

  const declineCookies = () => {
    localStorage.setItem("bask-cookie-consent", "declined");
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 150, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 150, opacity: 0 }}
          transition={{ type: "spring", damping: 25, stiffness: 200 }}
          className="fixed bottom-0 left-0 right-0 z-[100] p-4 md:p-6"
        >
          <div className="mx-auto max-w-4xl rounded-2xl border border-line bg-white p-5 shadow-lift md:flex md:items-center md:justify-between md:p-6">
            <div className="md:pr-8">
              <h3 className="font-display text-[16px] font-700 text-ink">We value your privacy</h3>
              <p className="mt-1 text-[13.5px] text-ink-muted">
                We use cookies to improve your experience, analyze site traffic, and understand where our audience comes from. By continuing to use our site, you agree to our use of cookies. Read our{" "}
                <Link to="/privacy" className="text-brand hover:underline" onClick={() => setIsVisible(false)}>
                  Privacy Policy
                </Link>
                .
              </p>
            </div>
            <div className="mt-5 flex flex-shrink-0 gap-3 md:mt-0">
              <button
                onClick={declineCookies}
                className="rounded-full border border-line bg-white px-5 py-2.5 text-[13.5px] font-500 text-ink-soft transition-colors hover:bg-surface-muted hover:text-ink"
              >
                Decline
              </button>
              <button
                onClick={acceptCookies}
                className="rounded-full bg-ink px-5 py-2.5 text-[13.5px] font-500 text-white shadow-soft transition-all hover:bg-ink/90 hover:shadow-lift"
              >
                Accept All
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
