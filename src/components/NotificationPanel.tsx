/**
 * NotificationPanel — Dropdown panel showing recent notifications.
 * Rendered inside a Popover triggered by the header bell icon.
 */
import { motion } from "framer-motion";
import { CheckCircle, AlertTriangle, Info, UserPlus, CreditCard, X } from "lucide-react";
import { Link } from "react-router-dom";

const notifications = [
  { id: 1, type: "success" as const, title: "Payment received", desc: "$2,400 from TechStart Inc.", time: "2 min ago", read: false },
  { id: 2, type: "warning" as const, title: "Storage limit reaching", desc: "You've used 85% of your storage", time: "30 min ago", read: false },
  { id: 3, type: "info" as const, title: "New feature available", desc: "Try the new analytics dashboard", time: "1 hr ago", read: false },
  { id: 4, type: "success" as const, title: "New team member", desc: "Sarah Chen accepted your invite", time: "3 hrs ago", read: true },
  { id: 5, type: "warning" as const, title: "SSL cert expiring", desc: "Renew before April 15, 2026", time: "5 hrs ago", read: true },
];

const iconMap = {
  success: CheckCircle,
  warning: AlertTriangle,
  info: Info,
};

const colorMap = {
  success: "text-success",
  warning: "text-warning",
  info: "text-info",
};

const NotificationPanel = () => {
  const unreadCount = notifications.filter((n) => !n.read).length;

  return (
    <div className="w-80 sm:w-96">
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-3 border-b border-border">
        <div className="flex items-center gap-2">
          <h3 className="text-sm font-semibold text-foreground">Notifications</h3>
          {unreadCount > 0 && (
            <span className="px-1.5 py-0.5 text-[10px] font-bold rounded-full bg-primary text-primary-foreground">
              {unreadCount}
            </span>
          )}
        </div>
        <button className="text-xs text-primary hover:underline">Mark all read</button>
      </div>

      {/* List */}
      <div className="max-h-80 overflow-y-auto custom-scrollbar">
        {notifications.map((n, i) => {
          const Icon = iconMap[n.type];
          return (
            <motion.div
              key={n.id}
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.04 }}
              className={`flex items-start gap-3 px-4 py-3 hover:bg-accent/50 transition-colors cursor-pointer border-b border-border last:border-0 ${
                !n.read ? "bg-accent/20" : ""
              }`}
            >
              <div className={`mt-0.5 ${colorMap[n.type]}`}>
                <Icon className="h-4 w-4" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-foreground">{n.title}</p>
                <p className="text-xs text-muted-foreground truncate">{n.desc}</p>
              </div>
              <div className="flex flex-col items-end gap-1 flex-shrink-0">
                <span className="text-[10px] text-muted-foreground">{n.time}</span>
                {!n.read && <span className="w-1.5 h-1.5 rounded-full bg-primary" />}
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Footer */}
      <div className="border-t border-border px-4 py-2.5 text-center">
        <Link to="/notifications" className="text-xs font-medium text-primary hover:underline">
          View all notifications
        </Link>
      </div>
    </div>
  );
};

export default NotificationPanel;
