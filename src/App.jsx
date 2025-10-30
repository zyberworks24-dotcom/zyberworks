import { useRef, useState } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";

export default function App() {
  return (
    <main className="bg-slate-950 text-slate-100 min-h-screen">
      {/* ---------- Navbar ---------- */}
      <header className="fixed top-0 left-0 w-full z-50 bg-slate-950/80 backdrop-blur-lg border-b border-slate-800 shadow-lg">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-8 py-4">
          <h1 className="text-3xl font-extrabold text-cyan-300 tracking-wide drop-shadow-[0_0_10px_rgba(34,211,238,0.7)]">
            Zyberworks
          </h1>
          <nav>
            <ul className="flex space-x-10 text-slate-300 text-lg font-medium">
              <li><a href="#services" className="hover:text-cyan-300 transition">Services</a></li>
              <li><a href="#contact" className="hover:text-cyan-300 transition">Contact</a></li>
            </ul>
          </nav>
        </div>
      </header>

      {/* ---------- Hero ---------- */}
      <section className="relative h-screen flex flex-col items-center justify-center overflow-hidden pt-32">
        <motion.div className="absolute h-[36rem] w-[36rem] rounded-full blur-3xl bg-cyan-400/20 -left-32 -top-24"
          animate={{ y: [0, 30, 0] }} transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }} />
        <motion.div className="absolute h-[44rem] w-[44rem] rounded-full blur-3xl bg-indigo-500/10 -right-40 bottom-[-6rem]"
          animate={{ y: [0, -30, 0] }} transition={{ repeat: Infinity, duration: 9, ease: "easeInOut" }} />
        <motion.img src="icon-transparent.png" alt="Zyberworks logo"
          className="w-44 md:w-56 mb-8 drop-shadow-[0_6px_20px_rgba(34,211,238,0.45)]"
          animate={{ opacity: [0.3, 1, 0.3] }} transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }} />
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }} className="text-center px-6 mt-4">
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-4">IT Services & Security Consulting</h1>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto">
            Secure by design. Pragmatic delivery across ISO 27001, NIST CSF 2.0, and the ASD Essential Eight.
          </p>
        </motion.div>
      </section>

      {/* ---------- Services (Collapsible) ---------- */}
