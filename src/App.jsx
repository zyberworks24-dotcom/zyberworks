import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function App() {
  return (
    <main className="bg-slate-950 text-slate-100 min-h-screen">
      {/* Fixed Navbar */}
      <header className="fixed top-0 left-0 w-full z-50 bg-slate-950/80 backdrop-blur-lg border-b border-slate-800 shadow-lg">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-8 py-4">
          <img
            src="Imgaes/icon-transparent.png"
            alt="Zyberworks logo"
            className="w-44 md:w-52 drop-shadow-[0_6px_20px_rgba(34,211,238,0.35)]"
          />
          <nav>
            <ul className="flex space-x-10 text-slate-300 text-lg font-medium">
              <li><a href="#services" className="hover:text-cyan-300 transition">Services</a></li>
              <li><a href="#consulting" className="hover:text-cyan-300 transition">Consulting</a></li>
              <li><a href="#contact" className="hover:text-cyan-300 transition">Contact</a></li>
            </ul>
          </nav>
        </div>
      </header>
      {/* Hero Section */}
      <section className="relative h-screen flex flex-col items-center justify-center overflow-hidden pt-32">
        <motion.div
          className="absolute h-[36rem] w-[36rem] rounded-full blur-3xl bg-cyan-400/20 -left-32 -top-24"
          animate={{ y: [0, 30, 0] }}
          transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute h-[44rem] w-[44rem] rounded-full blur-3xl bg-indigo-500/10 -right-40 bottom-[-6rem]"
          animate={{ y: [0, -30, 0] }}
          transition={{ repeat: Infinity, duration: 9, ease: "easeInOut" }}
        />

        {/* Centered Hero Text */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center px-6 mt-10"
        >
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-4">
            IT Services & Security Consulting
          </h1>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto">
            Secure by design. Pragmatic delivery across ISO 27001, NIST CSF 2.0, and the ASD Essential Eight.
          </p>
        </motion.div>
      </section>

      {/* Feature Sections */}
      <FeatureSection
        kicker="Security, engineered"
        title="Penetration Testing"
        body="Web apps, APIs, cloud, and internal networks with clear risk ratings, evidence, and retest verification."
        tint="from-cyan-500/10 to-transparent"
      />
      <FeatureSection
        kicker="Compliance without the drag"
        title="ISO 27001 & NIST CSF"
        body="Gap analysis, SoA, risk treatment, target profiles, and audit readiness—mapped to business outcomes."
        tint="from-indigo-500/10 to-transparent"
      />
      <FeatureSection
        kicker="Pragmatic uplift"
        title="ASD Essential Eight"
        body="Maturity model scoring, hardening baselines, patch cadence, application control, and macros."
        tint="from-emerald-500/10 to-transparent"
      />

      <ContactCTA />
      <Footer />
    </main>
  );
}

function FeatureSection({ kicker, title, body, tint }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 80%", "end 40%"] });
  const y = useTransform(scrollYProgress, [0, 1], [24, 0]);
  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section ref={ref} id="services" className="relative">
      <div className={`absolute inset-0 bg-gradient-to-b ${tint}`} />
      <div className="relative max-w-6xl mx-auto px-6 py-28 lg:py-36">
        <motion.p style={{ opacity, y }} className="text-cyan-300 text-xs uppercase tracking-[0.2em]">
          {kicker}
        </motion.p>
        <motion.h2 style={{ opacity, y }} className="mt-3 text-4xl md:text-5xl font-bold">
          {title}
        </motion.h2>
        <motion.p style={{ opacity, y }} className="mt-4 text-slate-300 max-w-3xl">
          {body}
        </motion.p>
        <motion.div style={{ opacity, y }} className="mt-8">
          <a href="#contact" className="inline-block rounded-2xl bg-cyan-300 text-slate-900 px-5 py-3 font-semibold hover:-translate-y-0.5 transition">
            Talk to us
          </a>
        </motion.div>
      </div>
    </section>
  );
}

function ContactCTA() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 85%", "end 60%"] });
  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const y = useTransform(scrollYProgress, [0, 1], [24, 0]);

  return (
    <section id="contact" ref={ref} className="relative border-t border-white/10">
      <div className="max-w-6xl mx-auto px-6 py-28">
        <motion.h2 style={{ opacity, y }} className="text-4xl md:text-5xl font-bold">Let’s talk</motion.h2>
        <motion.p style={{ opacity, y }} className="mt-3 text-slate-300 max-w-2xl">
          Tell us about your environment and priorities. We’ll reply with a short plan and fixed-price options.
        </motion.p>
        <motion.div style={{ opacity, y }} className="mt-8 flex flex-wrap gap-3">
          <a href="mailto:info@zyberworks.com" className="rounded-2xl bg-cyan-300 text-slate-900 px-5 py-3 font-semibold">Email us</a>
          <a href="#" className="rounded-2xl border border-white/15 px-5 py-3 font-semibold hover:bg-white/5">Book a consult</a>
        </motion.div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-white/10 bg-slate-950">
      <div className="max-w-6xl mx-auto px-6 py-10 text-sm text-slate-400 flex flex-col md:flex-row gap-4 md:items-center md:justify-between">
        <p>© {new Date().getFullYear()} Zyberworks. All rights reserved.</p>
        <div className="flex gap-6">
          <a href="#services" className="hover:text-cyan-300">Services</a>
          <a href="#contact" className="hover:text-cyan-300">Contact</a>
        </div>
      </div>
    </footer>
  );
}

