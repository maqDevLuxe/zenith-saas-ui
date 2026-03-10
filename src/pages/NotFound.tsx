import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Home } from "lucide-react";

const NotFound = () => (
  <div className="min-h-screen flex items-center justify-center bg-background p-4 relative overflow-hidden">
    <div className="absolute top-1/3 left-1/3 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      className="glass-card rounded-2xl p-10 text-center max-w-md relative z-10"
    >
      <p className="text-7xl font-bold gradient-text mb-4">404</p>
      <h2 className="text-xl font-bold text-foreground mb-2">Page Not Found</h2>
      <p className="text-sm text-muted-foreground mb-6">The page you're looking for doesn't exist or has been moved.</p>
      <Link
        to="/"
        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-primary text-primary-foreground text-sm font-medium hover:bg-primary/90 transition-colors"
      >
        <Home className="h-4 w-4" /> Back to Dashboard
      </Link>
    </motion.div>
  </div>
);

export default NotFound;