<section id="services" className="relative max-w-6xl mx-auto px-6 py-16 border-t border-slate-800">
  <h2 className="text-4xl font-bold mb-10 text-center">Our Services</h2>

  {/* ---------- Cybersecurity & Compliance ---------- */}
  <CollapsibleService
    kicker="Security, engineered"
    title="Penetration Testing"
    body="Comprehensive testing across web apps, APIs, cloud environments, and internal networks."
    tint="from-cyan-500/10 to-transparent"
    cards={[
      { title: "Web Application Testing", desc: "OWASP Top 10 coverage with detailed risk context and exploit paths." },
      { title: "API & Cloud Testing", desc: "Assess authentication, data exposure, and cloud misconfiguration risks." },
      { title: "Internal & External Networks", desc: "Privilege escalation, lateral movement, and AD enumeration detection." },
      { title: "Retesting & Verification", desc: "Revalidation of fixes with supporting evidence and closure reporting." },
    ]}
  />

  <CollapsibleService
    kicker="Compliance without the drag"
    title="ISO 27001 & NIST CSF 2.0"
    body="We connect governance with engineering — mapping ISO 27001 Annex A controls to NIST CSF functions."
    tint="from-indigo-500/10 to-transparent"
    cards={[
      { title: "Gap Assessment", desc: "Identify current vs. target maturity across CSF functions." },
      { title: "Statement of Applicability", desc: "Define and justify control applicability with SoA evidence." },
      { title: "Risk Treatment Planning", desc: "Link risk register items to NIST CSF outcomes." },
      { title: "Audit Readiness", desc: "Evidence collection, internal audit prep, and continual improvement plans." },
    ]}
  />

  <CollapsibleService
    kicker="Government-grade protection"
    title="ASD Essential Eight"
    body="The ACSC’s Essential Eight provides a prioritized set of mitigation strategies to strengthen your cyber posture."
    tint="from-emerald-500/10 to-transparent"
    cards={[
      { title: "Application Control", desc: "Allow only approved applications to execute." },
      { title: "Patch Applications", desc: "Apply security updates promptly to reduce exploit exposure." },
      { title: "Multi-Factor Authentication", desc: "Protect privileged and remote access accounts with MFA." },
      { title: "Regular Backups", desc: "Perform and verify backups to support rapid recovery." },
    ]}
  />

  {/* ---------- IT Infrastructure & Managed Services ---------- */}
  <CollapsibleService
    kicker="Reliable & scalable"
    title="IT Infrastructure Management"
    body="End-to-end management of on-prem and cloud infrastructure to ensure uptime, performance, and security."
    tint="from-blue-500/10 to-transparent"
    cards={[
      { title: "Network Design & Monitoring", desc: "Optimized, secure networks with 24/7 visibility and proactive alerts." },
      { title: "Cloud & Hybrid Management", desc: "Azure, AWS, and GCP migration, cost optimization, and compliance." },
      { title: "Disaster Recovery", desc: "Design and implement DR strategies aligned with business continuity goals." },
      { title: "System Hardening", desc: "Baseline configurations and patch automation for servers and endpoints." },
    ]}
  />

  <CollapsibleService
    kicker="Efficiency meets reliability"
    title="Managed IT Support"
    body="Proactive monitoring and support for users, servers, and applications to minimize downtime."
    tint="from-purple-500/10 to-transparent"
    cards={[
      { title: "Helpdesk Support", desc: "Tier 1–3 support with SLA-backed resolution times and ticket tracking." },
      { title: "Endpoint Management", desc: "Centralized patching, updates, and device provisioning." },
      { title: "Onboarding & Offboarding", desc: "Automated user provisioning and deactivation workflows." },
      { title: "IT Policy Enforcement", desc: "Maintain compliance and visibility across your digital workspace." },
    ]}
  />

  <CollapsibleService
    kicker="Plan, build, deliver"
    title="IT Project Consulting"
    body="Expert guidance in designing and executing IT transformation projects — from strategy to deployment."
    tint="from-orange-500/10 to-transparent"
    cards={[
      { title: "Technology Roadmapping", desc: "Align IT initiatives with strategic business objectives." },
      { title: "Cloud Migrations", desc: "Plan, execute, and secure migration of workloads to cloud environments." },
      { title: "Software Deployment", desc: "Implementation support for ERP, CRM, and internal tool rollouts." },
      { title: "Vendor Management", desc: "RFP, selection, and oversight of third-party vendors and MSPs." },
    ]}
  />

  {/* ---------- New Services ---------- */}
  <CollapsibleService
    kicker="Control at scale"
    title="Device Management"
    body="Centralized lifecycle management for corporate and BYOD devices — securing endpoints across your organization."
    tint="from-sky-500/10 to-transparent"
    cards={[
      { title: "MDM & MAM Integration", desc: "Deploy, manage, and secure devices through Microsoft Intune, Jamf, or Workspace ONE." },
      { title: "Policy Enforcement", desc: "Apply consistent password, encryption, and compliance rules company-wide." },
      { title: "Asset Tracking", desc: "Maintain real-time visibility of device health, patch level, and location." },
      { title: "Automated Provisioning", desc: "Zero-touch deployment for new employees and remote teams." },
    ]}
  />

  <CollapsibleService
    kicker="Protect every endpoint"
    title="Managed Security on Devices"
    body="Comprehensive protection for PCs, laptops, mobile devices, and EFTPOS terminals through managed EDR and threat monitoring."
    tint="from-rose-500/10 to-transparent"
    cards={[
      { title: "Mobile Threat Defense", desc: "Real-time malware, phishing, and app risk detection for Android & iOS." },
      { title: "Endpoint Detection & Response (EDR)", desc: "Continuous monitoring, automated isolation, and forensic analysis." },
      { title: "Device Encryption & Access Control", desc: "Full-disk encryption, secure boot, and conditional access enforcement." },
      { title: "EFTPOS & IoT Protection", desc: "Network segmentation, firmware patching, and PCI DSS compliance checks." },
    ]}
  />

  <CollapsibleService
    kicker="Architect for the future"
    title="Infrastructure Consulting"
    body="Advisory and implementation services to modernize and optimize your IT infrastructure for performance, resilience, and cost efficiency."
    tint="from-teal-500/10 to-transparent"
    cards={[
      { title: "Cloud Strategy & Design", desc: "Assess workloads and define the optimal hybrid or multi-cloud architecture." },
      { title: "Network Optimization", desc: "Improve throughput, redundancy, and cybersecurity through better design." },
      { title: "Virtualization & Containerization", desc: "Implement scalable and portable workloads with VMware, Hyper-V, or Kubernetes." },
      { title: "Infrastructure Cost Control", desc: "Analyze usage, rightsizing, and automation to lower operational costs." },
    ]}
  />
</section>




      <ContactCTA />
      <Footer />
    </main>
  );
}

