import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const stats = [
    { label: "Années d'études", value: "3+" },
    { label: "Projets", value: "10+" },
    { label: "Technologies", value: "15+" },
    { label: "Expériences", value: "3" },
  ];

  return (
    <section id="about" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-800 to-gray-700/50"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold text-center mb-16">
            <span className="gradient-text">À propos de moi</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-6"
            >
              <div className="glass p-8 rounded-2xl">
                <p className="text-lg text-gray-300 leading-relaxed">
                  Actuellement titulaire d'un BTS, je souhaite poursuivre mes
                  études en troisième année en apprentissage à partir d'août
                  2025 dans un rythme{" "}
                  <span className="text-rose-200 font-semibold">
                    2 semaines en entreprise / 1 semaine en formation
                  </span>
                  .
                </p>
                <p className="text-lg text-gray-300 leading-relaxed mt-4">
                  Chaque jour, l'excitation d'apprendre me motive à explorer et
                  repousser mes limites techniques. Je m'intègre naturellement
                  dans une ambiance calme et dynamique, où l'entraide et la
                  bonne humeur favorisent la réussite collective.
                </p>
              </div>

              <div className="flex flex-wrap gap-3">
                {["Permis B", "Véhiculé", "Anglais B2", "Portugais A2"].map(
                  (tag, index) => (
                    <motion.span
                      key={tag}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={
                        isInView
                          ? { opacity: 1, scale: 1 }
                          : { opacity: 0, scale: 0 }
                      }
                      transition={{ delay: 0.4 + index * 0.1 }}
                      className="px-4 py-2 glass rounded-full text-rose-200 text-sm font-medium"
                    >
                      {tag}
                    </motion.span>
                  )
                )}
              </div>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="grid grid-cols-2 gap-6"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={
                    isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                  }
                  transition={{ delay: 0.5 + index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="glass p-6 rounded-2xl text-center"
                >
                  <div className="text-4xl font-bold gradient-text mb-2">
                    {stat.value}
                  </div>
                  <div className="text-gray-400 text-sm">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
