/**
 * Login — Modern floating card auth page.
 */
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Mail, Lock, ArrowRight } from "lucide-react";

const Login = () => (
  <div className="min-h-screen flex items-center justify-center bg-background p-4 relative overflow-hidden">
    {/* Ambient glow */}
    <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
    <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />

    <motion.div
      initial={{ opacity: 0, y: 30, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="glass-card rounded-2xl p-8 w-full max-w-md relative z-10"
    >
      {/* Brand */}
      <div className="flex items-center gap-3 mb-8">
        <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center">
          <span className="text-primary-foreground font-bold text-lg">S</span>
        </div>
        <span className="text-xl font-bold text-foreground">SaaSDash</span>
      </div>

      <h2 className="text-2xl font-bold text-foreground mb-1">Welcome back</h2>
      <p className="text-sm text-muted-foreground mb-6">Sign in to your account to continue</p>

      <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
        <div className="relative">
          <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <input
            type="email"
            placeholder="Email address"
            className="w-full pl-10 pr-4 py-3 rounded-lg bg-secondary border border-border text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-shadow"
          />
        </div>
        <div className="relative">
          <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <input
            type="password"
            placeholder="Password"
            className="w-full pl-10 pr-4 py-3 rounded-lg bg-secondary border border-border text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-shadow"
          />
        </div>

        <div className="flex items-center justify-between text-sm">
          <label className="flex items-center gap-2 text-muted-foreground cursor-pointer">
            <input type="checkbox" className="rounded border-border" /> Remember me
          </label>
          <Link to="/forgot-password" className="text-primary hover:underline">Forgot password?</Link>
        </div>

        <button className="magnetic-btn w-full py-3 rounded-lg bg-primary text-primary-foreground font-medium text-sm flex items-center justify-center gap-2 hover:bg-primary/90 transition-colors glow-primary">
          Sign In <ArrowRight className="h-4 w-4" />
        </button>
      </form>

      <p className="text-center text-sm text-muted-foreground mt-6">
        Don't have an account? <Link to="/register" className="text-primary hover:underline font-medium">Sign up</Link>
      </p>
    </motion.div>
  </div>
);

export default Login;
