/**
 * Profile — User profile page with avatar, info, and activity stats.
 */
import { motion } from "framer-motion";
import DashboardLayout from "@/layouts/DashboardLayout";
import { MapPin, Mail, Calendar, Briefcase } from "lucide-react";

const Profile = () => (
  <DashboardLayout title="My Profile">
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="max-w-4xl space-y-6">
      {/* Profile header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="glass-card rounded-lg p-6"
      >
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5">
          <div className="w-20 h-20 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
            <span className="text-2xl font-bold text-primary">JD</span>
          </div>
          <div className="flex-1">
            <h2 className="text-xl font-bold text-foreground">John Doe</h2>
            <p className="text-muted-foreground">Senior Product Manager</p>
            <div className="flex flex-wrap gap-4 mt-3 text-sm text-muted-foreground">
              <span className="flex items-center gap-1.5"><MapPin className="h-3.5 w-3.5" /> San Francisco, CA</span>
              <span className="flex items-center gap-1.5"><Mail className="h-3.5 w-3.5" /> john@saas.co</span>
              <span className="flex items-center gap-1.5"><Calendar className="h-3.5 w-3.5" /> Joined Mar 2024</span>
              <span className="flex items-center gap-1.5"><Briefcase className="h-3.5 w-3.5" /> Acme Corp</span>
            </div>
          </div>
          <button className="magnetic-btn px-4 py-2 rounded-lg bg-primary text-primary-foreground text-sm font-medium hover:bg-primary/90 transition-colors">
            Edit Profile
          </button>
        </div>
      </motion.div>

      {/* Stats row */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        {[
          { label: "Projects", value: "24" },
          { label: "Tasks Done", value: "142" },
          { label: "Team Size", value: "12" },
          { label: "Uptime", value: "99.9%" },
        ].map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 + i * 0.08 }}
            className="glass-card rounded-lg p-4 text-center"
          >
            <p className="text-2xl font-bold text-foreground">{s.value}</p>
            <p className="text-sm text-muted-foreground">{s.label}</p>
          </motion.div>
        ))}
      </div>

      {/* About */}
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} className="glass-card rounded-lg p-6">
        <h3 className="text-base font-semibold text-foreground mb-3">About</h3>
        <p className="text-sm text-muted-foreground leading-relaxed">
          Experienced product manager with 8+ years in SaaS. Passionate about building scalable products
          that solve real business problems. Previously led product teams at two YC-backed startups.
          When not building products, you'll find me hiking or experimenting with espresso recipes.
        </p>
      </motion.div>
    </motion.div>
  </DashboardLayout>
);

export default Profile;
