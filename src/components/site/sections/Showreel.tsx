import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, X, Volume2, VolumeX } from "lucide-react";

export function Showreel() {
  const [open, setOpen] = useState(false);
  const [muted, setMuted] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const previewRef = useRef<HTMLVideoElement>(null);

  // Auto-play silent preview on hover
  const handleMouseEnter = () => {
    if (previewRef.current) {
      previewRef.current.play().catch(() => {});
    }
  };
  const handleMouseLeave = () => {
    if (previewRef.current) {
      previewRef.current.pause();
      previewRef.current.currentTime = 0;
    }
  };

  // When modal opens, play full video
  useEffect(() => {
    if (open && videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.play().catch(() => {});
    }
    if (!open && videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  }, [open]);

  // Close on Escape key
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") setOpen(false); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <section className="section-y bg-surface-muted/60">
      <div className="container-page">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-[12px] font-600 uppercase tracking-[0.16em] text-brand">Showreel 2026</p>
          <h2 className="mt-3 font-display text-[34px] font-700 leading-[1.08] tracking-[-0.02em] text-ink sm:text-[44px] text-balance">
            A year of work, in ninety seconds.
          </h2>
          <p className="mt-4 text-[15.5px] leading-relaxed text-ink-muted">
            A short reel of brand films, product launches and campaigns we shipped last year.
          </p>
        </div>

        <motion.button
          onClick={() => setOpen(true)}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="group relative mx-auto mt-12 block w-full max-w-5xl overflow-hidden rounded-[28px] border border-line shadow-card"
          aria-label="Play showreel"
        >
          {/* Silent looping preview video */}
          <div className="relative aspect-[16/9] w-full overflow-hidden rounded-[28px] bg-[#0f172a]">
            <video
              ref={previewRef}
              src="/home.mp4"
              muted
              loop
              playsInline
              className="absolute inset-0 h-full w-full object-cover opacity-60 transition-opacity duration-500 group-hover:opacity-80"
            />

            {/* Gradient overlays */}
            <div className="absolute inset-0 bg-[radial-gradient(40%_40%_at_70%_60%,rgba(79,70,229,0.3),transparent_70%)]" />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_40%,rgba(0,0,0,0.6)_100%)]" />

            {/* Play button */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative">
                <span className="absolute inset-0 -m-3 animate-ping rounded-full bg-white/20" />
                <span className="relative inline-flex h-20 w-20 items-center justify-center rounded-full bg-white text-ink shadow-lift transition-transform duration-300 group-hover:scale-110">
                  <Play className="ml-1 h-7 w-7 fill-ink" />
                </span>
              </div>
            </div>

            {/* Bottom label */}
            <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between text-white">
              <div>
                <p className="text-[11px] font-500 uppercase tracking-[0.18em] text-white/70">Featured</p>
                <p className="mt-1 font-display text-[20px] font-700">BASK — Reel 2026</p>
              </div>
              <span className="rounded-full border border-white/20 bg-white/10 px-3 py-1 text-[12px] font-500 text-white backdrop-blur">
                Watch now
              </span>
            </div>
          </div>
        </motion.button>
      </div>

      {/* Full-screen video modal */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[60] flex items-center justify-center bg-ink/90 backdrop-blur-md p-4"
            onClick={() => setOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.96, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.98, opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-5xl overflow-hidden rounded-2xl border border-white/10 bg-black shadow-lift"
            >
              {/* Controls */}
              <div className="absolute right-3 top-3 z-10 flex items-center gap-2">
                <button
                  onClick={() => {
                    setMuted((m) => !m);
                    if (videoRef.current) videoRef.current.muted = !muted;
                  }}
                  aria-label={muted ? "Unmute" : "Mute"}
                  className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur transition-colors hover:bg-white/20"
                >
                  {muted ? <VolumeX className="h-4 w-4" /> : <Volume2 className="h-4 w-4" />}
                </button>
                <button
                  onClick={() => setOpen(false)}
                  aria-label="Close"
                  className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur transition-colors hover:bg-white/20"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              {/* Actual video player */}
              <video
                ref={videoRef}
                src="/home.mp4"
                controls
                playsInline
                muted={muted}
                className="aspect-video w-full"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
