/**
 * Dashboard — Main SaaS overview page with metrics, charts, and activity feed.
 */
import { motion } from "framer-motion";
import { DollarSign, Users, CreditCard, Activity } from "lucide-react";
import DashboardLayout from "@/layouts/DashboardLayout";
import MetricCard from "@/components/dashboard/MetricCard";
import RevenueChart from "@/components/dashboard/RevenueChart";
import SubscriptionDonut from "@/components/dashboard/SubscriptionDonut";
import RecentActivity from "@/components/dashboard/RecentActivity";

const metrics = [
  { label: "Total Revenue", value: "$124,500", trend: 12.5, icon: DollarSign },
  { label: "Active Users", value: "8,420", trend: 8.2, icon: Users },
  { label: "Subscriptions", value: "2,340", trend: -3.1, icon: CreditCard },
  { label: "MRR Growth", value: "23.4%", trend: 5.7, icon: Activity },
];

const Dashboard = () => (
  <DashboardLayout title="Dashboard">
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
      className="space-y-6"
    >
      {/* Welcome */}
      <div>
        <h2 className="text-2xl font-bold text-foreground">Good morning, John 👋</h2>
        <p className="text-muted-foreground mt-1">Here's what's happening with your SaaS today.</p>
      </div>

      {/* Metric cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {metrics.map((m, i) => (
          <MetricCard key={m.label} {...m} index={i} />
        ))}
      </div>

      {/* Charts row */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <div className="lg:col-span-2">
          <RevenueChart />
        </div>
        <SubscriptionDonut />
      </div>

      {/* Activity */}
      <RecentActivity />
    </motion.div>
  </DashboardLayout>
);

export default Dashboard;
