
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ChevronDown, MapPin, Clock, Users } from 'lucide-react';

const JobOffersSection = () => {
  const [expandedJob, setExpandedJob] = useState<number | null>(0);

  const jobs = [
    {
      title: 'Senior Frontend Developer',
      location: 'Bielsko-Biała / Remote',
      type: 'Pełny etat',
      team: 'Frontend Team',
      salary: '12 000 - 18 000 PLN',
      description: 'Szukamy doświadczonego Frontend Developera do pracy nad nowoczesnymi aplikacjami webowymi.',
      requirements: [
        'Min. 4 lata doświadczenia w React.js',
        'Znajomość TypeScript, Next.js',
        'Doświadczenie z Redux/Zustand',
        'Umiejętność pracy z REST API',
        'Znajomość narzędzi do testowania (Jest, Cypress)'
      ],
      responsibilities: [
        'Tworzenie i rozwijanie aplikacji webowych w React',
        'Współpraca z zespołem UX/UI przy implementacji designów',
        'Optymalizacja wydajności aplikacji',
        'Code review i mentoring junior developerów',
        'Udział w planowaniu architektury projektów'
      ],
      color: 'from-tech-blue to-tech-teal'
    },
    {
      title: 'DevOps Engineer',
      location: 'Bielsko-Biała / Remote',
      type: 'Pełny etat',
      team: 'Infrastructure',
      salary: '14 000 - 20 000 PLN',
      description: 'Poszukujemy DevOps Engineera do zarządzania infrastrukturą i procesami CI/CD.',
      requirements: [
        'Min. 3 lata doświadczenia DevOps',
        'Znajomość AWS/GCP/Azure',
        'Doświadczenie z Docker i Kubernetes',
        'Umiejętność pracy z Terraform',
        'Znajomość systemów Linux'
      ],
      responsibilities: [
        'Zarządzanie infrastrukturą chmurową',
        'Automatyzacja procesów deployment',
        'Monitoring i optymalizacja systemów',
        'Wdrażanie security best practices',
        'Współpraca z zespołami developmentu'
      ],
      color: 'from-tech-teal to-tech-green'
    },
    {
      title: 'Product Designer',
      location: 'Bielsko-Biała / Hybrydowo',
      type: 'Pełny etat',
      team: 'Design Team',
      salary: '10 000 - 15 000 PLN',
      description: 'Szukamy kreatywnego Product Designera do tworzenia user experience dla naszych produktów.',
      requirements: [
        'Min. 3 lata doświadczenia w UX/UI',
        'Biegłość w Figma, Adobe Creative Suite',
        'Znajomość design systems',
        'Doświadczenie w user research',
        'Portfolio z realizacjami projektów'
      ],
      responsibilities: [
        'Projektowanie interfejsów użytkownika',
        'Prowadzenie user research i testów użyteczności',
        'Tworzenie i utrzymywanie design system',
        'Współpraca z zespołami product i development',
        'Prototypowanie i wireframing'
      ],
      color: 'from-tech-green to-tech-orange'
    },
    {
      title: 'Backend Developer',
      location: 'Remote',
      type: 'Pełny etat / B2B',
      team: 'Backend Team',
      salary: '13 000 - 19 000 PLN',
      description: 'Poszukujemy Backend Developera do pracy nad skalowalną architekturą systemów.',
      requirements: [
        'Min. 4 lata doświadczenia backend',
        'Znajomość Node.js lub Python',
        'Doświadczenie z bazami danych (PostgreSQL, MongoDB)',
        'Umiejętność projektowania API',
        'Znajomość microservices'
      ],
      responsibilities: [
        'Projektowanie i implementacja API',
        'Optymalizacja baz danych',
        'Integracja z systemami zewnętrznymi',
        'Zapewnienie bezpieczeństwa aplikacji',
        'Monitorowanie wydajności systemów'
      ],
      color: 'from-tech-orange to-tech-purple'
    }
  ];

  const toggleJob = (index: number) => {
    setExpandedJob(expandedJob === index ? null : index);
  };

  return (
    <section className="py-20 relative" id="jobs">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-white">Aktualne </span>
            <span className="text-gradient">oferty pracy</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Dołącz do zespołu, który tworzy przyszłość technologii. Sprawdź nasze otwarte pozycje.
          </p>
        </motion.div>

        <div className="space-y-6">
          {jobs.map((job, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="bg-tech-gray/30 border-white/10 backdrop-blur-sm hover:border-white/20 transition-all duration-300 overflow-hidden">
                <CardContent className="p-0">
                  <motion.button
                    onClick={() => toggleJob(index)}
                    className="w-full p-6 text-left transition-all duration-300"
                    whileHover={{ x: 5 }}
                  >
                    <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between">
                      <div className="flex-1">
                        <div className="flex flex-wrap items-center gap-4 mb-3">
                          <h3 className={`text-xl lg:text-2xl font-bold bg-gradient-to-r ${job.color} bg-clip-text text-transparent`}>
                            {job.title}
                          </h3>
                          <span className="px-3 py-1 text-sm bg-tech-blue/20 text-tech-blue rounded-full border border-tech-blue/30">
                            {job.salary}
                          </span>
                        </div>
                        
                        <div className="flex flex-wrap items-center gap-4 text-gray-400 mb-3">
                          <div className="flex items-center gap-1">
                            <MapPin className="w-4 h-4" />
                            <span className="text-sm">{job.location}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Clock className="w-4 h-4" />
                            <span className="text-sm">{job.type}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Users className="w-4 h-4" />
                            <span className="text-sm">{job.team}</span>
                          </div>
                        </div>
                        
                        <p className="text-gray-300 lg:max-w-2xl">
                          {job.description}
                        </p>
                      </div>
                      
                      <motion.div
                        animate={{ rotate: expandedJob === index ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                        className="ml-auto mt-4 lg:mt-0"
                      >
                        <ChevronDown className="w-6 h-6 text-tech-blue" />
                      </motion.div>
                    </div>
                  </motion.button>

                  <AnimatePresence>
                    {expandedJob === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 pb-6">
                          <div className={`h-px bg-gradient-to-r ${job.color} mb-6 opacity-30`} />
                          
                          <div className="grid lg:grid-cols-2 gap-8">
                            {/* Requirements */}
                            <div>
                              <h4 className="text-lg font-semibold text-white mb-4">
                                Wymagania
                              </h4>
                              <ul className="space-y-2">
                                {job.requirements.map((req, reqIndex) => (
                                  <motion.li
                                    key={reqIndex}
                                    className="flex items-start gap-3 text-gray-300"
                                    initial={{ opacity: 0, x: -10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: reqIndex * 0.1 }}
                                  >
                                    <div className="w-2 h-2 bg-tech-blue rounded-full mt-2 flex-shrink-0" />
                                    <span className="text-sm">{req}</span>
                                  </motion.li>
                                ))}
                              </ul>
                            </div>

                            {/* Responsibilities */}
                            <div>
                              <h4 className="text-lg font-semibold text-white mb-4">
                                Zakres obowiązków
                              </h4>
                              <ul className="space-y-2">
                                {job.responsibilities.map((resp, respIndex) => (
                                  <motion.li
                                    key={respIndex}
                                    className="flex items-start gap-3 text-gray-300"
                                    initial={{ opacity: 0, x: -10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: respIndex * 0.1 }}
                                  >
                                    <div className="w-2 h-2 bg-tech-teal rounded-full mt-2 flex-shrink-0" />
                                    <span className="text-sm">{resp}</span>
                                  </motion.li>
                                ))}
                              </ul>
                            </div>
                          </div>

                          {/* CTA Buttons */}
                          <div className="flex flex-col sm:flex-row gap-4 mt-8 pt-6 border-t border-gray-700">
                            <Button className={`bg-gradient-to-r ${job.color} text-tech-dark font-semibold hover:shadow-lg transition-all duration-300 flex-1 sm:flex-none`}>
                              Aplikuj na to stanowisko
                            </Button>
                            <Button 
                              variant="outline" 
                              className="border-tech-blue text-tech-blue hover:bg-tech-blue hover:text-tech-dark transition-all duration-300"
                            >
                              Zadaj pytanie
                            </Button>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* No Perfect Match CTA */}
        <motion.div
          className="mt-16 text-center p-8 bg-gradient-to-r from-tech-purple/10 to-tech-blue/10 rounded-2xl border border-white/10 backdrop-blur-sm"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-white mb-4">
            Nie znalazłeś idealnej oferty?
          </h3>
          <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
            Wyślij nam swoje CV! Jeśli Twój profil przypadnie nam do gustu, 
            skontaktujemy się z Tobą gdy pojawi się odpowiednia pozycja.
          </p>
          
          <Button className="bg-gradient-to-r from-tech-purple to-tech-blue text-white font-semibold px-8 py-3 hover:shadow-lg hover:shadow-tech-purple/25 transition-all duration-300">
            Wyślij CV na przyszłość
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default JobOffersSection;
