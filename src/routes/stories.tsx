import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { PageHeader } from "@/components/site/PageHeader";
import { CustomerStories } from "@/components/site/sections/CustomerStories";
import { CTA } from "@/components/site/sections/CTA";

export const Route = createFileRoute("/stories")({
  component: StoriesPage,
  head: () => ({
    meta: [
      { title: "Customer Stories — BASK | AI, Web Dev, Ecommerce & Video Case Studies" },
      { name: "description", content: "Real results from real clients. Explore BASK's case studies across AI agents, web development, ecommerce, video production and software." },
      { name: "keywords", content: "BASK case studies, BASK customer stories, web development case study, ecommerce case study, AI agent case study, video production case study, digital agency results" },
    ],
  }),
});

function StoriesPage() {
  return (
    <SiteLayout>
      <PageHeader
        eyebrow="Customer Stories"
        title="How we partner with visionary brands."
        subtitle="Read our case studies to see how we help clients accelerate digital transformation and scale their operations."
      />
      
      <div className="-mt-16">
        <CustomerStories />
      </div>

      <CTA />
    </SiteLayout>
  );
}
