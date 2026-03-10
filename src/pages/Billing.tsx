/**
 * Billing — Billing & Plans page.
 */
import { motion } from "framer-motion";
import DashboardLayout from "@/layouts/DashboardLayout";
import { Check } from "lucide-react";

const plans = [
  { name: "Starter", price: "$29", period: "/mo", features: ["5 team members", "10GB storage", "Basic analytics", "Email support"], current: false },
  { name: "Pro", price: "$79", period: "/mo", features: ["25 team members", "100GB storage", "Advanced analytics", "Priority support", "API access"], current: true },
  { name: "Enterprise", price: "$199", period: "/mo", features: ["Unlimited members", "1TB storage", "Custom analytics", "24/7 support", "Full API", "SSO & SAML"], current: false },
];

const Billing = () => (
  <DashboardLayout title="Billing & Plans">
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-6">
      {/* Current usage */}
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="glass-card rounded-lg p-6 max-w-2xl">
        <h3 className="text-base font-semibold text-foreground mb-2">Current Plan: Pro</h3>
        <p className="text-sm text-muted-foreground mb-4">Your next billing date is April 8, 2026</p>
        <div className="flex gap-4 text-sm">
          <div className="glass-card rounded-lg p-3 flex-1 text-center">
            <p className="text-lg font-bold text-foreground">18/25</p>
            <p className="text-xs text-muted-foreground">Team Members</p>
          </div>
          <div className="glass-card rounded-lg p-3 flex-1 text-center">
            <p className="text-lg font-bold text-foreground">67GB</p>
            <p className="text-xs text-muted-foreground">Storage Used</p>
          </div>
          <div className="glass-card rounded-lg p-3 flex-1 text-center">
            <p className="text-lg font-bold text-foreground">$79</p>
            <p className="text-xs text-muted-foreground">Monthly Cost</p>
          </div>
        </div>
      </motion.div>

      {/* Plans */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl">
        {plans.map((plan, i) => (
          <motion.div
            key={plan.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 + i * 0.1 }}
            className={`glass-card rounded-lg p-6 ${plan.current ? "ring-2 ring-primary glow-primary" : ""}`}
          >
            <h3 className="text-base font-semibold text-foreground">{plan.name}</h3>
            <div className="mt-2 mb-4">
              <span className="text-3xl font-bold text-foreground">{plan.price}</span>
              <span className="text-sm text-muted-foreground">{plan.period}</span>
            </div>
            <ul className="space-y-2 mb-5">
              {plan.features.map((f) => (
                <li key={f} className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Check className="h-4 w-4 text-success flex-shrink-0" /> {f}
                </li>
              ))}
            </ul>
            <button
              className={`w-full py-2 rounded-lg text-sm font-medium transition-colors ${
                plan.current
                  ? "bg-secondary text-secondary-foreground cursor-default"
                  : "magnetic-btn bg-primary text-primary-foreground hover:bg-primary/90"
              }`}
            >
              {plan.current ? "Current Plan" : "Upgrade"}
            </button>
          </motion.div>
        ))}
      </div>
    </motion.div>
  </DashboardLayout>
);

export default Billing;
