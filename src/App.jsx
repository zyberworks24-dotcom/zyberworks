import React, { useState } from "react";
import Services from "./Services";

export default function App() {
  return (
    <main className="bg-white text-black min-h-screen font-sans">
      <Header />
      <Hero />
      <Services />
      <ContactTile />
      <Footer />
    </main>
  );
}

// ---------- Header ----------
function Header() {
  return (
    <header className="fixed w-full z-50 bg-white border-b border-gray-200">
      <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4">
        <h1 className="text-xl font-bold tracking-wider">Zyberworks</h1>
        <nav>
          <ul className="flex space-x-6">
            <li><a href="#services" className="hover:text-gray-600">Services</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

// ---------- Hero ----------
function Hero() {
  return (
    <section className="relative pt-32 pb-20 text-center">
      <h2 className="text-4xl md:text-5xl font-extrabold mb-6">
        IT Services & Security Consulting
      </h2>
      <p className="text-gray-600 max-w-2xl mx-auto mb-8">
        Secure by design. Pragmatic delivery across ISO 27001, NIST CSF 2.0, and the ASD Essential Eight.
      </p>
      <div className="flex justify-center gap-4">
        <a href="#services" className="px-6 py-3 border border-black rounded-full hover:bg-gray-100 transition">
          Explore Services
        </a>
      </div>
      <div className="flex justify-center flex-wrap gap-2 mt-4">
        <Badge>ISO 27001</Badge>
        <Badge>NIST CSF 2.0</Badge>
        <Badge>Essential Eight</Badge>
        <Badge>Cloud & Endpoint</Badge>
      </div>
    </section>
  );
}

// ---------- Contact Tile ----------
function ContactTile() {
  const [open, setOpen] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", company: "", service: "", message: "" });

  const services = [
    "Penetration Testing",
    "ISO 27001 & NIST CSF 2.0",
    "ASD Essential Eight",
    "IT Infrastructure Management",
    "Managed IT Support",
    "IT Project Consulting",
    "Device Management",
    "Managed Security on Devices",
    "Infrastructure Consulting",
    "Product Consulting",
    "Cloud Strategy & Migration",
    "Cybersecurity Audits",
    "Network Design & Monitoring",
    "Software Deployment",
    "Vendor Management",
    "Other",
  ];

  const handleSubmit = () => {
    if (!form.name || !form.email || !form.service) return alert("Name, email, and service are required.");
    const subject = encodeURIComponent(`${form.service} — Consultation Request - Zyberworks`);
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\nCompany: ${form.company}\nService: ${form.service}\nMessage:\n${form.message}`
    );
    window.location.href = `mailto:enquiry@zyberworks.com.au?subject=${subject}&body=${body}`;
  };

  return (
    <>
      {/* Contact Tile */}
      <section className="py-20 border-t border-gray-200 text-center">
        <h3 className="text-3xl font-bold mb-8">Let’s Talk</h3>
        <div
          className="max-w-sm mx-auto p-6 border border-gray-300 rounded-lg cursor-pointer hover:bg-gray-50 transition"
          onClick={() => setOpen(true)}
        >
          <p className="text-gray-700">Click here to discuss your IT needs and get a tailored plan.</p>
        </div>
      </section>

      {/* Popup Modal */}
      {open && (
        <div
          className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
          onClick={() => setOpen(false)}
        >
          <div
            className="bg-white rounded-lg max-w-md w-full p-6 relative overflow-y-auto max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-3 right-3 text-gray-500 text-lg"
              onClick={() => setOpen(false)}
            >
              ×
            </button>
            <h4 className="text-2xl font-bold mb-4">Let’s Talk</h4>
            <p className="text-gray-700 mb-4">
              Tell us about your environment and priorities. We’ll reply with a short plan and fixed-price options.
            </p>
            <div className="space-y-4 text-left">
              <input
                type="text"
                placeholder="Name"
                className="w-full p-3 border border-gray-300 rounded-lg"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full p-3 border border-gray-300 rounded-lg"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
              />
              <input
                type="text"
                placeholder="Company"
                className="w-full p-3 border border-gray-300 rounded-lg"
                value={form.company}
                onChange={(e) => setForm({ ...form, company: e.target.value })}
              />
              <select
                className="w-full p-3 border border-gray-300 rounded-lg"
                value={form.service}
                onChange={(e) => setForm({ ...form, service: e.target.value })}
              >
                <option value="">Select a service…</option>
                {services.map((s, i) => <option key={i} value={s}>{s}</option>)}
              </select>
              <textarea
                placeholder="Message"
                className="w-full p-3 border border-gray-300 rounded-lg"
                rows={4}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
              />
              <button
                onClick={handleSubmit}
                className="w-full py-3 border border-black rounded-lg hover:bg-gray-50 transition"
              >
                Send
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

// ---------- Footer ----------
function Footer() {
  return (
    <footer className="py-8 border-t border-gray-200 text-center text-gray-500 text-sm">
      © {new Date().getFullYear()} Zyberworks. All rights reserved.
    </footer>
  );
}

// ---------- Badge ----------
function Badge({ children }) {
  return (
    <span className="text-xs uppercase border border-gray-300 rounded-full px-3 py-1 text-gray-700">
      {children}
    </span>
  );
}