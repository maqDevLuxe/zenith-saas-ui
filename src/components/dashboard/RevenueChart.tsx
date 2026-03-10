/**
 * RevenueChart — Area chart showing monthly revenue with glassmorphism styling.
 */
import { motion } from "framer-motion";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const data = [
  { month: "Jan", revenue: 4200, expenses: 2400 },
  { month: "Feb", revenue: 5800, expenses: 2800 },
  { month: "Mar", revenue: 5200, expenses: 2600 },
  { month: "Apr", revenue: 7800, expenses: 3200 },
  { month: "May", revenue: 6900, expenses: 2900 },
  { month: "Jun", revenue: 8200, expenses: 3500 },
  { month: "Jul", revenue: 9100, expenses: 3800 },
  { month: "Aug", revenue: 8800, expenses: 3600 },
  { month: "Sep", revenue: 10200, expenses: 4100 },
  { month: "Oct", revenue: 11500, expenses: 4400 },
  { month: "Nov", revenue: 10800, expenses: 4200 },
  { month: "Dec", revenue: 12400, expenses: 4800 },
];

const RevenueChart = () => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: 0.3 }}
    className="glass-card rounded-lg p-5"
  >
    <div className="flex items-center justify-between mb-5">
      <div>
        <h3 className="text-base font-semibold text-foreground">Revenue Overview</h3>
        <p className="text-sm text-muted-foreground">Monthly revenue vs expenses</p>
      </div>
      <span className="text-xs font-mono text-muted-foreground bg-muted px-2 py-1 rounded">FY 2026</span>
    </div>
    <ResponsiveContainer width="100%" height={280}>
      <AreaChart data={data} margin={{ top: 5, right: 5, left: -20, bottom: 0 }}>
        <defs>
          <linearGradient id="revGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="hsl(var(--primary))" stopOpacity={0.3} />
            <stop offset="95%" stopColor="hsl(var(--primary))" stopOpacity={0} />
          </linearGradient>
          <linearGradient id="expGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="hsl(var(--chart-3))" stopOpacity={0.2} />
            <stop offset="95%" stopColor="hsl(var(--chart-3))" stopOpacity={0} />
          </linearGradient>
        </defs>
        <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
        <XAxis dataKey="month" tick={{ fontSize: 12, fill: "hsl(var(--muted-foreground))" }} axisLine={false} tickLine={false} />
        <YAxis tick={{ fontSize: 12, fill: "hsl(var(--muted-foreground))" }} axisLine={false} tickLine={false} tickFormatter={(v) => `$${v / 1000}k`} />
        <Tooltip
          contentStyle={{
            background: "hsl(var(--card))",
            border: "1px solid hsl(var(--border))",
            borderRadius: "8px",
            fontSize: "12px",
          }}
          formatter={(value: number) => [`$${value.toLocaleString()}`, ""]}
        />
        <Area type="monotone" dataKey="revenue" stroke="hsl(var(--primary))" strokeWidth={2} fill="url(#revGrad)" name="Revenue" />
        <Area type="monotone" dataKey="expenses" stroke="hsl(var(--chart-3))" strokeWidth={2} fill="url(#expGrad)" name="Expenses" />
      </AreaChart>
    </ResponsiveContainer>
  </motion.div>
);

export default RevenueChart;
