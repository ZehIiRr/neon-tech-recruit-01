
import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Clock, Users, FileText, Calendar } from 'lucide-react';

const RecruitmentProcess = () => {
  const steps = [
    {
      icon: FileText,
      title: 'Aplikacja online',
      description: 'Wypełnij formularz aplikacyjny i prześlij swoje CV. Proces zajmuje maksymalnie 5 minut.',
      duration: '5 min',
      color: 'tech-blue'
    },
    {
      icon: Clock,
      title: 'Wstępna weryfikacja',
      description: 'Nasze HR sprawdza Twoją aplikację i dopasowanie do roli. Odpowiedź w ciągu 2 dni roboczych.',
      duration: '2 dni',
      color: 'tech-teal'
    },
    {
      icon: Users,
      title: 'Rozmowa techniczna',
      description: 'Spotkanie z zespołem technowym. Rozmawiamy o Twoich umiejętnościach i doświadczeniu.',
      duration: '60 min',
      color: 'tech-green'
    },
    {
      icon: Calendar,
      title: 'Spotkanie z zespołem',
      description: 'Poznaj przyszłych współpracowników i atmosferę pracy. To także Twoja szansa na pytania.',
      duration: '45 min',
      color: 'tech-orange'
    },
    {
      icon: CheckCircle,
      title: 'Decyzja i oferta',
      description: 'Podejmujemy decyzję i prezentujemy ofertę. Omawiamy szczegóły współpracy.',
      duration: '3 dni',
      color: 'tech-purple'
    }
  ];

  const colorMap = {
    'tech-blue': 'text-tech-blue',
    'tech-teal': 'text-tech-teal',
    'tech-green': 'text-tech-green',
    'tech-orange': 'text-tech-orange',
    'tech-purple': 'text-tech-purple'
  };

  const bgColorMap = {
    'tech-blue': 'bg-tech-blue/10',
    'tech-teal': 'bg-tech-teal/10',
    'tech-green': 'bg-tech-green/10',
    'tech-orange': 'bg-tech-orange/10',
    'tech-purple': 'bg-tech-purple/10'
  };

  return (
    <section className="py-20 relative overflow-hidden" id="recruitment">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-tech-blue/30 to-transparent"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 2 }}
        />
        <motion.div
          className="absolute top-0 right-1/4 w-px h-full bg-gradient-to-b from-transparent via-tech-teal/30 to-transparent"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 2, delay: 0.5 }}
        />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-white">Proces </span>
            <span className="text-gradient">rekrutacji</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Transparentny i przyjazny proces - krok po kroku do Twojej nowej kariery
          </p>
        </motion.div>

        {/* Progress Line */}
        <div className="relative">
          <motion.div
            className="absolute left-8 md:left-1/2 md:-translate-x-px top-0 bottom-0 w-px bg-gradient-to-b from-tech-blue via-tech-teal via-tech-green via-tech-orange to-tech-purple"
            initial={{ height: 0 }}
            whileInView={{ height: "100%" }}
            transition={{ duration: 2, ease: "easeInOut" }}
            viewport={{ once: true }}
          />

          {/* Steps */}
          <div className="space-y-12">
            {steps.map((step, index) => {
              const Icon = step.icon;
              const isEven = index % 2 === 0;

              return (
                <motion.div
                  key={index}
                  className={`relative flex items-center ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} flex-col md:flex-row`}
                  initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  viewport={{ once: true }}
                >
                  {/* Step Content */}
                  <div className={`flex-1 ${isEven ? 'md:pr-12 md:text-right' : 'md:pl-12 md:text-left'} text-center md:text-left`}>
                    <motion.div
                      className={`inline-block px-3 py-1 rounded-full text-sm font-medium mb-4 ${bgColorMap[step.color as keyof typeof bgColorMap]} ${colorMap[step.color as keyof typeof colorMap]} border border-current/20`}
                      whileHover={{ scale: 1.05 }}
                    >
                      {step.duration}
                    </motion.div>
                    
                    <h3 className="text-2xl font-bold text-white mb-3">
                      {step.title}
                    </h3>
                    
                    <p className="text-gray-400 leading-relaxed max-w-sm mx-auto md:mx-0">
                      {step.description}
                    </p>
                  </div>

                  {/* Step Icon */}
                  <motion.div
                    className={`relative z-10 w-16 h-16 rounded-full ${bgColorMap[step.color as keyof typeof bgColorMap]} border-2 border-current flex items-center justify-center mb-6 md:mb-0 ${colorMap[step.color as keyof typeof colorMap]}`}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Icon className="w-8 h-8" />
                    
                    {/* Pulse Effect */}
                    <motion.div
                      className={`absolute inset-0 rounded-full ${bgColorMap[step.color as keyof typeof bgColorMap]} ${colorMap[step.color as keyof typeof colorMap]}`}
                      animate={{ scale: [1, 1.3, 1], opacity: [0.5, 0, 0.5] }}
                      transition={{ duration: 2, repeat: Infinity, delay: index * 0.4 }}
                    />
                  </motion.div>

                  {/* Mobile Spacer */}
                  <div className="flex-1 md:hidden" />
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* CTA Section */}
        <motion.div
          className="text-center mt-16 p-8 bg-gradient-to-r from-tech-blue/10 to-tech-teal/10 rounded-2xl border border-white/10 backdrop-blur-sm"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-white mb-4">
            Gotowy na wyzwanie?
          </h3>
          <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
            Średni czas całego procesu rekrutacji to 2 tygodnie. 
            Dbamy o to, żeby był szybki, przejrzysty i przyjazny dla kandydatów.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              className="px-8 py-3 bg-gradient-to-r from-tech-blue to-tech-teal text-tech-dark font-semibold rounded-lg hover:shadow-lg hover:shadow-tech-blue/25 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Rozpocznij aplikację
            </motion.button>
            <motion.button
              className="px-8 py-3 border border-tech-blue text-tech-blue hover:bg-tech-blue hover:text-tech-dark rounded-lg transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Masz pytania?
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default RecruitmentProcess;
