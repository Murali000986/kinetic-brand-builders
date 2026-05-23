import { useEffect, useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { CTA } from "@/components/site/sections/CTA";
import { STORIES } from "@/data/stories";
import { ArrowLeft, CheckCircle2, Share2, MessageSquareQuote } from "lucide-react";

export const Route = createFileRoute("/stories_/$slug")({
  component: StoryDetailPage,
  loader: ({ params: { slug } }) => {
    const story = STORIES.find((s) => s.id === slug);
    if (!story) throw new Error("Story not found");
    return { story };
  },
  head: ({ loaderData }) => ({
    meta: [
      { title: `${loaderData?.story?.title || "Story"} — BASK` },
      { name: "description", content: loaderData?.story?.description || "" },
    ],
  }),
});

function StoryDetailPage() {
  const { story } = Route.useLoaderData();
  const [activeSection, setActiveSection] = useState("overview");

  // Intersection Observer for highlighting active sidebar link
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-20% 0px -60% 0px" }
    );

    const sections = document.querySelectorAll("section[id]");
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const y = el.getBoundingClientRect().top + window.scrollY - 100;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  const navLinks = [
    { id: "overview", label: "Overview" },
    { id: "challenge", label: "Challenge" },
    { id: "solution", label: "Solution" },
    { id: "benefits", label: "Benefits" },
  ];

  return (
    <SiteLayout>
      {/* Hero Section */}
      <section className="relative pt-[100px] pb-24 md:pt-[140px] md:pb-32 bg-ink">
        <div className="absolute inset-0 overflow-hidden">
          <img 
            src={story.image} 
            alt={story.title}
            className="w-full h-full object-cover opacity-25"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/80 to-transparent" />
        </div>

        <div className="container-page relative z-10 text-white">
          <Link to="/stories" className="inline-flex items-center gap-2 text-[13px] font-500 text-white/70 hover:text-white transition-colors mb-10">
            <ArrowLeft className="h-4 w-4" /> Back to all stories
          </Link>
          
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8 border-b border-white/10 pb-8">
            <p className="text-[12px] font-600 uppercase tracking-[0.2em] text-white/80">
              {story.category.split(' / ')[0]} / CASE STUDY
            </p>
            <div className="flex items-center gap-4">
              <button className="flex items-center gap-2 text-[13px] font-500 text-white/80 hover:text-white transition-colors">
                <Share2 className="h-4 w-4" /> Share
              </button>
            </div>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-[64px] font-display font-600 leading-[1.1] max-w-4xl text-balance">
            {story.title}
          </h1>
          <p className="mt-6 text-lg md:text-xl text-white/80 max-w-2xl font-300">
            {story.description}
          </p>
        </div>
      </section>

      {/* Highlights Bar */}
      <div className="bg-surface-muted/60 border-y border-line py-12 md:py-16">
        <div className="container-page">
          <h2 className="text-[12px] font-700 uppercase tracking-[0.15em] text-ink-muted mb-8">Highlights</h2>
          <div className="grid md:grid-cols-3 gap-8 md:gap-12">
            {story.highlights.map((h, i) => (
              <div key={i} className="flex gap-4">
                <CheckCircle2 className="h-6 w-6 shrink-0 text-brand mt-0.5" />
                <p className="text-[16px] leading-relaxed text-ink-soft">{h}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <section className="py-16 md:py-24 bg-white relative">
        <div className="container-page flex flex-col md:flex-row gap-12 lg:gap-24 relative">
          
          {/* Left Sticky Sidebar */}
          <aside className="md:w-64 shrink-0">
            <div className="sticky top-32">
              <h3 className="text-[12px] font-700 uppercase tracking-[0.15em] text-ink mb-6">On this page</h3>
              <nav className="flex flex-col gap-1 border-l border-line">
                {navLinks.map((link) => (
                  <button
                    key={link.id}
                    onClick={() => scrollTo(link.id)}
                    className={`text-left pl-4 py-2.5 text-[14.5px] transition-all border-l-2 -ml-[1px] ${
                      activeSection === link.id
                        ? "border-brand text-brand font-600"
                        : "border-transparent text-ink-soft hover:text-ink hover:border-line"
                    }`}
                  >
                    {link.label}
                  </button>
                ))}
              </nav>
            </div>
          </aside>

          {/* Right Content */}
          <div className="flex-1 max-w-3xl prose prose-lg prose-slate prose-headings:font-display prose-headings:font-600 prose-headings:text-ink prose-p:text-ink-soft prose-p:leading-relaxed">
            
            <section id="overview" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl font-display font-600 text-ink mb-6">Overview</h2>
              {story.content.overview.split('\n\n').map((p, i) => (
                <p key={i} className="text-[17px] leading-relaxed text-ink-soft mb-6">{p}</p>
              ))}
            </section>

            <section id="challenge" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl font-display font-600 text-ink mb-6">Challenge</h2>
              {story.content.challenge.split('\n\n').map((p, i) => (
                <p key={i} className="text-[17px] leading-relaxed text-ink-soft mb-6">{p}</p>
              ))}
            </section>

            <section id="solution" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl font-display font-600 text-ink mb-6">Solution</h2>
              {story.content.solution.split('\n\n').map((p, i) => (
                <p key={i} className="text-[17px] leading-relaxed text-ink-soft mb-6">{p}</p>
              ))}

              {/* Quote Block */}
              {story.quote && (
                <blockquote className="my-12 relative rounded-3xl bg-surface-muted p-8 md:p-12 border border-line overflow-hidden">
                  <MessageSquareQuote className="absolute top-8 left-8 h-24 w-24 text-ink/5 -rotate-6" />
                  <div className="relative z-10">
                    <p className="text-xl md:text-2xl font-display font-500 text-ink leading-relaxed mb-8">
                      "{story.quote.text}"
                    </p>
                    <div className="flex items-center gap-4">
                      <div className="h-10 w-10 rounded-full bg-ink flex items-center justify-center text-white font-600 text-[14px]">
                        {story.quote.author.charAt(0)}
                      </div>
                      <div>
                        <p className="font-600 text-ink text-[15px]">{story.quote.author}</p>
                        <p className="text-[13px] text-ink-muted">{story.quote.role}</p>
                      </div>
                    </div>
                  </div>
                </blockquote>
              )}
            </section>

            <section id="benefits" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl font-display font-600 text-ink mb-6">Benefits</h2>
              {story.content.benefits.split('\n\n').map((p, i) => (
                <p key={i} className="text-[17px] leading-relaxed text-ink-soft mb-6">{p}</p>
              ))}
            </section>

          </div>
        </div>
      </section>

      <CTA />
    </SiteLayout>
  );
}
