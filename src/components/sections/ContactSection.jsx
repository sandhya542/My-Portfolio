import { motion as Motion } from "framer-motion";
import { profile } from "../../data/portfolioData";
import SectionTitle from "../ui/SectionTitle";
import SocialLinks from "../ui/SocialLinks";

const ContactSection = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    event.currentTarget.reset();
  };

  return (
    <section id="contact" className="py-20 md:py-24">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <SectionTitle
          eyebrow="Contact"
          title="Let us build something meaningful together"
          subtitle="Open to full-time roles, freelance collaborations, and product partnerships."
        />

        <div className="grid gap-5 md:grid-cols-2">
          <Motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.45, ease: "easeOut" }}
            className="glass rounded-2xl p-6"
          >
            <h3 className="font-display text-xl font-semibold text-slate-900 dark:text-slate-100">
              Reach Out
            </h3>
            <p className="mt-3 text-slate-600 dark:text-slate-300">
              Feel free to connect through email or social platforms. I respond quickly to opportunities and collaboration inquiries.
            </p>

            <div className="mt-5 space-y-2 text-sm text-slate-700 dark:text-slate-200">
              <p>Email: {profile.email}</p>
              <p>LinkedIn: {profile.linkedin}</p>
              <p>GitHub: {profile.github}</p>
            </div>

            <div className="mt-6">
              <SocialLinks
                items={[
                  { label: "GitHub", href: profile.github },
                  { label: "LinkedIn", href: profile.linkedin },
                  { label: "Email", href: `mailto:${profile.email}` },
                ]}
              />
            </div>
          </Motion.div>

          <Motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.45, delay: 0.05, ease: "easeOut" }}
            className="glass space-y-4 rounded-2xl p-6"
          >
            <label className="block text-sm font-medium text-slate-700 dark:text-slate-200">
              Name
              <input
                type="text"
                name="name"
                placeholder="Your name"
                className="mt-2 w-full rounded-xl border border-slate-300 bg-white/80 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-brand dark:border-slate-600 dark:bg-slate-900/70 dark:text-slate-100"
              />
            </label>

            <label className="block text-sm font-medium text-slate-700 dark:text-slate-200">
              Email
              <input
                type="email"
                name="email"
                placeholder="you@example.com"
                className="mt-2 w-full rounded-xl border border-slate-300 bg-white/80 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-brand dark:border-slate-600 dark:bg-slate-900/70 dark:text-slate-100"
              />
            </label>

            <label className="block text-sm font-medium text-slate-700 dark:text-slate-200">
              Message
              <textarea
                name="message"
                rows="5"
                placeholder="Tell me about your project..."
                className="mt-2 w-full rounded-xl border border-slate-300 bg-white/80 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-brand dark:border-slate-600 dark:bg-slate-900/70 dark:text-slate-100"
              />
            </label>

            <button
              type="submit"
              className="inline-flex rounded-xl bg-gradient-to-r from-brand to-sky-400 px-5 py-3 text-sm font-semibold text-slate-950 transition-transform hover:-translate-y-0.5"
            >
              Send Message
            </button>
          </Motion.form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
