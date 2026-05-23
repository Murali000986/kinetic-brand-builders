import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { PageHeader } from "@/components/site/PageHeader";
import { CTA } from "@/components/site/sections/CTA";
import { ArrowRight } from "lucide-react";
import { BLOG_POSTS } from "@/data/blog";

export const Route = createFileRoute("/blog")({
  component: BlogPage,
  head: () => ({
    meta: [
      { title: "Blog — BASK | Digital Marketing, Web Dev & Design Insights" },
      { name: "description", content: "Read the latest insights, tips and case studies on web development, digital marketing, video production and software from the BASK team." },
      { name: "keywords", content: "BASK blog, digital marketing tips, web development blog, design insights, SEO tips, video production tips, software development blog" },
    ],
  }),
});

function BlogPage() {
  return (
    <SiteLayout>
      <PageHeader
        eyebrow="Insights"
        title="Perspectives on the future of digital."
        subtitle="Thoughts, research, and technical deep-dives from our engineering and design teams."
      />

      <section className="section-y">
        <div className="container-page">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-x-8 gap-y-16">
            {BLOG_POSTS.map((post) => (
              <Link 
                key={post.id}
                to="/blog/$slug" 
                params={{ slug: post.id }}
                className="group cursor-pointer block"
              >
                <article>
                  <div className="relative aspect-[16/9] overflow-hidden rounded-2xl mb-6 bg-surface-muted shadow-soft transition-shadow group-hover:shadow-lift">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div>
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-[12px] font-700 uppercase tracking-widest text-brand">
                        {post.category}
                      </span>
                      <span className="text-[13px] text-ink-muted">
                        {post.date}
                      </span>
                    </div>
                    <h3 className="text-2xl font-display font-600 text-ink mb-3 leading-tight group-hover:text-brand transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-[15px] text-ink-soft leading-relaxed mb-5">
                      {post.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between mt-6">
                      <div className="flex items-center gap-3">
                        <img 
                          src={post.author.avatar} 
                          alt={post.author.name}
                          className="w-8 h-8 rounded-full object-cover" 
                        />
                        <div className="flex flex-col">
                          <span className="text-[13px] font-600 text-ink">{post.author.name}</span>
                          <span className="text-[12px] text-ink-muted">{post.author.role}</span>
                        </div>
                      </div>
                      <span className="inline-flex items-center gap-2 text-[13px] font-600 text-ink uppercase tracking-wider group-hover:text-brand transition-colors">
                        Read Article <ArrowRight className="h-4 w-4" />
                      </span>
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </SiteLayout>
  );
}
