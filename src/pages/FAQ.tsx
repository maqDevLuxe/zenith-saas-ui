/**
 * FAQ — Accordion-style FAQ page.
 */
import { motion } from "framer-motion";
import { useState } from "react";
import DashboardLayout from "@/layouts/DashboardLayout";
import { ChevronDown } from "lucide-react";

const faqs = [
  { q: "How do I upgrade my subscription?", a: "Navigate to Billing & Plans from the sidebar, select your desired plan, and follow the checkout process. Upgrades take effect immediately." },
  { q: "Can I cancel my subscription anytime?", a: "Yes, you can cancel at any time from the Billing page. Your access continues until the end of your billing period." },
  { q: "How is data security handled?", a: "We use AES-256 encryption at rest, TLS 1.3 in transit, and SOC 2 Type II certified infrastructure. All data is stored in ISO 27001 compliant data centers." },
  { q: "What payment methods are accepted?", a: "We accept all major credit cards, ACH bank transfers, and wire transfers for Enterprise plans." },
  { q: "Is there an API available?", a: "Yes, our REST & GraphQL APIs are available on Pro and Enterprise plans. Full documentation is available in the developer portal." },
];

const FAQ = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <DashboardLayout title="FAQ">
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="max-w-3xl space-y-3">
        <h2 className="text-xl font-bold text-foreground mb-4">Frequently Asked Questions</h2>
        {faqs.map((faq, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.06 }}
            className="glass-card rounded-lg overflow-hidden"
          >
            <button
              onClick={() => setOpenIdx(openIdx === i ? null : i)}
              className="w-full flex items-center justify-between p-4 text-left"
            >
              <span className="text-sm font-medium text-foreground">{faq.q}</span>
              <ChevronDown className={`h-4 w-4 text-muted-foreground transition-transform ${openIdx === i ? "rotate-180" : ""}`} />
            </button>
            {openIdx === i && (
              <div className="px-4 pb-4">
                <p className="text-sm text-muted-foreground leading-relaxed">{faq.a}</p>
              </div>
            )}
          </motion.div>
        ))}
      </motion.div>
    </DashboardLayout>
  );
};

export default FAQ;
