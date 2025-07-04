
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { ChevronDown, ChevronUp } from 'lucide-react';

const BenefitsSection = () => {
  const [expandedBenefit, setExpandedBenefit] = useState<number | null>(0);

  const benefits = [
    {
      icon: '💰',
      title: 'Konkurencyjne wynagrodzenie',
      shortDesc: 'Atrakcyjne zarobki dostosowane do Twoich umiejętności',
      fullDesc: 'Oferujemy konkurencyjne wynagrodzenie bazujące na doświadczeniu i umiejętnościach. Regularne przeglądy płacowe, premie za realizację projektów oraz dodatkowe benefity finansowe.',
      color: 'from-tech-green to-tech-teal',
      bgColor: 'bg-tech-green/5'
    },
    {
      icon: '🏠',
      title: 'Praca zdalna',
      shortDesc: '100% remote lub hybrydowo - Ty decydujesz',
      fullDesc: 'Pełna elastyczność miejsca pracy. Możesz pracować z domu, z biura lub w modelu hybrydowym. Zapewniamy kompletne wyposażenie do pracy zdalnej oraz dodatek na Internet i prąd.',
      color: 'from-tech-blue to-tech-purple',
      bgColor: 'bg-tech-blue/5'
    },
    {
      icon: '📚',
      title: 'Rozwój zawodowy',
      shortDesc: 'Konferencje, kursy, certyfikaty - bez limitów',
      fullDesc: 'Budżet na rozwój 5000 PLN rocznie na każdego pracownika. Opłacamy kursy, certyfikaty, konferencje. Czas na naukę w godzinach pracy. Mentoring i coaching wewnętrzny.',
      color: 'from-tech-teal to-tech-orange',
      bgColor: 'bg-tech-teal/5'
    },
    {
      icon: '⚡',
      title: 'Elastyczne godziny',
      shortDesc: 'Pracuj kiedy jesteś najbardziej produktywny',
      fullDesc: 'Elastyczne godziny pracy dostosowane do Twojego rytmu. Podstawa to 160h miesięcznie, ale możesz pracować kiedy chcesz. Nie ma obowiązkowych godzin rozpoczynania pracy.',
      color: 'from-tech-orange to-tech-purple',
      bgColor: 'bg-tech-orange/5'
    },
    {
      icon: '🎮',
      title: 'Work-life balance',
      shortDesc: 'Gaming room, strefa chill-out, sport w firmie',
      fullDesc: 'Dbamy o równowagę między pracą a życiem prywatnym. Gaming room z konsolami, strefa relaksu, stół do ping-ponga, karnety na siłownię, wydarzenia integracyjne.',
      color: 'from-tech-purple to-tech-blue',
      bgColor: 'bg-tech-purple/5'
    },
    {
      icon: '🔧',
      title: 'Nowoczesne narzędzia',
      shortDesc: 'MacBook Pro, monitor 4K, licencje premium',
      fullDesc: 'MacBook Pro M3 lub PC do wyboru, monitor 4K, ergonomiczne stanowisko pracy. Wszystkie potrzebne licencje: JetBrains, Adobe, Figma Pro, Notion, Slack Premium.',
      color: 'from-tech-green to-tech-blue',
      bgColor: 'bg-tech-green/5'
    }
  ];

  const toggleBenefit = (index: number) => {
    setExpandedBenefit(expandedBenefit === index ? null : index);
  };

  return (
    <section className="py-20 relative overflow-hidden" id="benefits">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-tech-blue/5 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-tech-teal/5 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.5, 0.3, 0.5],
          }}
          transition={{ duration: 10, repeat: Infinity }}
        />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-white">Dlaczego </span>
            <span className="text-gradient">TechFlow?</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Oferujemy więcej niż tylko pracę - tworzymy środowisko, w którym możesz się rozwijać i czuć spełniony
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Left Column - Interactive Benefits */}
          <div className="space-y-4">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className={`bg-tech-gray/30 border-white/10 backdrop-blur-sm hover:border-white/20 transition-all duration-300 ${benefit.bgColor} overflow-hidden`}>
                  <CardContent className="p-0">
                    <motion.button
                      onClick={() => toggleBenefit(index)}
                      className="w-full p-6 text-left transition-all duration-300"
                      whileHover={{ x: 5 }}
                    >
                      <div className="flex items-start justify-between">
                        <div className="flex items-start space-x-4 flex-1">
                          <motion.div
                            className="text-3xl"
                            animate={{ rotate: expandedBenefit === index ? [0, 10, -10, 0] : 0 }}
                            transition={{ duration: 0.5 }}
                          >
                            {benefit.icon}
                          </motion.div>
                          <div className="flex-1">
                            <h3 className={`text-xl font-semibold mb-2 bg-gradient-to-r ${benefit.color} bg-clip-text text-transparent`}>
                              {benefit.title}
                            </h3>
                            <p className="text-gray-300">
                              {benefit.shortDesc}
                            </p>
                          </div>
                        </div>
                        <motion.div
                          animate={{ rotate: expandedBenefit === index ? 180 : 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          <ChevronDown className="w-5 h-5 text-tech-blue" />
                        </motion.div>
                      </div>
                    </motion.button>

                    <AnimatePresence>
                      {expandedBenefit === index && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                        >
                          <div className="px-6 pb-6">
                            <div className={`h-px bg-gradient-to-r ${benefit.color} mb-4 opacity-30`} />
                            <p className="text-gray-300 leading-relaxed">
                              {benefit.fullDesc}
                            </p>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Right Column - Visual Element */}
          <motion.div
            className="lg:sticky lg:top-32 h-fit"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="relative">
              {/* Main Visual */}
              <div className="relative bg-gradient-to-br from-tech-gray/30 to-tech-dark/50 rounded-3xl p-8 backdrop-blur-sm border border-white/10 overflow-hidden">
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute inset-0" style={{
                    backgroundImage: `
                      linear-gradient(30deg, transparent 48%, rgba(0,212,255,0.3) 49%, rgba(0,212,255,0.3) 51%, transparent 52%),
                      linear-gradient(-30deg, transparent 48%, rgba(20,255,236,0.3) 49%, rgba(20,255,236,0.3) 51%, transparent 52%)
                    `,
                    backgroundSize: '40px 40px'
                  }} />
                </div>

                <div className="relative z-10">
                  <h3 className="text-2xl font-bold text-white mb-6">
                    Dołącz do zespołu
                  </h3>
                  
                  {/* Animated Stats */}
                  <div className="space-y-6">
                    <motion.div
                      className="flex items-center justify-between p-4 bg-tech-blue/10 rounded-xl border border-tech-blue/20"
                      whileHover={{ scale: 1.02 }}
                    >
                      <span className="text-gray-300">Zadowolenie zespołu</span>
                      <div className="flex items-center space-x-2">
                        <div className="w-24 h-2 bg-tech-gray rounded-full overflow-hidden">
                          <motion.div
                            className="h-full bg-gradient-to-r from-tech-blue to-tech-teal"
                            initial={{ width: 0 }}
                            whileInView={{ width: "95%" }}
                            transition={{ duration: 2, delay: 0.5 }}
                          />
                        </div>
                        <span className="text-tech-blue font-semibold">95%</span>
                      </div>
                    </motion.div>

                    <motion.div
                      className="flex items-center justify-between p-4 bg-tech-teal/10 rounded-xl border border-tech-teal/20"
                      whileHover={{ scale: 1.02 }}
                    >
                      <span className="text-gray-300">Rozwój kariery</span>
                      <div className="flex items-center space-x-2">
                        <div className="w-24 h-2 bg-tech-gray rounded-full overflow-hidden">
                          <motion.div
                            className="h-full bg-gradient-to-r from-tech-teal to-tech-green"
                            initial={{ width: 0 }}
                            whileInView={{ width: "92%" }}
                            transition={{ duration: 2, delay: 1 }}
                          />
                        </div>
                        <span className="text-tech-teal font-semibold">92%</span>
                      </div>
                    </motion.div>

                    <motion.div
                      className="flex items-center justify-between p-4 bg-tech-green/10 rounded-xl border border-tech-green/20"
                      whileHover={{ scale: 1.02 }}
                    >
                      <span className="text-gray-300">Work-life balance</span>
                      <div className="flex items-center space-x-2">
                        <div className="w-24 h-2 bg-tech-gray rounded-full overflow-hidden">
                          <motion.div
                            className="h-full bg-gradient-to-r from-tech-green to-tech-orange"
                            initial={{ width: 0 }}
                            whileInView={{ width: "98%" }}
                            transition={{ duration: 2, delay: 1.5 }}
                          />
                        </div>
                        <span className="text-tech-green font-semibold">98%</span>
                      </div>
                    </motion.div>
                  </div>

                  {/* Team Photo */}
                  <motion.div
                    className="mt-8 rounded-xl overflow-hidden"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                  >
                    <img
                      src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400&h=300&fit=crop&crop=faces"
                      alt="Happy TechFlow team"
                      className="w-full h-48 object-cover"
                    />
                  </motion.div>
                </div>

                {/* Floating Elements */}
                <motion.div
                  className="absolute top-4 right-4 w-8 h-8 bg-tech-blue/30 rounded-full"
                  animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.8, 0.5] }}
                  transition={{ duration: 3, repeat: Infinity }}
                />
                <motion.div
                  className="absolute bottom-8 left-4 w-6 h-6 bg-tech-teal/30 rounded-full"
                  animate={{ scale: [1.2, 1, 1.2], opacity: [0.8, 0.5, 0.8] }}
                  transition={{ duration: 4, repeat: Infinity }}
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
