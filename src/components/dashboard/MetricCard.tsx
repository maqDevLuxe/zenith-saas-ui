/**
 * MetricCard — Reusable glassmorphism metric card with trend indicator.
 * Supports icon, value, label, trend percentage, and stagger animation.
 */
import { motion } from "framer-motion";
import { LucideIcon, TrendingUp, TrendingDown } from "lucide-react";

interface MetricCardProps {
  /** Card title/label */
  label: string;
  /** Main metric value */
  value: string;
  /** Trend percentage (positive = up, negative = down) */
  trend?: number;
  /** Lucide icon component */
  icon: LucideIcon;
  /** Animation delay index for stagger effect */
  index?: number;
}

const MetricCard = ({ label, value, trend, icon: Icon, index = 0 }: MetricCardProps) => {
  const isPositive = trend !== undefined && trend >= 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.08, ease: "easeOut" }}
      className="glass-card rounded-lg p-5 group hover:glow-primary transition-shadow duration-500"
    >
      {/* Header row: icon + trend */}
      <div className="flex items-center justify-between mb-3">
        <div className="p-2.5 rounded-lg bg-primary/10">
          <Icon className="h-5 w-5 text-primary" />
        </div>
        {trend !== undefined && (
          <span
            className={`flex items-center gap-1 text-xs font-medium px-2 py-1 rounded-full ${
              isPositive
                ? "bg-success/10 text-success"
                : "bg-destructive/10 text-destructive"
            }`}
          >
            {isPositive ? <TrendingUp className="h-3 w-3" /> : <TrendingDown className="h-3 w-3" />}
            {Math.abs(trend)}%
          </span>
        )}
      </div>

      {/* Value */}
      <p className="text-2xl font-bold tracking-tight text-foreground">{value}</p>
      {/* Label */}
      <p className="text-sm text-muted-foreground mt-1">{label}</p>
    </motion.div>
  );
};

export default MetricCard;
