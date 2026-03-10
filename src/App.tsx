/**
 * App — Root component with routing and theme provider.
 */
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@/contexts/ThemeContext";

/* Pages */
import Dashboard from "./pages/Dashboard";
import SubscriptionAnalytics from "./pages/SubscriptionAnalytics";
import Timeline from "./pages/Timeline";
import Notifications from "./pages/Notifications";
import Contacts from "./pages/Contacts";
import FAQ from "./pages/FAQ";
import Profile from "./pages/Profile";
import SettingsPage from "./pages/SettingsPage";
import Security from "./pages/Security";
import Billing from "./pages/Billing";
import Login from "./pages/Login";
import Register from "./pages/Register";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <ThemeProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            {/* Dashboard */}
            <Route path="/" element={<Dashboard />} />
            <Route path="/subscriptions" element={<SubscriptionAnalytics />} />
            {/* Apps */}
            <Route path="/timeline" element={<Timeline />} />
            <Route path="/notifications" element={<Notifications />} />
            <Route path="/contacts" element={<Contacts />} />
            <Route path="/faq" element={<FAQ />} />
            {/* Account */}
            <Route path="/profile" element={<Profile />} />
            <Route path="/settings" element={<SettingsPage />} />
            <Route path="/security" element={<Security />} />
            <Route path="/billing" element={<Billing />} />
            {/* Auth */}
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            {/* Catch-all */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </ThemeProvider>
);

export default App;
