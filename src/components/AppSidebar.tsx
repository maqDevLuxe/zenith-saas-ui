/**
 * AppSidebar — Main navigation sidebar with collapsible groups,
 * active-route highlighting, and caption show/hide support.
 */
import {
  LayoutDashboard, BarChart3, Clock, Bell, Users, HelpCircle,
  User, Settings, Shield, CreditCard, LogIn, UserPlus,
  Mail, KeyRound, Lock, Smartphone, AlertCircle, ServerCrash,
  Hourglass, Wrench, Sun, Moon, ArrowLeftRight, Palette, Eye, EyeOff
} from "lucide-react";
import { NavLink } from "@/components/NavLink";
import { useLocation } from "react-router-dom";
import { useTheme, COLOR_THEMES } from "@/contexts/ThemeContext";
import {
  Sidebar, SidebarContent, SidebarGroup, SidebarGroupContent,
  SidebarGroupLabel, SidebarMenu, SidebarMenuButton, SidebarMenuItem,
  SidebarFooter, useSidebar
} from "@/components/ui/sidebar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";

/* ── Navigation structure ── */
const dashboardItems = [
  { title: "SaaS Overview", url: "/", icon: LayoutDashboard },
  { title: "Subscriptions", url: "/subscriptions", icon: BarChart3 },
];
const appItems = [
  { title: "Timeline", url: "/timeline", icon: Clock },
  { title: "Notifications", url: "/notifications", icon: Bell },
  { title: "Contacts", url: "/contacts", icon: Users },
  { title: "FAQ", url: "/faq", icon: HelpCircle },
];
const accountItems = [
  { title: "My Profile", url: "/profile", icon: User },
  { title: "Settings", url: "/settings", icon: Settings },
  { title: "Security", url: "/security", icon: Shield },
  { title: "Billing & Plans", url: "/billing", icon: CreditCard },
];

export function AppSidebar() {
  const { state } = useSidebar();
  const collapsed = state === "collapsed";
  const location = useLocation();
  const { mode, toggleMode, direction, toggleDirection, colorTheme, setColorTheme, showSidebarCaptions, toggleSidebarCaptions } = useTheme();

  const isActive = (path: string) => location.pathname === path;

  const renderGroup = (label: string, items: typeof dashboardItems) => (
    <SidebarGroup key={label}>
      {showSidebarCaptions && !collapsed && (
        <SidebarGroupLabel className="text-xs uppercase tracking-wider text-muted-foreground/60 mb-1">
          {label}
        </SidebarGroupLabel>
      )}
      <SidebarGroupContent>
        <SidebarMenu>
          {items.map((item) => (
            <SidebarMenuItem key={item.title}>
              <SidebarMenuButton asChild isActive={isActive(item.url)}>
                <NavLink
                  to={item.url}
                  end
                  className="flex items-center gap-3 px-3 py-2 rounded-md text-sm transition-colors hover:bg-accent"
                  activeClassName="bg-primary/10 text-primary font-medium"
                >
                  <item.icon className="h-4 w-4 flex-shrink-0" />
                  {!collapsed && <span>{item.title}</span>}
                </NavLink>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  );

  return (
    <Sidebar collapsible="icon" className="border-r border-sidebar-border">
      <SidebarContent className="custom-scrollbar">
        {/* Logo / Brand */}
        <div className="px-4 py-5 flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center flex-shrink-0">
            <span className="text-primary-foreground font-bold text-sm">S</span>
          </div>
          {!collapsed && (
            <span className="font-semibold text-foreground text-base tracking-tight">SaaSDash</span>
          )}
        </div>

        {renderGroup("Dashboards", dashboardItems)}
        {renderGroup("Apps", appItems)}
        {renderGroup("Account", accountItems)}
      </SidebarContent>

      {/* Footer: theme controls */}
      <SidebarFooter className="border-t border-sidebar-border p-3 space-y-2">
        {!collapsed && (
          <div className="flex flex-wrap gap-1.5">
            {/* Dark/Light toggle */}
            <button onClick={toggleMode} className="p-2 rounded-md hover:bg-accent transition-colors" title="Toggle theme">
              {mode === "dark" ? <Sun className="h-4 w-4 text-muted-foreground" /> : <Moon className="h-4 w-4 text-muted-foreground" />}
            </button>
            {/* RTL/LTR toggle */}
            <button onClick={toggleDirection} className="p-2 rounded-md hover:bg-accent transition-colors" title="Toggle direction">
              <ArrowLeftRight className="h-4 w-4 text-muted-foreground" />
            </button>
            {/* Captions toggle */}
            <button onClick={toggleSidebarCaptions} className="p-2 rounded-md hover:bg-accent transition-colors" title="Toggle captions">
              {showSidebarCaptions ? <EyeOff className="h-4 w-4 text-muted-foreground" /> : <Eye className="h-4 w-4 text-muted-foreground" />}
            </button>
            {/* Color picker */}
            <Popover>
              <PopoverTrigger asChild>
                <button className="p-2 rounded-md hover:bg-accent transition-colors" title="Color theme">
                  <Palette className="h-4 w-4 text-muted-foreground" />
                </button>
              </PopoverTrigger>
              <PopoverContent className="w-52 p-3" side="top" align="start">
                <p className="text-xs font-medium text-muted-foreground mb-2">Color Theme</p>
                <div className="grid grid-cols-6 gap-2">
                  {COLOR_THEMES.map((t) => (
                    <button
                      key={t.id}
                      onClick={() => setColorTheme(t.id)}
                      className={`w-7 h-7 rounded-full border-2 transition-transform hover:scale-110 ${
                        colorTheme === t.id ? "border-foreground scale-110" : "border-transparent"
                      }`}
                      style={{ background: `hsl(${t.primary})` }}
                      title={t.name}
                    />
                  ))}
                </div>
              </PopoverContent>
            </Popover>
          </div>
        )}
      </SidebarFooter>
    </Sidebar>
  );
}
