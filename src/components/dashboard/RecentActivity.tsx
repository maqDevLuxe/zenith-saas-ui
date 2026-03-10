/**
 * RecentActivity — Timeline-style activity feed with stagger animations.
 */
import { motion } from "framer-motion";
import { UserPlus, CreditCard, AlertTriangle, CheckCircle, ArrowUpRight } from "lucide-react";

const activities = [
  { id: 1, icon: UserPlus, label: "New enterprise signup", detail: "Acme Corp joined Enterprise plan", time: "2 min ago", color: "text-primary" },
  { id: 2, icon: CreditCard, label: "Payment received", detail: "$2,400 from TechStart Inc.", time: "15 min ago", color: "text-success" },
  { id: 3, icon: AlertTriangle, label: "Subscription expiring", detail: "3 accounts expiring this week", time: "1 hr ago", color: "text-warning" },
  { id: 4, icon: CheckCircle, label: "System update deployed", detail: "v2.4.1 rolled out successfully", time: "3 hrs ago", color: "text-info" },
  { id: 5, icon: ArrowUpRight, label: "Plan upgrade", detail: "Nova Labs upgraded to Pro", time: "5 hrs ago", color: "text-primary" },
];

const RecentActivity = () => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: 0.5 }}
    className="glass-card rounded-lg p-5"
  >
    <h3 className="text-base font-semibold text-foreground mb-4">Recent Activity</h3>
    <div className="space-y-4">
      {activities.map((a, i) => (
        <motion.div
          key={a.id}
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.6 + i * 0.08 }}
          className="flex items-start gap-3"
        >
          <div className={`p-1.5 rounded-md bg-muted ${a.color}`}>
            <a.icon className="h-4 w-4" />
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium text-foreground">{a.label}</p>
            <p className="text-xs text-muted-foreground truncate">{a.detail}</p>
          </div>
          <span className="text-xs text-muted-foreground whitespace-nowrap">{a.time}</span>
        </motion.div>
      ))}
    </div>
  </motion.div>
);

export default RecentActivity;
