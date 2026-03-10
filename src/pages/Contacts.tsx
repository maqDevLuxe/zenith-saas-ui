/**
 * Contacts — Contacts list with search.
 */
import { motion } from "framer-motion";
import DashboardLayout from "@/layouts/DashboardLayout";
import { Search, Mail, Phone } from "lucide-react";

const contacts = [
  { name: "Sarah Chen", role: "CTO", company: "TechStart Inc.", email: "sarah@techstart.io", initials: "SC" },
  { name: "Marcus Rivera", role: "VP Engineering", company: "Acme Corp", email: "marcus@acme.co", initials: "MR" },
  { name: "Emily Watson", role: "Product Lead", company: "Nova Labs", email: "emily@novalabs.io", initials: "EW" },
  { name: "David Kim", role: "Founder", company: "CloudPeak", email: "david@cloudpeak.com", initials: "DK" },
  { name: "Lisa Park", role: "Head of Sales", company: "DataFlow", email: "lisa@dataflow.ai", initials: "LP" },
  { name: "James O'Brien", role: "Director", company: "MetaSync", email: "james@metasync.io", initials: "JO" },
];

const Contacts = () => (
  <DashboardLayout title="Contacts">
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-5">
      {/* Search */}
      <div className="relative max-w-md">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        <input placeholder="Search contacts..." className="w-full pl-10 pr-4 py-2.5 rounded-lg bg-secondary border border-border text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-shadow" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {contacts.map((c, i) => (
          <motion.div
            key={c.email}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.06 }}
            className="glass-card rounded-lg p-5 hover:glow-primary transition-shadow duration-500"
          >
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                <span className="text-sm font-semibold text-primary">{c.initials}</span>
              </div>
              <div>
                <p className="text-sm font-semibold text-foreground">{c.name}</p>
                <p className="text-xs text-muted-foreground">{c.role}</p>
              </div>
            </div>
            <p className="text-xs text-muted-foreground mb-2">{c.company}</p>
            <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
              <Mail className="h-3 w-3" /> {c.email}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  </DashboardLayout>
);

export default Contacts;
