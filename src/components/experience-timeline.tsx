import { motion } from "framer-motion";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";

const experiences = [
  {
    title: "Infrastructure and Applications Support Assistant",
    company: "Kim-Fay E.A Limited",
    period: "March 2025 - October 2025",
    description:
      "Developing internal web applications for process automation, supporting enterprise systems like MyQ and 3CX, administering Active Directory and Microsoft 365 platforms, implementing firewall rules and network optimization.",
    technologies: ["Laravel", "C#", "Active Directory", "Microsoft 365"],
  },
  {
    title: "ICT Officer Intern",
    company: "Kenya Revenue Authority - Forodha, JKIA",
    period: "January 2024 - December 2024",
    description:
      "Led team operations as station leader, deployed VPN configurations, troubleshot VDI systems (Huawei Fusion Access and Citrix), and resolved network connectivity issues for seamless access to network resources.",
    technologies: ["VPN", "Huawei Fusion", "Citrix", "Network Admin"],
  },
  {
    title: "Graphic Designer/Social Media Manager Intern",
    company: "Voltic Kenya Limited",
    period: "August 2023 - December 2023",
    description:
      "Maintained brand visual identity, created marketing materials including posters and digital banners, managed social media accounts and developed growth strategies that significantly increased brand visibility and followers.",
    technologies: ["Graphic Design", "Social Media", "Brand Management"],
  },
];

export default function ExperienceTimeline() {
  const { ref, isVisible } = useIntersectionObserver({ threshold: 0.1 });

  return (
    <section
      id="experience"
      className="py-16 bg-slate-800 text-white"
      ref={ref}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Professional Experience
          </h2>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto">
            A journey through innovative companies and challenging projects
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Center line - hidden on small screens */}
          <div className="hidden md:block absolute left-1/2 top-0 h-full w-1 bg-gradient-to-b from-primary to-secondary transform -translate-x-1/2" />

          <div className="space-y-16">
            {experiences.map((experience, index) => {
              const isLeft = index % 2 === 0; // alternate sides (only for md+)

              return (
                <motion.div
                  key={experience.title + experience.company}
                  initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
                  animate={isVisible ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className={`relative flex w-full ${
                    isLeft ? "md:justify-start" : "md:justify-end"
                  }`}
                  data-testid={`experience-${index}`}
                >
                  {/* Dot - hidden on small screens */}
                  <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full bg-primary border-4 border-slate-800 shadow-lg z-10" />

                  {/* Content card */}
                  <motion.div
                    whileHover={{ scale: 1.03 }}
                    className={`w-full md:w-5/12 bg-slate-700/50 backdrop-blur-sm rounded-xl p-6 shadow-lg transition-all duration-300 hover:bg-slate-700/70 ${
                      isLeft ? "md:mr-auto" : "md:ml-auto"
                    }`}
                  >
                    <div className="flex flex-col mb-4">
                      <h3 className="text-xl font-bold text-white mb-1">
                        {experience.title}
                      </h3>
                      <p className="text-accent font-semibold">
                        {experience.company}
                      </p>
                      <span className="text-slate-300 text-sm mt-1">
                        {experience.period}
                      </span>
                    </div>
                    <p className="text-slate-300 mb-4 leading-relaxed">
                      {experience.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {experience.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="bg-primary/20 text-primary px-3 py-1 rounded-full text-sm border border-primary/30"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
