import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { CTA } from "@/components/site/sections/CTA";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { BLOG_POSTS } from "@/data/blog";
import ReactMarkdown from "react-markdown";

export const Route = createFileRoute("/blog_/$slug")({
  component: BlogPostPage,
  loader: ({ params }) => {
    const post = BLOG_POSTS.find((p) => p.id === params.slug);
    if (!post) throw notFound();
    return { post };
  },
  head: ({ loaderData }) => ({
    meta: [
      { title: `${loaderData?.post.title ?? 'Blog'} — BASK` },
      { name: "description", content: loaderData?.post.excerpt ?? '' },
    ],
  }),
});

function BlogPostPage() {
  const { post } = Route.useLoaderData();

  return (
    <SiteLayout>
      <article className="pt-24 pb-16 md:pt-32 md:pb-24">
        {/* Header Section */}
        <div className="container-page max-w-3xl mb-12 md:mb-16">
          <Link 
            to="/blog" 
            className="inline-flex items-center gap-2 text-[13px] font-600 uppercase tracking-widest text-ink-muted hover:text-brand transition-colors mb-8"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Insights
          </Link>

          <div className="flex items-center gap-3 mb-6">
            <span className="text-[12px] font-700 uppercase tracking-widest text-brand bg-brand/10 px-3 py-1.5 rounded-full">
              {post.category}
            </span>
            <span className="text-[14px] text-ink-muted font-500">
              {post.date}
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-600 text-ink leading-[1.1] mb-6 text-balance">
            {post.title}
          </h1>

          <p className="text-xl md:text-2xl text-ink-soft leading-relaxed mb-10 text-balance font-300">
            {post.excerpt}
          </p>

          <div className="flex items-center gap-4 py-6 border-y border-line">
            <img 
              src={post.author.avatar} 
              alt={post.author.name}
              className="w-12 h-12 rounded-full object-cover shadow-sm" 
            />
            <div className="flex flex-col">
              <span className="text-[15px] font-600 text-ink">{post.author.name}</span>
              <span className="text-[14px] text-ink-muted">{post.author.role}</span>
            </div>
          </div>
        </div>

        {/* Hero Image */}
        <div className="container-page mb-16 md:mb-24">
          <div className="aspect-[21/9] md:aspect-[2.5/1] w-full overflow-hidden rounded-3xl shadow-soft">
            <img 
              src={post.image} 
              alt={post.title}
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Content Section */}
        <div className="container-page max-w-3xl">
          <div className="prose prose-lg md:prose-xl prose-headings:font-display prose-headings:font-600 prose-headings:text-ink prose-p:text-ink-soft prose-p:leading-relaxed prose-a:text-brand hover:prose-a:text-brand-dark max-w-none">
            <ReactMarkdown>{post.content}</ReactMarkdown>
          </div>
        </div>
      </article>

      {/* Recommended Reading */}
      <section className="bg-surface-muted py-24">
        <div className="container-page">
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-3xl font-display font-400 text-ink">Keep Reading</h2>
            <Link to="/blog" className="hidden md:inline-flex items-center gap-2 text-[13px] font-600 uppercase tracking-widest text-ink hover:text-brand transition-colors">
              View All Articles <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {BLOG_POSTS.filter(p => p.id !== post.id).slice(0, 2).map((recommended) => (
              <Link 
                key={recommended.id}
                to="/blog/$slug" 
                params={{ slug: recommended.id }}
                className="group cursor-pointer block bg-white rounded-2xl overflow-hidden shadow-soft transition-all hover:shadow-lift"
              >
                <div className="relative aspect-[16/9] overflow-hidden">
                  <img
                    src={recommended.image}
                    alt={recommended.title}
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="p-8">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-[12px] font-700 uppercase tracking-widest text-brand">
                      {recommended.category}
                    </span>
                  </div>
                  <h3 className="text-xl font-display font-600 text-ink mb-3 leading-tight group-hover:text-brand transition-colors">
                    {recommended.title}
                  </h3>
                  <p className="text-[15px] text-ink-soft leading-relaxed line-clamp-2">
                    {recommended.excerpt}
                  </p>
                </div>
              </Link>
            ))}
          </div>
          <div className="mt-12 text-center md:hidden">
            <Link to="/blog" className="inline-flex items-center gap-2 text-[13px] font-600 uppercase tracking-widest text-ink hover:text-brand transition-colors">
              View All Articles <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <CTA />
    </SiteLayout>
  );
}
