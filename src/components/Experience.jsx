import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { FaBriefcase, FaCode, FaShoppingCart } from "react-icons/fa";

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const experiences = [
    {
      type: "CDI",
      title: "Employé Polyvalent",
      company: "Monoprix Croix Laroche",
      period: "Avril 2023 - Présent",
      icon: FaShoppingCart,
      description: [
        "Expérience en milieu professionnel",
        "Maîtrise des processus internes",
        "Contact avec la clientèle, encaissement, remboursement",
        "Gestion accueil",
        "Gestion équipe caisse",
      ],
      technologies: [],
    },
    {
      type: "Stage",
      title: "Développeur Web",
      company: "SATI TREK",
      period: "Janvier 2024 - Février 2024",
      icon: FaCode,
      description: [
        "Respect des contraintes et du cahier des charges",
        "Capacité à communiquer efficacement avec l'équipe et le tuteur",
        "Collaboration fluide en environnement professionnel",
        "Création d'un site web",
        "Pages dynamique avec CMS",
      ],
      technologies: ["Wix"],
    },
    {
      type: "Stage",
      title: "Développeur Fullstack",
      company: "DEBRA'S INDUSTRY",
      period: "Mai 2023 - Juin 2023",
      icon: FaCode,
      description: [
        "Respect des contraintes et du cahier des charges",
        "Collaboration fluide en environnement professionnel",
        "Communication principalement en anglais",
        "Apprentissage JavaScript",
        "Développement jeux interactifs et éducatifs",
      ],
      technologies: ["DevOps", "HTML/CSS", "JavaScript"],
    },
  ];

  return (
    <section id="experience" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-700/50 to-gray-800"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold text-center mb-16">
            <span className="gradient-text">Expériences Professionnelles</span>
          </h2>

          <div className="relative">
            {/* Timeline line */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-rose-200 via-rose-100 to-rose-200"></div>

            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  animate={
                    isInView
                      ? { opacity: 1, x: 0 }
                      : { opacity: 0, x: index % 2 === 0 ? -50 : 50 }
                  }
                  transition={{ delay: index * 0.2 }}
                  className={`flex flex-col md:flex-row items-center gap-8 ${
                    index % 2 === 0 ? "md:flex-row-reverse" : ""
                  }`}
                >
                  {/* Card */}
                  <div className="w-full md:w-5/12">
                    <motion.div
                      whileHover={{ scale: 1.02, y: -5 }}
                      className="glass p-6 rounded-2xl"
                    >
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex items-center">
                          <div className="p-3 bg-gradient-to-r from-rose-200 to-rose-100 rounded-lg mr-4">
                            <exp.icon className="text-2xl text-gray-800" />
                          </div>
                          <div>
                            <span className="px-3 py-1 bg-rose-200/20 text-rose-200 text-xs font-semibold rounded-full">
                              {exp.type}
                            </span>
                            <h3 className="text-xl font-display font-semibold text-white mt-2">
                              {exp.title}
                            </h3>
                            <p className="text-rose-200 font-medium">
                              {exp.company}
                            </p>
                          </div>
                        </div>
                      </div>

                      <p className="text-gray-400 text-sm mb-4">{exp.period}</p>

                      <ul className="space-y-2 mb-4">
                        {exp.description.map((item, i) => (
                          <li
                            key={i}
                            className="text-gray-300 text-sm flex items-start"
                          >
                            <span className="text-rose-200 mr-2">•</span>
                            {item}
                          </li>
                        ))}
                      </ul>

                      {exp.technologies.length > 0 && (
                        <div className="flex flex-wrap gap-2">
                          {exp.technologies.map((tech, i) => (
                            <span
                              key={i}
                              className="px-3 py-1 bg-gray-700 text-rose-200 text-xs rounded-full"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      )}
                    </motion.div>
                  </div>

                  {/* Timeline dot */}
                  <div className="hidden md:block w-2/12 flex justify-center">
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={isInView ? { scale: 1 } : { scale: 0 }}
                      transition={{ delay: index * 0.2 + 0.3 }}
                      className="w-6 h-6 bg-gradient-to-r from-rose-200 to-rose-100 rounded-full border-4 border-gray-800 shadow-lg shadow-rose-200/50"
                    />
                  </div>

                  {/* Empty space for alternating layout */}
                  <div className="hidden md:block w-5/12"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
