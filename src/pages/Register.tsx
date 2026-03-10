/**
 * Register — Modern floating card signup page.
 */
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Mail, Lock, User, ArrowRight } from "lucide-react";

const Register = () => (
  <div className="min-h-screen flex items-center justify-center bg-background p-4 relative overflow-hidden">
    <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />

    <motion.div
      initial={{ opacity: 0, y: 30, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="glass-card rounded-2xl p-8 w-full max-w-md relative z-10"
    >
      <div className="flex items-center gap-3 mb-8">
        <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center">
          <span className="text-primary-foreground font-bold text-lg">S</span>
        </div>
        <span className="text-xl font-bold text-foreground">SaaSDash</span>
      </div>

      <h2 className="text-2xl font-bold text-foreground mb-1">Create an account</h2>
      <p className="text-sm text-muted-foreground mb-6">Start your 14-day free trial</p>

      <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
        <div className="relative">
          <User className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <input type="text" placeholder="Full name" className="w-full pl-10 pr-4 py-3 rounded-lg bg-secondary border border-border text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-shadow" />
        </div>
        <div className="relative">
          <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <input type="email" placeholder="Email address" className="w-full pl-10 pr-4 py-3 rounded-lg bg-secondary border border-border text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-shadow" />
        </div>
        <div className="relative">
          <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <input type="password" placeholder="Password" className="w-full pl-10 pr-4 py-3 rounded-lg bg-secondary border border-border text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-shadow" />
        </div>

        <button className="magnetic-btn w-full py-3 rounded-lg bg-primary text-primary-foreground font-medium text-sm flex items-center justify-center gap-2 hover:bg-primary/90 transition-colors glow-primary">
          Create Account <ArrowRight className="h-4 w-4" />
        </button>
      </form>

      <p className="text-center text-sm text-muted-foreground mt-6">
        Already have an account? <Link to="/login" className="text-primary hover:underline font-medium">Sign in</Link>
      </p>
    </motion.div>
  </div>
);

export default Register;