/* ---------- Collapsible Service ---------- */
function CollapsibleService({ kicker, title, body, tint, cards }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 85%", "end 40%"] });
  const y = useTransform(scrollYProgress, [0, 1], [24, 0]);
  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const [open, setOpen] = useState(false);

  return (
    <div ref={ref} className="relative mb-10 border border-slate-800 rounded-2xl overflow-hidden">
      <div className={`absolute inset-0 bg-gradient-to-b ${tint}`} />
      <motion.div className="relative p-6 cursor-pointer flex justify-between items-center"
        onClick={() => setOpen(!open)} style={{ opacity, y }}>
        <div>
          <p className="text-cyan-300 text-xs uppercase tracking-[0.2em]">{kicker}</p>
          <h3 className="text-2xl font-bold mt-1">{title}</h3>
        </div>
        <motion.span animate={{ rotate: open ? 180 : 0 }} transition={{ duration: 0.3 }} className="text-cyan-300 text-2xl">▼</motion.span>
      </motion.div>

      <AnimatePresence>
        {open && (
          <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.5 }} className="overflow-hidden p-6 pt-0">
            <p className="text-slate-300 mb-6">{body}</p>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {cards.map((card, i) => (
                <div key={i} className="rounded-2xl border border-slate-800 bg-slate-900/50 p-6 hover:bg-slate-900/70">
                  <h4 className="text-lg font-semibold text-cyan-300 mb-2">{card.title}</h4>
                  <p className="text-slate-400 text-sm">{card.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

/* ---------- Contact CTA & Footer ---------- */
function ContactCTA() {
  const [showForm, setShowForm] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", company: "", message: "" });

  const handleSubmit = () => {
    const subject = encodeURIComponent("Consultation Request - Zyberworks");
    const body = encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\nCompany: ${form.company}\n\nMessage:\n${form.message}`);
    window.location.href = `mailto:enquiry@zyberworks.com.au?subject=${subject}&body=${body}`;
    setShowForm(false);
  };

  return (
    <section id="contact" className="border-t border-white/10 py-24 text-center">
      <h2 className="text-4xl font-bold">Let’s talk</h2>
      <p className="text-slate-300 mt-3">Tell us about your environment and priorities. We’ll reply with a short plan and fixed-price options.</p>
      <div className="mt-8 flex justify-center gap-4">
        <a href="mailto:enquiry@zyberworks.com.au" className="bg-cyan-300 text-slate-900 px-5 py-3 rounded-2xl font-semibold">Email us</a>
        <button onClick={() => setShowForm(true)} className="border border-slate-700 px-5 py-3 rounded-2xl hover:bg-slate-800">Book a consult</button>
      </div>

      {showForm && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
          <div className="bg-slate-900 border border-slate-700 rounded-2xl p-8 w-full max-w-md relative">
            <button onClick={() => setShowForm(false)} className="absolute top-3 right-3 text-xl text-slate-400">×</button>
            <h3 className="text-2xl font-semibold text-cyan-300 mb-4">Book a Consultation</h3>
            <form className="space-y-4 text-left">
              {["name", "email", "company", "message"].map((field) => (
                <div key={field}>
                  <label className="text-sm text-slate-400 capitalize">{field}</label>
                  {field !== "message" ? (
                    <input type={field === "email" ? "email" : "text"} name={field} value={form[field]}
                      onChange={(e) => setForm({ ...form, [field]: e.target.value })}
                      className="w-full bg-slate-800 border border-slate-700 rounded-xl px-3 py-2 mt-1 text-slate-200" />
                  ) : (
                    <textarea name={field} rows="4" value={form[field]}
                      onChange={(e) => setForm({ ...form, [field]: e.target.value })}
                      className="w-full bg-slate-800 border border-slate-700 rounded-xl px-3 py-2 mt-1 text-slate-200"></textarea>
                  )}
                </div>
              ))}
              <div className="flex justify-end">
                <button type="button" onClick={handleSubmit}
                  className="bg-cyan-300 text-slate-900 px-5 py-2 rounded-xl font-semibold hover:-translate-y-0.5 transition">
                  Send
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-white/10 bg-slate-950">
      <div className="max-w-6xl mx-auto px-6 py-10 text-sm text-slate-400 flex flex-col md:flex-row justify-between items-center">
        <p>© {new Date().getFullYear()} Zyberworks. All rights reserved.</p>
        <div className="flex gap-6">
          <a href="#services" className="hover:text-cyan-300">Services</a>
          <a href="#contact" className="hover:text-cyan-300">Contact</a>
        </div>
      </div>
    </footer>
  );
}
