/**
 * SubscriptionDonut — Donut chart showing subscription plan distribution.
 */
import { motion } from "framer-motion";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts";

const data = [
  { name: "Enterprise", value: 35, color: "hsl(var(--primary))" },
  { name: "Pro", value: 40, color: "hsl(var(--chart-2))" },
  { name: "Starter", value: 18, color: "hsl(var(--chart-3))" },
  { name: "Free", value: 7, color: "hsl(var(--chart-4))" },
];

const SubscriptionDonut = () => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: 0.4 }}
    className="glass-card rounded-lg p-5"
  >
    <h3 className="text-base font-semibold text-foreground mb-1">Plan Distribution</h3>
    <p className="text-sm text-muted-foreground mb-4">Active subscriptions by plan</p>
    <ResponsiveContainer width="100%" height={220}>
      <PieChart>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          innerRadius={60}
          outerRadius={90}
          paddingAngle={3}
          dataKey="value"
          stroke="none"
        >
          {data.map((entry, i) => (
            <Cell key={i} fill={entry.color} />
          ))}
        </Pie>
        <Tooltip
          contentStyle={{
            background: "hsl(var(--card))",
            border: "1px solid hsl(var(--border))",
            borderRadius: "8px",
            fontSize: "12px",
          }}
          formatter={(value: number) => [`${value}%`, ""]}
        />
      </PieChart>
    </ResponsiveContainer>
    {/* Legend */}
    <div className="grid grid-cols-2 gap-2 mt-2">
      {data.map((item) => (
        <div key={item.name} className="flex items-center gap-2 text-sm">
          <span className="w-2.5 h-2.5 rounded-full flex-shrink-0" style={{ background: item.color }} />
          <span className="text-muted-foreground">{item.name}</span>
          <span className="font-medium text-foreground ml-auto">{item.value}%</span>
        </div>
      ))}
    </div>
  </motion.div>
);

export default SubscriptionDonut;
