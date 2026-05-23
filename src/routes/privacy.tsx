import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { PageHeader } from "@/components/site/PageHeader";

export const Route = createFileRoute("/privacy")({
  component: PrivacyPage,
  head: () => ({
    meta: [
      { title: "Privacy Policy — BASK Digital Agency" },
      { name: "description", content: "Privacy Policy for BASK Digital Agency." },
    ],
  }),
});

function PrivacyPage() {
  return (
    <SiteLayout>
      <PageHeader
        eyebrow="Legal"
        title="Privacy Policy"
        subtitle="How we collect, use, and protect your data."
      />
      <section className="section-y">
        <div className="container-page max-w-3xl">
          <div className="rounded-3xl border border-line bg-white p-8 shadow-soft md:p-12">
            
            <h2 className="font-display text-xl font-700 text-ink mb-3">1. Information We Collect</h2>
            <p className="text-[15px] leading-relaxed text-ink-soft mb-8">
              We collect information you provide directly to us when you use our website, such as when you fill out a contact form, start a project brief, or communicate with us. This may include your name, email address, phone number, and any project-related details you choose to share.
            </p>
            
            <h2 className="font-display text-xl font-700 text-ink mb-3">2. How We Use Your Information</h2>
            <p className="text-[15px] leading-relaxed text-ink-soft mb-8">
              We use the information we collect to communicate with you about your project, provide our services, improve our website, and send you important updates. We do not sell your personal data to third parties.
            </p>

            <h2 className="font-display text-xl font-700 text-ink mb-3">3. Cookies and Tracking</h2>
            <p className="text-[15px] leading-relaxed text-ink-soft mb-8">
              We use cookies and similar tracking technologies to track activity on our website, analyze site traffic, and hold certain information to improve your experience. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent via our cookie banner.
            </p>

            <h2 className="font-display text-xl font-700 text-ink mb-3">4. Third-Party Services</h2>
            <p className="text-[15px] leading-relaxed text-ink-soft mb-8">
              We may employ third-party companies (such as analytics providers or authentication services like Google) to facilitate our website. These third parties have access to your personal data only to perform these specific tasks on our behalf and are obligated not to disclose or use it for any other purpose.
            </p>

            <h2 className="font-display text-xl font-700 text-ink mb-3">5. Contact Us</h2>
            <p className="text-[15px] leading-relaxed text-ink-soft">
              If you have any questions or concerns about this Privacy Policy, please contact us at <a href="mailto:murali701081@gmail.com" className="text-brand hover:underline">murali701081@gmail.com</a>.
            </p>
            
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
