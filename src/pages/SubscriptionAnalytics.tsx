/**
 * SubscriptionAnalytics — Detailed subscription metrics and charts.
 */
import { motion } from "framer-motion";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line } from "recharts";
import DashboardLayout from "@/layouts/DashboardLayout";
import MetricCard from "@/components/dashboard/MetricCard";
import { Users, TrendingUp, RefreshCw, UserMinus } from "lucide-react";

const churnData = [
  { month: "Jan", churn: 2.1, newSubs: 120 },
  { month: "Feb", churn: 1.8, newSubs: 145 },
  { month: "Mar", churn: 2.4, newSubs: 132 },
  { month: "Apr", churn: 1.5, newSubs: 178 },
  { month: "May", churn: 1.9, newSubs: 156 },
  { month: "Jun", churn: 1.3, newSubs: 198 },
];

const planData = [
  { plan: "Free", count: 1240 },
  { plan: "Starter", count: 680 },
  { plan: "Pro", count: 1450 },
  { plan: "Enterprise", count: 520 },
];

const SubscriptionAnalytics = () => (
  <DashboardLayout title="Subscription Analytics">
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-6">
      {/* Metrics */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <MetricCard label="Total Subscribers" value="3,890" trend={6.2} icon={Users} index={0} />
        <MetricCard label="Net Growth" value="+245" trend={12.8} icon={TrendingUp} index={1} />
        <MetricCard label="Churn Rate" value="1.3%" trend={-15.4} icon={UserMinus} index={2} />
        <MetricCard label="Renewals" value="892" trend={4.1} icon={RefreshCw} index={3} />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {/* Churn & new subs chart */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="glass-card rounded-lg p-5">
          <h3 className="text-base font-semibold text-foreground mb-1">Churn vs New Subscriptions</h3>
          <p className="text-sm text-muted-foreground mb-4">Monthly trend analysis</p>
          <ResponsiveContainer width="100%" height={260}>
            <LineChart data={churnData}>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
              <XAxis dataKey="month" tick={{ fontSize: 12, fill: "hsl(var(--muted-foreground))" }} axisLine={false} tickLine={false} />
              <YAxis yAxisId="left" tick={{ fontSize: 12, fill: "hsl(var(--muted-foreground))" }} axisLine={false} tickLine={false} />
              <YAxis yAxisId="right" orientation="right" tick={{ fontSize: 12, fill: "hsl(var(--muted-foreground))" }} axisLine={false} tickLine={false} />
              <Tooltip contentStyle={{ background: "hsl(var(--card))", border: "1px solid hsl(var(--border))", borderRadius: "8px", fontSize: "12px" }} />
              <Line yAxisId="left" type="monotone" dataKey="churn" stroke="hsl(var(--destructive))" strokeWidth={2} dot={{ r: 4 }} name="Churn %" />
              <Line yAxisId="right" type="monotone" dataKey="newSubs" stroke="hsl(var(--primary))" strokeWidth={2} dot={{ r: 4 }} name="New Subs" />
            </LineChart>
          </ResponsiveContainer>
        </motion.div>

        {/* Plan distribution bar chart */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} className="glass-card rounded-lg p-5">
          <h3 className="text-base font-semibold text-foreground mb-1">Subscribers by Plan</h3>
          <p className="text-sm text-muted-foreground mb-4">Current distribution</p>
          <ResponsiveContainer width="100%" height={260}>
            <BarChart data={planData}>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
              <XAxis dataKey="plan" tick={{ fontSize: 12, fill: "hsl(var(--muted-foreground))" }} axisLine={false} tickLine={false} />
              <YAxis tick={{ fontSize: 12, fill: "hsl(var(--muted-foreground))" }} axisLine={false} tickLine={false} />
              <Tooltip contentStyle={{ background: "hsl(var(--card))", border: "1px solid hsl(var(--border))", borderRadius: "8px", fontSize: "12px" }} />
              <Bar dataKey="count" fill="hsl(var(--primary))" radius={[6, 6, 0, 0]} name="Subscribers" />
            </BarChart>
          </ResponsiveContainer>
        </motion.div>
      </div>
    </motion.div>
  </DashboardLayout>
);

export default SubscriptionAnalytics;
