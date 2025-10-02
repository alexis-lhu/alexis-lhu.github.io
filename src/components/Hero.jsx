import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone } from "react-icons/fa";

const Hero = () => {
  const socialLinks = [
    { icon: FaGithub, href: "https://github.com/alexis-lhu", label: "GitHub" },
    {
      icon: FaLinkedin,
      href: "https://linkedin.com/in/alexis-lhussiez",
      label: "LinkedIn",
    },
    { icon: FaEnvelope, href: "mailto:alexis.lhuegmail.com", label: "Email" },
    { icon: FaPhone, href: "tel:0770408227", label: "Téléphone" },
  ];

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-800 via-gray-700 to-gray-800">
        <div className="absolute inset-0 bg-gradient-to-r from-rose-200/10 to-rose-100/5"></div>
      </div>

      {/* Animated circles */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute top-20 right-20 w-72 h-72 bg-rose-200/10 rounded-full blur-3xl"
      />
      <motion.div
        animate={{
          scale: [1.2, 1, 1.2],
          rotate: [360, 180, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute bottom-20 left-20 w-96 h-96 bg-rose-100/10 rounded-full blur-3xl"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          {/* Avatar */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            className="flex justify-center"
          >
            <div className="w-40 h-40 rounded-full bg-gradient-to-br from-rose-200 to-rose-100 p-1">
              <div className="w-full h-full rounded-full bg-gray-800 flex items-center justify-center">
                <span className="text-6xl font-bold gradient-text">AL</span>
              </div>
            </div>
          </motion.div>

          {/* Name and Title */}
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-5xl md:text-7xl font-display font-bold mb-4"
            >
              <span className="gradient-text">Alexis Lhussiez</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-xl md:text-2xl text-gray-300"
            >
              Développeur Web Fullstack
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-lg text-gray-400 mt-2"
            >
              Étudiant JUNIA XP - Métropole Lilloise
            </motion.p>
          </div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="flex justify-center space-x-6"
          >
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, y: -5 }}
                whileTap={{ scale: 0.9 }}
                className="text-3xl text-gray-300 hover:text-rose-200 transition-colors"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 + index * 0.1 }}
              >
                <social.icon />
              </motion.a>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="flex justify-center space-x-4 mt-8"
          >
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-gradient-to-r from-rose-200 to-rose-100 text-gray-800 font-semibold rounded-full shadow-lg hover:shadow-rose-200/50 transition-shadow"
            >
              Me contacter
            </motion.a>
            <motion.a
              href="#about"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 glass text-rose-200 font-semibold rounded-full border-2 border-rose-200/30 hover:border-rose-200/60 transition-colors"
            >
              En savoir plus
            </motion.a>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;
