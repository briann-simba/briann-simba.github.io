import { motion } from "framer-motion";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import { GraduationCap, Award, Code, TrendingUp } from "lucide-react";

const educationData = [
  {
    title: "Bachelor of Science in Computer Science",
    institution: "Jomo Kenyatta University of Agriculture and Technology",
    description: "Second Class Honors (Upper Division) - Comprehensive computer science education",
    period: "2018 - 2022",
    grade: "Second Class Upper",
    icon: GraduationCap,
    color: "primary"
  },
  {
    title: "Huawei Certified ICT Associate (HCIA) - Security",
    institution: "Communications Authority of Kenya (CAK)",
    description: "National finalist in cybersecurity bootcamp - intensive enterprise security training",
    period: "2025",
    grade: "Finalist - 734/1000",
    icon: Award,
    color: "red"
  },
  {
    title: "Cyber Shujaa Certification",
    institution: "CyberShujaa",
    description: "Cloud and Network Security certification with hands-on experience",
    period: "2024",
    grade: "Distinction",
    icon: Code,
    color: "accent"
  },
  {
    title: "Google Cybersecurity Certificate",
    institution: "Coursera & ICT Authority Kenya",
    description: "Comprehensive cybersecurity and emerging technologies training",
    period: "2024",
    grade: "Certified",
    icon: TrendingUp,
    color: "green"
  }
];

const colorClasses: Record<string, string> = {
  primary: "bg-primary text-white",
  accent: "bg-accent text-white",
  green: "bg-green-600 text-white",
  red: "bg-red-600 text-white"
};

const gradeColors: Record<string, string> = {
  "Second Class Upper": "bg-green-100 text-green-800",
  "Finalist - 734/1000": "bg-red-100 text-red-800",
  "Distinction": "bg-blue-100 text-blue-800",
  "Certified": "bg-green-100 text-green-800"
};

export default function EducationSection() {
  const { ref, isVisible } = useIntersectionObserver({ threshold: 0.1 });

  return (
    <section className="py-16 bg-slate-100" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-800 mb-4">Education & Certifications</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Continuous learning and professional development
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {educationData.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 50 }}
                  animate={isVisible ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -4, scale: 1.02 }}
                  className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 cursor-pointer"
                  data-testid={`education-card-${index}`}
                >
                  <div className="flex items-center mb-6">
                    <div className={`rounded-full p-3 mr-4 ${colorClasses[item.color]}`}>
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-slate-800">{item.title}</h3>
                      <p className="text-slate-600">{item.institution}</p>
                    </div>
                  </div>
                  <p className="text-slate-600 mb-4">{item.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-primary font-semibold">{item.period}</span>
                    <span className={`px-3 py-1 rounded-full text-sm ${gradeColors[item.grade]}`}>
                      {item.grade}
                    </span>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
