
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const ValuesSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const values = [
    {
      icon: '🚀',
      title: 'Innowacyjność',
      description: 'Tworzymy rozwiązania przyszłości, które zmieniają sposób działania biznesów na całym świecie.',
      color: 'from-tech-blue to-tech-teal',
      bgColor: 'bg-tech-blue/10'
    },
    {
      icon: '🤝',
      title: 'Współpraca',
      description: 'Wierzymy w siłę zespołowej pracy i wspieramy się nawzajem w osiąganiu wspólnych celów.',
      color: 'from-tech-teal to-tech-green',
      bgColor: 'bg-tech-teal/10'
    },
    {
      icon: '⚡',
      title: 'Efektywność',
      description: 'Koncentrujemy się na dostarczaniu wysokiej jakości rozwiązań w optymalnym czasie.',
      color: 'from-tech-green to-tech-orange',
      bgColor: 'bg-tech-green/10'
    },
    {
      icon: '🎯',
      title: 'Precyzja',
      description: 'Każdy szczegół ma znaczenie. Dążymy do perfekcji w każdym aspekcie naszej pracy.',
      color: 'from-tech-orange to-tech-purple',
      bgColor: 'bg-tech-orange/10'
    },
    {
      icon: '🌟',
      title: 'Rozwój',
      description: 'Inwestujemy w ciągły rozwój zespołu i technologii, które wykorzystujemy.',
      color: 'from-tech-purple to-tech-blue',
      bgColor: 'bg-tech-purple/10'
    }
  ];

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % values.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + values.length) % values.length);
  };

  const getVisibleCards = () => {
    const cards = [];
    for (let i = -1; i <= 1; i++) {
      const index = (currentIndex + i + values.length) % values.length;
      cards.push({
        ...values[index],
        position: i,
        index: index
      });
    }
    return cards;
  };

  return (
    <section className="py-20 relative overflow-hidden" id="about">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            radial-gradient(circle at 25% 25%, rgba(0,212,255,0.3) 0%, transparent 25%),
            radial-gradient(circle at 75% 75%, rgba(20,255,236,0.3) 0%, transparent 25%)
          `,
        }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-white">Nasze </span>
            <span className="text-gradient">wartości</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            To co napędza nas każdego dnia i sprawia, że TechFlow jest wyjątkowym miejscem do pracy
          </p>
        </motion.div>

        {/* Desktop Carousel */}
        <div className="hidden lg:block relative">
          <div className="flex items-center justify-center">
            <motion.button
              onClick={prevSlide}
              className="p-3 rounded-full bg-tech-gray/50 backdrop-blur-sm border border-white/10 hover:bg-tech-blue/20 transition-all duration-300 mr-8 z-10"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <ChevronLeft className="w-6 h-6 text-tech-blue" />
            </motion.button>

            <div className="relative w-[900px] h-96 flex items-center justify-center">
              {getVisibleCards().map((value) => (
                <motion.div
                  key={`${value.index}-${currentIndex}`}
                  className="absolute"
                  initial={{ 
                    x: value.position * 320,
                    scale: value.position === 0 ? 1 : 0.85,
                    opacity: value.position === 0 ? 1 : 0.7,
                    zIndex: value.position === 0 ? 10 : 5
                  }}
                  animate={{ 
                    x: value.position * 320,
                    scale: value.position === 0 ? 1 : 0.85,
                    opacity: value.position === 0 ? 1 : 0.7,
                    zIndex: value.position === 0 ? 10 : 5
                  }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                >
                  <div className={`relative w-80 h-96 rounded-2xl p-8 border border-white/10 backdrop-blur-sm ${value.bgColor} overflow-hidden group cursor-pointer`}>
                    {/* Hover Gradient Overlay */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${value.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
                    
                    <div className="relative z-10 h-full flex flex-col">
                      <motion.div
                        className="text-6xl mb-6"
                        animate={{ rotate: [0, 10, -10, 0] }}
                        transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                      >
                        {value.icon}
                      </motion.div>
                      
                      <h3 className={`text-2xl font-bold mb-4 bg-gradient-to-r ${value.color} bg-clip-text text-transparent`}>
                        {value.title}
                      </h3>
                      
                      <p className="text-gray-300 leading-relaxed flex-grow">
                        {value.description}
                      </p>

                      {/* Decorative Element */}
                      <motion.div
                        className={`absolute -bottom-4 -right-4 w-24 h-24 bg-gradient-to-br ${value.color} rounded-full opacity-20`}
                        animate={{ scale: [1, 1.1, 1] }}
                        transition={{ duration: 3, repeat: Infinity }}
                      />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.button
              onClick={nextSlide}
              className="p-3 rounded-full bg-tech-gray/50 backdrop-blur-sm border border-white/10 hover:bg-tech-blue/20 transition-all duration-300 ml-8 z-10"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <ChevronRight className="w-6 h-6 text-tech-blue" />
            </motion.button>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {values.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? 'bg-tech-blue w-8' 
                    : 'bg-gray-600 hover:bg-gray-500'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Mobile Grid */}
        <div className="lg:hidden grid gap-6">
          {values.map((value, index) => (
            <motion.div
              key={index}
              className={`relative rounded-2xl p-6 border border-white/10 backdrop-blur-sm ${value.bgColor} overflow-hidden group`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${value.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
              
              <div className="relative z-10">
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className={`text-xl font-bold mb-3 bg-gradient-to-r ${value.color} bg-clip-text text-transparent`}>
                  {value.title}
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {value.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValuesSection;
