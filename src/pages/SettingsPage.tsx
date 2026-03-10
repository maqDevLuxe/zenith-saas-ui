/**
 * SettingsPage — Account settings with theme controls.
 */
import { motion } from "framer-motion";
import DashboardLayout from "@/layouts/DashboardLayout";
import { useTheme, COLOR_THEMES } from "@/contexts/ThemeContext";
import { Sun, Moon, ArrowLeftRight, Eye, EyeOff } from "lucide-react";

const SettingsPage = () => {
  const { mode, toggleMode, direction, toggleDirection, colorTheme, setColorTheme, showSidebarCaptions, toggleSidebarCaptions } = useTheme();

  return (
    <DashboardLayout title="Account Settings">
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="max-w-2xl space-y-6">
        {/* Appearance */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="glass-card rounded-lg p-6 space-y-5">
          <h3 className="text-base font-semibold text-foreground">Appearance</h3>

          {/* Mode */}
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-foreground">Theme Mode</p>
              <p className="text-xs text-muted-foreground">Switch between dark and light</p>
            </div>
            <button onClick={toggleMode} className="flex items-center gap-2 px-3 py-2 rounded-lg bg-secondary text-sm font-medium text-secondary-foreground hover:bg-secondary/80 transition-colors">
              {mode === "dark" ? <><Sun className="h-4 w-4" /> Light</> : <><Moon className="h-4 w-4" /> Dark</>}
            </button>
          </div>

          {/* Direction */}
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-foreground">Layout Direction</p>
              <p className="text-xs text-muted-foreground">Toggle RTL / LTR</p>
            </div>
            <button onClick={toggleDirection} className="flex items-center gap-2 px-3 py-2 rounded-lg bg-secondary text-sm font-medium text-secondary-foreground hover:bg-secondary/80 transition-colors">
              <ArrowLeftRight className="h-4 w-4" /> {direction.toUpperCase()}
            </button>
          </div>

          {/* Sidebar Captions */}
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-foreground">Sidebar Captions</p>
              <p className="text-xs text-muted-foreground">Show or hide menu group labels</p>
            </div>
            <button onClick={toggleSidebarCaptions} className="flex items-center gap-2 px-3 py-2 rounded-lg bg-secondary text-sm font-medium text-secondary-foreground hover:bg-secondary/80 transition-colors">
              {showSidebarCaptions ? <><EyeOff className="h-4 w-4" /> Hide</> : <><Eye className="h-4 w-4" /> Show</>}
            </button>
          </div>

          {/* Color theme */}
          <div>
            <p className="text-sm font-medium text-foreground mb-3">Primary Color</p>
            <div className="flex flex-wrap gap-3">
              {COLOR_THEMES.map((t) => (
                <button
                  key={t.id}
                  onClick={() => setColorTheme(t.id)}
                  className={`w-9 h-9 rounded-full border-2 transition-all hover:scale-110 ${
                    colorTheme === t.id ? "border-foreground ring-2 ring-foreground/20 scale-110" : "border-transparent"
                  }`}
                  style={{ background: `hsl(${t.primary})` }}
                  title={t.name}
                />
              ))}
            </div>
          </div>
        </motion.div>

        {/* Placeholder sections */}
        {["Notifications", "Privacy"].map((section, i) => (
          <motion.div
            key={section}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 + i * 0.1 }}
            className="glass-card rounded-lg p-6"
          >
            <h3 className="text-base font-semibold text-foreground mb-2">{section}</h3>
            <p className="text-sm text-muted-foreground">Configure your {section.toLowerCase()} preferences.</p>
          </motion.div>
        ))}
      </motion.div>
    </DashboardLayout>
  );
};

export default SettingsPage;
