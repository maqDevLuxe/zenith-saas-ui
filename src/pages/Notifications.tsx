/**
 * Notifications — Notification center page.
 */
import { motion } from "framer-motion";
import DashboardLayout from "@/layouts/DashboardLayout";
import { Bell, CheckCircle, AlertTriangle, Info, X } from "lucide-react";

const notifications = [
  { id: 1, type: "success" as const, title: "Payment successful", desc: "Invoice #1042 has been paid", time: "5 min ago" },
  { id: 2, type: "warning" as const, title: "Storage limit reaching", desc: "You've used 85% of your storage", time: "1 hr ago" },
  { id: 3, type: "info" as const, title: "New feature available", desc: "Try the new analytics dashboard", time: "3 hrs ago" },
  { id: 4, type: "success" as const, title: "Backup complete", desc: "Weekly backup finished successfully", time: "6 hrs ago" },
  { id: 5, type: "warning" as const, title: "SSL certificate expiring", desc: "Renew before April 15, 2026", time: "1 day ago" },
];

const typeConfig = {
  success: { icon: CheckCircle, class: "text-success" },
  warning: { icon: AlertTriangle, class: "text-warning" },
  info: { icon: Info, class: "text-info" },
};

const Notifications = () => (
  <DashboardLayout title="Notifications">
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="max-w-3xl space-y-3">
      {notifications.map((n, i) => {
        const cfg = typeConfig[n.type];
        return (
          <motion.div
            key={n.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.06 }}
            className="glass-card rounded-lg p-4 flex items-start gap-3 group"
          >
            <cfg.icon className={`h-5 w-5 mt-0.5 flex-shrink-0 ${cfg.class}`} />
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-foreground">{n.title}</p>
              <p className="text-xs text-muted-foreground">{n.desc}</p>
            </div>
            <span className="text-xs text-muted-foreground whitespace-nowrap">{n.time}</span>
          </motion.div>
        );
      })}
    </motion.div>
  </DashboardLayout>
);

export default Notifications;
