
import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
  const socialLinks = [
    { name: 'LinkedIn', href: '#', icon: '💼' },
    { name: 'Facebook', href: '#', icon: '📘' },
    { name: 'Twitter', href: '#', icon: '🐦' },
    { name: 'Instagram', href: '#', icon: '📷' }
  ];

  const footerLinks = [
    {
      title: 'Firma',
      links: [
        { name: 'O nas', href: '#about' },
        { name: 'Kariera', href: '#jobs' },
        { name: 'Blog', href: '#' },
        { name: 'Kontakt', href: '#contact' }
      ]
    },
    {
      title: 'Rekrutacja',
      links: [
        { name: 'Proces rekrutacji', href: '#recruitment' },
        { name: 'Benefity', href: '#benefits' },
        { name: 'Oferty pracy', href: '#jobs' },
        { name: 'FAQ', href: '#' }
      ]
    },
    {
      title: 'Prawne',
      links: [
        { name: 'Polityka prywatności', href: '#' },
        { name: 'Regulamin', href: '#' },
        { name: 'RODO', href: '#' },
        { name: 'Cookies', href: '#' }
      ]
    }
  ];

  return (
    <footer className="relative bg-tech-darker/90 backdrop-blur-sm border-t border-white/10">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(30deg, transparent 48%, rgba(0,212,255,0.1) 49%, rgba(0,212,255,0.1) 51%, transparent 52%),
            linear-gradient(-30deg, transparent 48%, rgba(20,255,236,0.1) 49%, rgba(20,255,236,0.1) 51%, transparent 52%)
          `,
          backgroundSize: '60px 60px'
        }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Left Column - Brand & Description */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="mb-8">
                <h3 className="text-3xl font-bold text-gradient mb-4">
                  TechFlow
                </h3>
                <p className="text-gray-400 leading-relaxed max-w-md">
                  Tworzymy przyszłość technologii i budujemy zespół najlepszych specjalistów IT. 
                  Dołącz do nas i rozwijaj swoją karierę w dynamicznym środowisku pełnym wyzwań.
                </p>
              </div>

              {/* Contact Info */}
              <div className="mb-8">
                <h4 className="text-white font-semibold mb-4">Skontaktuj się z nami</h4>
                <div className="space-y-2 text-gray-400">
                  <p>📧 hr@techflow.dev</p>
                  <p>📞 +48 123 456 789</p>
                  <p>📍 ul. Technologiczna 42, Bielsko-Biała</p>
                </div>
              </div>

              {/* Social Links */}
              <div>
                <h4 className="text-white font-semibold mb-4">Śledź nas</h4>
                <div className="flex space-x-4">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={social.name}
                      href={social.href}
                      className="w-12 h-12 bg-tech-gray/50 backdrop-blur-sm border border-white/10 rounded-full flex items-center justify-center text-xl hover:border-tech-blue hover:bg-tech-blue/20 transition-all duration-300"
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <span>{social.icon}</span>
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Right Column - Links */}
            <motion.div
              className="grid sm:grid-cols-3 gap-8"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              {footerLinks.map((section, sectionIndex) => (
                <div key={section.title}>
                  <h4 className="text-white font-semibold mb-4">
                    {section.title}
                  </h4>
                  <ul className="space-y-3">
                    {section.links.map((link, linkIndex) => (
                      <motion.li
                        key={link.name}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: (sectionIndex * 0.1) + (linkIndex * 0.05) }}
                        viewport={{ once: true }}
                      >
                        <a
                          href={link.href}
                          className="text-gray-400 hover:text-tech-blue transition-colors duration-300 text-sm"
                        >
                          {link.name}
                        </a>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          className="py-8 border-t border-white/10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © 2024 TechFlow. Wszystkie prawa zastrzeżone.
            </div>
            
            <div className="flex items-center space-x-6 text-sm text-gray-400">
              <a href="#" className="hover:text-tech-blue transition-colors duration-300">
                Polityka prywatności
              </a>
              <span className="text-gray-600">•</span>
              <a href="#" className="hover:text-tech-blue transition-colors duration-300">
                Regulamin
              </a>
              <span className="text-gray-600">•</span>
              <a href="#" className="hover:text-tech-blue transition-colors duration-300">
                Cookies
              </a>
            </div>
          </div>
        </motion.div>

        {/* Scroll to Top */}
        <motion.button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-8 right-8 w-12 h-12 bg-gradient-to-r from-tech-blue to-tech-teal rounded-full flex items-center justify-center text-tech-dark font-bold shadow-lg hover:shadow-xl transition-all duration-300 z-50"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5 }}
        >
          ↑
        </motion.button>
      </div>

      {/* Animated Background Elements */}
      <motion.div
        className="absolute bottom-0 left-1/4 w-32 h-32 bg-tech-blue/5 rounded-full blur-xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ duration: 8, repeat: Infinity }}
      />
      <motion.div
        className="absolute top-0 right-1/3 w-24 h-24 bg-tech-teal/5 rounded-full blur-xl"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.5, 0.3, 0.5],
        }}
        transition={{ duration: 10, repeat: Infinity }}
      />
    </footer>
  );
};

export default Footer;
