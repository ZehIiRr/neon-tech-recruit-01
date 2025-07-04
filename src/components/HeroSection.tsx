
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight, Code, Rocket, Users } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-32">
      {/* Background Pattern - static version without floating elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            radial-gradient(circle at 25% 25%, rgba(107, 127, 232, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 75% 75%, rgba(95, 202, 202, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 40% 80%, rgba(167, 139, 250, 0.1) 0%, transparent 50%)
          `,
        }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-8">
              <span className="text-white">Przyszłość </span>
              <span className="text-gradient">technologii</span>
              <br />
              <span className="text-white">zaczyna się </span>
              <span className="text-gradient">tutaj</span>
            </h1>
          </motion.div>

          <motion.p
            className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Dołącz do zespołu, który tworzy innowacyjne rozwiązania dla przyszłości. 
            W TechFlow rozwijasz nie tylko kod, ale całą swoją karierę.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-tech-blue to-tech-teal text-tech-darker font-semibold px-8 py-4 text-lg hover:shadow-lg hover:shadow-tech-blue/25 transition-all duration-300"
            >
              Zobacz oferty pracy
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              className="border-tech-blue text-tech-blue hover:bg-tech-blue hover:text-tech-darker px-8 py-4 text-lg transition-all duration-300"
            >
              Poznaj nas bliżej
            </Button>
          </motion.div>

          {/* Stats Section */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <div className="glass rounded-xl p-6 hover:glow-effect transition-all duration-300">
              <div className="flex items-center justify-center mb-4">
                <div className="p-3 rounded-full bg-tech-blue/20">
                  <Code className="h-8 w-8 text-tech-blue" />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">200+</h3>
              <p className="text-gray-400">Projektów zakończonych</p>
            </div>

            <div className="glass rounded-xl p-6 hover:glow-effect transition-all duration-300">
              <div className="flex items-center justify-center mb-4">
                <div className="p-3 rounded-full bg-tech-teal/20">
                  <Users className="h-8 w-8 text-tech-teal" />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">50+</h3>
              <p className="text-gray-400">Ekspertów w zespole</p>
            </div>

            <div className="glass rounded-xl p-6 hover:glow-effect transition-all duration-300">
              <div className="flex items-center justify-center mb-4">
                <div className="p-3 rounded-full bg-tech-purple/20">
                  <Rocket className="h-8 w-8 text-tech-purple" />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">5</h3>
              <p className="text-gray-400">lat doświadczenia</p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-tech-dark to-transparent" />
    </section>
  );
};

export default HeroSection;
