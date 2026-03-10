/**
 * Security — Security settings page.
 */
import { motion } from "framer-motion";
import DashboardLayout from "@/layouts/DashboardLayout";
import { Shield, Smartphone, Key, Globe } from "lucide-react";

const Security = () => (
  <DashboardLayout title="Security">
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="max-w-2xl space-y-4">
      {[
        { icon: Shield, title: "Two-Factor Authentication", desc: "Add an extra layer of security to your account", action: "Enable", enabled: false },
        { icon: Smartphone, title: "Trusted Devices", desc: "3 devices currently trusted", action: "Manage", enabled: true },
        { icon: Key, title: "API Keys", desc: "2 active keys", action: "View Keys", enabled: true },
        { icon: Globe, title: "Active Sessions", desc: "Currently signed in on 2 devices", action: "Review", enabled: true },
      ].map((item, i) => (
        <motion.div
          key={item.title}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.08 }}
          className="glass-card rounded-lg p-5 flex items-center gap-4"
        >
          <div className="p-2.5 rounded-lg bg-primary/10">
            <item.icon className="h-5 w-5 text-primary" />
          </div>
          <div className="flex-1">
            <p className="text-sm font-medium text-foreground">{item.title}</p>
            <p className="text-xs text-muted-foreground">{item.desc}</p>
          </div>
          <button className="px-3 py-1.5 rounded-lg bg-secondary text-xs font-medium text-secondary-foreground hover:bg-secondary/80 transition-colors">
            {item.action}
          </button>
        </motion.div>
      ))}
    </motion.div>
  </DashboardLayout>
);

export default Security;
