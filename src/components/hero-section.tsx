import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section id="about" className="pt-24 pb-16 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl lg:text-6xl font-bold text-slate-800 mb-6">
              Hi, I'm <span className="text-primary">Brian</span>
              <div className="text-2xl lg:text-4xl text-secondary mt-2">ICT Officer</div>
            </h1>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              Dynamic and results-oriented ICT professional with hands-on experience in system 
              administration, network security, virtualization, and technical user support. 
              Committed to enhancing operational efficiency and delivering user-centric IT support.
            </p>
            {/* <div className="flex flex-wrap gap-4">
              <motion.a
                href="/attached_assets/ORORI_BRIAN_ATHANAS-CV.pdf" 
                download="ORORI_BRIAN_ATHANAS-CV.pdf" 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-primary text-primary px-8 py-3 rounded-lg hover:bg-primary hover:text-white transition-all duration-300 cursor-pointer inline-block"
                data-testid="button-download-cv"
              >
                Download CV
              </motion.a>
          </div> */}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex justify-center"
          >
            <div className="w-80 h-80 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center shadow-2xl border-8 border-white">
              <div className="text-8xl font-bold text-primary">B</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
