import { useRef } from "react";
import { motion } from "framer-motion";
import { Link } from "@tanstack/react-router";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { STORIES } from "@/data/stories";

export function CustomerStories() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = window.innerWidth < 768 ? window.innerWidth * 0.85 : 420;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth"
      });
    }
  };

  return (
    <section className="bg-white py-16 md:py-24 overflow-hidden">
      <div className="container-page mb-10 flex items-center justify-between">
        <h2 className="text-3xl font-400 text-ink">Customer Stories</h2>
        <div className="flex gap-3">
          <button 
            onClick={() => scroll("left")}
            aria-label="Previous stories"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-line bg-white transition-colors hover:bg-surface-muted hover:border-ink/30"
          >
            <ChevronLeft className="h-5 w-5 text-ink" />
          </button>
          <button 
            onClick={() => scroll("right")}
            aria-label="Next stories"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-line bg-white transition-colors hover:bg-surface-muted hover:border-ink/30"
          >
            <ChevronRight className="h-5 w-5 text-ink" />
          </button>
        </div>
      </div>

      <div className="relative pl-4 md:pl-0">
        <div className="md:container-page">
          {/* Scroll container */}
          <div 
            ref={scrollRef}
            className="flex w-full snap-x snap-mandatory gap-6 overflow-x-auto pb-8 pt-4 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
          >
            {STORIES.map((story, i) => (
              <motion.div
                key={story.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="shrink-0 snap-center md:snap-start"
              >
                <Link
                  to="/stories/$slug"
                  params={{ slug: story.id }}
                  className="group relative flex h-[480px] w-[85vw] md:w-[400px] overflow-hidden rounded-2xl bg-ink shadow-soft transition-shadow hover:shadow-lift"
                >
                  {/* Background Image */}
                  <img
                    src={story.image}
                    alt={story.title}
                    className="absolute inset-0 h-full w-full object-cover opacity-80 transition-transform duration-700 group-hover:scale-105"
                  />
                  
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/50 to-transparent" />

                  {/* Content */}
                  <div className="absolute inset-0 flex flex-col justify-end p-8 text-white">
                    <h3 className="mb-3 font-display text-[26px] font-600 leading-[1.15] text-balance">
                      {story.title.split(' partners')[0].split(' launches')[0].split(' scales')[0].split(' revolutionises')[0].split(' automates')[0]}
                    </h3>
                    <p className="mb-8 line-clamp-3 text-[15px] leading-relaxed text-white/80">
                      {story.description}
                    </p>

                    <div className="mt-auto flex items-center gap-2 text-[12px] font-700 uppercase tracking-[0.2em] transition-colors group-hover:text-brand-light">
                      READ MORE <ArrowRight className="h-4 w-4" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
            {/* Empty padding block for the end of scroll */}
            <div className="w-4 shrink-0 md:w-0" />
          </div>
        </div>
      </div>
    </section>
  );
}
