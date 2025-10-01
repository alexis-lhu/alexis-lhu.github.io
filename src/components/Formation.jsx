import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { FaGraduationCap } from "react-icons/fa";

const Formation = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const formations = [
    {
      degree: "Bachelor Concepteur d'application",
      school: "JUNIA XP",
      period: "Septembre 2025 - Septembre 2026",
      status: "À venir",
      description:
        "Formation en alternance - Rythme : 2 semaines en entreprise / 1 semaine en formation",
    },
    {
      degree: "BTS SIO option développement",
      school: "EPSI Lille",
      period: "Septembre 2022 - Juin 2024",
      status: "Diplômé",
      description:
        "Services Informatiques aux Organisations - Spécialité Solutions Logicielles et Applications Métiers",
    },
    {
      degree: "Baccalauréat Général",
      school: "Lycée Privé Saint-Rémi",
      period: "Septembre 2019 - Juin 2022",
      status: "Obtenu",
      description: "Formation générale",
    },
  ];

  return (
    <section id="formation" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gray-700/30"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold text-center mb-16">
            <span className="gradient-text">Formation</span>
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {formations.map((formation, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
                }
                transition={{ delay: index * 0.2 }}
                whileHover={{ scale: 1.03, y: -10 }}
                className="glass p-8 rounded-2xl relative overflow-hidden group"
              >
                {/* Gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-rose-200/10 to-rose-100/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                <div className="relative z-10">
                  {/* Icon */}
                  <div className="flex justify-between items-start mb-6">
                    <div className="p-4 bg-gradient-to-r from-rose-200 to-rose-100 rounded-xl">
                      <FaGraduationCap className="text-3xl text-gray-800" />
                    </div>
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        formation.status === "À venir"
                          ? "bg-blue-500/20 text-blue-300"
                          : formation.status === "Diplômé"
                          ? "bg-green-500/20 text-green-300"
                          : "bg-rose-200/20 text-rose-200"
                      }`}
                    >
                      {formation.status}
                    </span>
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-display font-semibold text-white mb-2">
                    {formation.degree}
                  </h3>
                  <p className="text-rose-200 font-medium mb-3">
                    {formation.school}
                  </p>
                  <p className="text-gray-400 text-sm mb-4">
                    {formation.period}
                  </p>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {formation.description}
                  </p>
                </div>

                {/* Decorative element */}
                <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-gradient-to-br from-rose-200/10 to-transparent rounded-full blur-2xl"></div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Formation;
