import { motion } from "framer-motion";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "Enterprise Network Infrastructure",
    description: "Designed and implemented secure network infrastructure for Kim-Fay E.A Limited, including firewall configuration, VPN setup, and Active Directory integration.",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=300",
    technologies: ["Active Directory", "Firewall", "VPN", "Network Security"],
    demoUrl: "#",
    githubUrl: "#"
  },
  {
    title: "Process Automation Web Application",
    description: "Developed internal web applications using Laravel and C# for process automation at Kim-Fay E.A Limited, streamlining workflow management and reducing manual tasks by 40%.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=300",
    technologies: ["Laravel", "C#", "SQL", "Web Development"],
    demoUrl: "#",
    githubUrl: "#"
  },
  {
    title: "VDI Troubleshooting System",
    description: "Led troubleshooting initiatives for Virtual Desktop Infrastructure at KRA, working with Huawei Fusion Access and Citrix systems to ensure 99.5% uptime for critical operations.",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=300",
    technologies: ["Huawei Fusion", "Citrix", "VDI", "System Administration"],
    demoUrl: "#",
    githubUrl: "#"
  },
  {
    title: "Brand Digital Strategy Platform",
    description: "Created comprehensive digital marketing strategy for Voltic Kenya Limited, including social media management tools and brand asset creation that increased followers by 150%.",
    image: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=300",
    technologies: ["Graphic Design", "Social Media", "Brand Management", "Digital Marketing"],
    demoUrl: "#",
    githubUrl: "#"
  }
];

const techColors: Record<string, string> = {
  "Active Directory": "bg-blue-100 text-blue-800",
  "Firewall": "bg-red-100 text-red-800",
  "VPN": "bg-green-100 text-green-800",
  "Network Security": "bg-purple-100 text-purple-800",
  "Laravel": "bg-red-100 text-red-800",
  "C#": "bg-purple-100 text-purple-800",
  "SQL": "bg-orange-100 text-orange-800",
  "Web Development": "bg-cyan-100 text-cyan-800",
  "Huawei Fusion": "bg-indigo-100 text-indigo-800",
  "Citrix": "bg-green-100 text-green-800",
  "VDI": "bg-blue-100 text-blue-800",
  "System Administration": "bg-gray-100 text-gray-800",
  "Graphic Design": "bg-pink-100 text-pink-800",
  "Social Media": "bg-cyan-100 text-cyan-800",
  "Brand Management": "bg-yellow-100 text-yellow-800",
  "Digital Marketing": "bg-green-100 text-green-800"
};

export default function ProjectsGallery() {
  const { ref, isVisible } = useIntersectionObserver({ threshold: 0.1 });

  return (
    <section id="projects" className="py-16 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
        </motion.div>

        
      </div>
    </section>
  );
}
