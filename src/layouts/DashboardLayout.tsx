/**
 * DashboardLayout — Wraps all dashboard pages with sidebar + header.
 */
import { ReactNode } from "react";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import NotificationPanel from "@/components/NotificationPanel";
import { Bell, Search } from "lucide-react";

interface DashboardLayoutProps {
  children: ReactNode;
  title?: string;
}

const DashboardLayout = ({ children, title }: DashboardLayoutProps) => (
  <SidebarProvider>
    <div className="min-h-screen flex w-full">
      <AppSidebar />
      <div className="flex-1 flex flex-col min-w-0">
        {/* Top header bar */}
        <header className="h-14 flex items-center justify-between border-b border-border px-4 bg-background/80 backdrop-blur-sm sticky top-0 z-30">
          <div className="flex items-center gap-3">
            <SidebarTrigger className="text-muted-foreground hover:text-foreground" />
            {title && <h1 className="text-base font-semibold text-foreground hidden sm:block">{title}</h1>}
          </div>
          <div className="flex items-center gap-2">
            {/* Search */}
            <button className="p-2 rounded-md hover:bg-accent transition-colors">
              <Search className="h-4 w-4 text-muted-foreground" />
            </button>
            {/* Notifications */}
            <Popover>
              <PopoverTrigger asChild>
                <button className="p-2 rounded-md hover:bg-accent transition-colors relative">
                  <Bell className="h-4 w-4 text-muted-foreground" />
                  <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-destructive" />
                </button>
              </PopoverTrigger>
              <PopoverContent className="p-0 border-border" align="end" sideOffset={8}>
                <NotificationPanel />
              </PopoverContent>
            </Popover>
            {/* Avatar */}
            <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center ml-1">
              <span className="text-xs font-semibold text-primary">JD</span>
            </div>
          </div>
        </header>
        {/* Page content */}
        <main className="flex-1 p-4 md:p-6 overflow-auto custom-scrollbar">
          {children}
        </main>
      </div>
    </div>
  </SidebarProvider>
);

export default DashboardLayout;
