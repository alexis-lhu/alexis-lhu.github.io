import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope, FaHeart } from "react-icons/fa";

const Footer = () => {
  const socialLinks = [
    { icon: FaGithub, href: "https://github.com/alexis-lhu", label: "GitHub" },
    {
      icon: FaLinkedin,
      href: "https://linkedin.com/in/alexis-lhussiez",
      label: "LinkedIn",
    },
    { icon: FaEnvelope, href: "mailto:alexis.lhuegmail.com", label: "Email" },
  ];

  const interests = ["Informatique", "Sports mécaniques", "Football"];

  return (
    <footer className="relative overflow-hidden bg-gray-800 border-t border-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-display font-bold gradient-text mb-4">
              Alexis Lhussiez
            </h3>
            <p className="text-gray-400">
              Développeur Web Fullstack passionné, à la recherche d'une
              alternance pour août 2025.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-display font-semibold text-white mb-4">
              Navigation
            </h4>
            <ul className="space-y-2">
              {[
                "Accueil",
                "À propos",
                "Compétences",
                "Expériences",
                "Formation",
                "Contact",
              ].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item
                      .toLowerCase()
                      .normalize("NFD")
                      .replace(/[\u0300-\u036f]/g, "")
                      .replace(/\s+/g, "")}`}
                    className="text-gray-400 hover:text-rose-200 transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Interests */}
          <div>
            <h4 className="text-lg font-display font-semibold text-white mb-4">
              Centres d'intérêt
            </h4>
            <div className="flex flex-wrap gap-2">
              {interests.map((interest) => (
                <span
                  key={interest}
                  className="px-3 py-1 glass rounded-full text-rose-200 text-sm"
                >
                  {interest}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Social Links */}
        <div className="flex justify-center space-x-6 mb-8">
          {socialLinks.map((social) => (
            <motion.a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, y: -5 }}
              whileTap={{ scale: 0.9 }}
              className="p-3 glass rounded-full text-gray-300 hover:text-rose-200 transition-colors"
            >
              <social.icon className="text-xl" />
            </motion.a>
          ))}
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 pt-8 text-center">
          <p className="text-gray-400 flex items-center justify-center">
            Créé avec <FaHeart className="text-rose-200 mx-2" /> par Alexis
            Lhussiez © {new Date().getFullYear()}
          </p>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-rose-200/10 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-rose-100/10 rounded-full blur-3xl"></div>
    </footer>
  );
};

export default Footer;
