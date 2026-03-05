import React, { useState } from "react";

export default function Services() {
  const services = [
    {
      title: "Penetration Testing",
      desc: "Comprehensive testing across web apps, APIs, cloud environments, and internal networks.",
      details: [
        { title: "Web App Testing", desc: "OWASP Top 10 coverage, vulnerability assessment, exploitation paths." },
        { title: "API Testing", desc: "Authentication, authorization, and data exposure assessment." },
        { title: "Cloud Testing", desc: "Check IAM, misconfigurations, and access controls." },
        { title: "Internal Network", desc: "Privilege escalation, lateral movement, AD enumeration." },
      ],
    },
    {
      title: "ISO 27001 & NIST CSF 2.0",
      desc: "Mapping ISO 27001 Annex A controls to NIST CSF functions.",
      details: [
        { title: "Gap Assessment", desc: "Identify current vs target maturity." },
        { title: "Statement of Applicability", desc: "Define control applicability with evidence." },
        { title: "Risk Treatment Plan", desc: "Link risks to mitigation strategies." },
        { title: "Audit Readiness", desc: "Prepare for external/internal audits." },
      ],
    },
    {
      title: "ASD Essential Eight",
      desc: "Mitigation strategies to strengthen your cyber posture.",
      details: [
        { title: "Application Control", desc: "Allow only approved applications." },
        { title: "Patch Management", desc: "Apply security updates promptly." },
        { title: "MFA Enforcement", desc: "Protect privileged accounts." },
        { title: "Backups & Recovery", desc: "Ensure regular backups and test restores." },
      ],
    },
    {
      title: "IT Infrastructure Management",
      desc: "End-to-end management of on-prem and cloud infrastructure.",
      details: [
        { title: "Network Design", desc: "Secure and optimized topology." },
        { title: "Cloud/Hybrid Management", desc: "Provisioning, scaling, and monitoring." },
        { title: "Disaster Recovery", desc: "DR planning and failover testing." },
        { title: "System Hardening", desc: "Apply best-practice security configurations." },
      ],
    },
    {
      title: "Managed IT Support",
      desc: "Proactive monitoring and support for servers, users, and applications.",
      details: [
        { title: "Tiered Helpdesk", desc: "Level 1-3 support for users and systems." },
        { title: "Endpoint Management", desc: "Patch, inventory, remote troubleshooting." },
        { title: "Onboarding/Offboarding", desc: "Automated user lifecycle management." },
        { title: "Policy Enforcement", desc: "Ensure IT security and operational compliance." },
      ],
    },
    {
      title: "IT Project Consulting",
      desc: "Designing and executing IT transformation projects.",
      details: [
        { title: "Technology Roadmapping", desc: "Plan strategic IT initiatives." },
        { title: "Cloud Migrations", desc: "AWS, Azure, GCP migration planning." },
        { title: "Software Deployment", desc: "ERP, CRM, and internal tools rollout." },
        { title: "Vendor Management", desc: "Third-party oversight and SLA tracking." },
      ],
    },
    {
      title: "Device Management",
      desc: "Lifecycle management for corporate and BYOD devices.",
      details: [
        { title: "MDM/MAM Integration", desc: "Mobile device and application management." },
        { title: "Policy Enforcement", desc: "Compliance with IT and security policies." },
        { title: "Asset Tracking", desc: "Inventory and lifecycle management." },
        { title: "Automated Provisioning", desc: "Simplified setup for new devices." },
      ],
    },
    {
      title: "Managed Security on Devices",
      desc: "Protection for PCs, mobile devices, and EFTPOS terminals.",
      details: [
        { title: "EDR Monitoring", desc: "Endpoint threat detection and response." },
        { title: "Mobile Threat Defense", desc: "Prevent malware and phishing on mobile devices." },
        { title: "Device Encryption", desc: "Encrypt corporate data at rest and in transit." },
        { title: "IoT & PCI Compliance", desc: "Secure POS and IoT devices." },
      ],
    },
    {
      title: "Infrastructure Consulting",
      desc: "Modernize and optimize IT infrastructure for performance and resilience.",
      details: [
        { title: "Cloud Strategy", desc: "Plan and design cloud adoption." },
        { title: "Network Optimization", desc: "Improve performance and reliability." },
        { title: "Virtualization", desc: "Server and desktop virtualization solutions." },
        { title: "Cost Control", desc: "Optimize TCO across IT assets." },
      ],
    },
    {
      title: "Product Consulting",
      desc: "Advice on IT product selection and implementation.",
      details: [
        { title: "Evaluate Tools", desc: "Assess suitability for your business needs." },
        { title: "Plan Deployments", desc: "Strategic rollout planning." },
        { title: "Integration", desc: "Ensure seamless adoption with existing systems." },
      ],
    },
    {
      title: "Cloud Strategy & Migration",
      desc: "Plan and execute cloud migration while optimizing costs and security.",
      details: [
        { title: "AWS, Azure, GCP", desc: "Platform selection and migration planning." },
        { title: "Cost Optimization", desc: "Reduce cloud spend while improving performance." },
        { title: "Compliance", desc: "Ensure industry regulations and security standards." },
        { title: "Cloud Architecture", desc: "Design scalable and resilient environments." },
      ],
    },
    {
      title: "Cybersecurity Audits",
      desc: "Identify vulnerabilities and ensure compliance.",
      details: [
        { title: "Network Audit", desc: "Evaluate infrastructure for risks." },
        { title: "Application Audit", desc: "Test apps for vulnerabilities and misconfigurations." },
        { title: "Cloud Audit", desc: "Assess cloud resources for security gaps." },
        { title: "Endpoint Audit", desc: "Check devices for compliance and threats." },
      ],
    },
    {
      title: "Network Design & Monitoring",
      desc: "Secure, high-performance networks with 24/7 monitoring.",
      details: [
        { title: "Topology Design", desc: "Secure and optimized network layout." },
        { title: "Segmentation & Redundancy", desc: "Reduce risk and improve reliability." },
        { title: "Monitoring Dashboards", desc: "Real-time visibility into network health." },
        { title: "Proactive Alerts", desc: "Immediate notifications for issues." },
      ],
    },
    {
      title: "Software Deployment",
      desc: "ERP, CRM, and internal tool rollouts.",
      details: [
        { title: "Installation & Configuration", desc: "Deploy enterprise applications smoothly." },
        { title: "Testing & Validation", desc: "Ensure functional and secure deployment." },
        { title: "Support", desc: "User support during and after rollout." },
      ],
    },
    {
      title: "Vendor Management",
      desc: "Manage third-party IT vendors and contracts.",
      details: [
        { title: "RFP Creation", desc: "Prepare request for proposals." },
        { title: "Vendor Selection", desc: "Assess and choose the best vendors." },
        { title: "SLA Tracking", desc: "Ensure vendors meet performance metrics." },
        { title: "Contract Oversight", desc: "Negotiate and monitor agreements." },
      ],
    },
  ];

  const [selected, setSelected] = useState(null);

  return (
    <section id="services" className="py-20 border-t border-gray-200">
      <h3 className="text-3xl font-bold text-center mb-12">Our Services</h3>
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((s, i) => (
          <div
            key={i}
            className="p-6 border border-gray-300 rounded-lg hover:bg-gray-50 cursor-pointer transition"
            onClick={() => setSelected(s)}
          >
            <h4 className="text-xl font-semibold mb-2">{s.title}</h4>
            <p className="text-gray-600">{s.desc}</p>
          </div>
        ))}
      </div>

      {/* Modal with Sub-Tiles */}
      {selected && (
        <div
          className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
          onClick={() => setSelected(null)}
        >
          <div
            className="bg-white rounded-lg max-w-4xl w-full p-6 relative overflow-y-auto max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-3 right-3 text-gray-500 text-2xl"
              onClick={() => setSelected(null)}
            >
              ×
            </button>
            <h4 className="text-2xl font-bold mb-4">{selected.title}</h4>
            <p className="text-gray-700 mb-6">{selected.desc}</p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {selected.details.map((d, i) => (
                <div
                  key={i}
                  className="p-4 border border-gray-300 rounded-lg hover:bg-gray-50 transition"
                >
                  <h5 className="font-semibold mb-1">{d.title}</h5>
                  <p className="text-gray-600 text-sm">{d.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}