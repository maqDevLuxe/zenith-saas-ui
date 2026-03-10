/**
 * Timeline — Activity timeline page.
 */
import { motion } from "framer-motion";
import DashboardLayout from "@/layouts/DashboardLayout";
import { Rocket, Star, Users, Code, Zap } from "lucide-react";

const events = [
  { icon: Rocket, title: "Product Launch v3.0", desc: "Released major platform update with 15+ new features", date: "Mar 8, 2026", color: "text-primary" },
  { icon: Star, title: "10K Users Milestone", desc: "Crossed 10,000 active subscribers", date: "Feb 22, 2026", color: "text-warning" },
  { icon: Users, title: "Team Expansion", desc: "Added 5 new engineers to the platform team", date: "Feb 10, 2026", color: "text-success" },
  { icon: Code, title: "API v2 Released", desc: "New REST & GraphQL endpoints available", date: "Jan 28, 2026", color: "text-info" },
  { icon: Zap, title: "Performance Boost", desc: "Dashboard load times reduced by 40%", date: "Jan 15, 2026", color: "text-primary" },
];

const Timeline = () => (
  <DashboardLayout title="Timeline">
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="max-w-3xl">
      <h2 className="text-xl font-bold text-foreground mb-6">Company Timeline</h2>
      <div className="relative">
        {/* Vertical line */}
        <div className="absolute left-5 top-0 bottom-0 w-px bg-border" />
        <div className="space-y-8">
          {events.map((e, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.1 }}
              className="flex gap-5 relative"
            >
              <div className={`w-10 h-10 rounded-full glass-card flex items-center justify-center flex-shrink-0 z-10 ${e.color}`}>
                <e.icon className="h-4 w-4" />
              </div>
              <div className="glass-card rounded-lg p-4 flex-1">
                <div className="flex items-start justify-between gap-2">
                  <h3 className="text-sm font-semibold text-foreground">{e.title}</h3>
                  <span className="text-xs text-muted-foreground whitespace-nowrap">{e.date}</span>
                </div>
                <p className="text-sm text-muted-foreground mt-1">{e.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  </DashboardLayout>
);

export default Timeline;
