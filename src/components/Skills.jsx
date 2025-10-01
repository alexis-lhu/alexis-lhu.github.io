import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
  FaReact,
  FaPhp,
  FaPython,
  FaJs,
  FaDatabase,
  FaCode,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiSymfony,
  SiMysql,
  SiFlutter,
  SiCsharp,
  SiDart,
} from "react-icons/si";

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const skillCategories = [
    {
      title: "Front-End",
      icon: FaReact,
      color: "from-rose-200 to-rose-100",
      skills: [
        { name: "JavaScript", level: 85 },
        { name: "React.js", level: 80 },
        { name: "React Native", level: 75 },
        { name: "Flutter", level: 70 },
        { name: "PrestaShop", level: 65 },
      ],
    },
    {
      title: "Back-End & BDD",
      icon: FaDatabase,
      color: "from-rose-100 to-rose-200",
      skills: [
        { name: "PHP", level: 85 },
        { name: "Symfony", level: 75 },
        { name: "Vue.js", level: 70 },
        { name: "MySQL", level: 80 },
      ],
    },
    {
      title: "Langages",
      icon: FaCode,
      color: "from-rose-200 to-rose-50",
      skills: [
        { name: "Python", level: 75 },
        { name: "C#", level: 70 },
        { name: "Dart", level: 70 },
      ],
    },
    {
      title: "Soft Skills",
      icon: FaJs,
      color: "from-rose-100 to-rose-200",
      skills: [
        { name: "Communication", level: 90 },
        { name: "Patience", level: 90 },
        { name: "Persévérance", level: 95 },
        { name: "Autonomie", level: 85 },
        { name: "Curiosité", level: 95 },
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gray-700/30"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold text-center mb-16">
            <span className="gradient-text">Compétences</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
                }
                transition={{ delay: categoryIndex * 0.1 }}
                className="glass p-8 rounded-2xl"
              >
                <div className="flex items-center mb-6">
                  <div
                    className={`p-3 rounded-lg bg-gradient-to-r ${category.color} mr-4`}
                  >
                    <category.icon className="text-2xl text-gray-800" />
                  </div>
                  <h3 className="text-2xl font-display font-semibold gradient-text">
                    {category.title}
                  </h3>
                </div>

                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skill.name}>
                      <div className="flex justify-between mb-2">
                        <span className="text-gray-300">{skill.name}</span>
                        <span className="text-rose-200 font-semibold">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="h-2 bg-gray-600 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={
                            isInView
                              ? { width: `${skill.level}%` }
                              : { width: 0 }
                          }
                          transition={{
                            delay:
                              categoryIndex * 0.1 + skillIndex * 0.05 + 0.3,
                            duration: 0.8,
                            ease: "easeOut",
                          }}
                          className={`h-full bg-gradient-to-r ${category.color} rounded-full`}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
