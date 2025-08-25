import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-400 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <p>&copy; 2024 Brian Athanas Orori. All rights reserved. Built with passion and modern web technologies.</p>
        </motion.div>
      </div>
    </footer>
  );
}
