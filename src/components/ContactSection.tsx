
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Card, CardContent } from '@/components/ui/card';
import { MapPin, Clock, Calendar, Upload, CheckCircle } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    position: '',
    message: '',
    cv: null as File | null,
    agreement: false
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [dragActive, setDragActive] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }));
  };

  const handleFileUpload = (file: File) => {
    if (file.size > 5 * 1024 * 1024) { // 5MB limit
      toast({
        title: "Plik za duży",
        description: "Maksymalny rozmiar pliku to 5MB",
        variant: "destructive"
      });
      return;
    }
    
    if (!['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'].includes(file.type)) {
      toast({
        title: "Nieprawidłowy format",
        description: "Akceptujemy tylko pliki PDF i DOC",
        variant: "destructive"
      });
      return;
    }

    setFormData(prev => ({ ...prev, cv: file }));
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setDragActive(false);
    
    const file = e.dataTransfer.files[0];
    if (file) handleFileUpload(file);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));

    toast({
      title: "Aplikacja wysłana!",
      description: "Skontaktujemy się z Tobą wkrótce.",
    });

    setFormData({
      name: '',
      email: '',
      position: '',
      message: '',
      cv: null,
      agreement: false
    });
    
    setIsSubmitting(false);
  };

  return (
    <section className="py-20 relative" id="contact">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-1/4 left-0 w-96 h-96 bg-tech-blue/5 rounded-full blur-3xl"
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
          }}
          transition={{ duration: 20, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-1/4 right-0 w-96 h-96 bg-tech-teal/5 rounded-full blur-3xl"
          animate={{
            x: [0, -100, 0],
            y: [0, 50, 0],
          }}
          transition={{ duration: 25, repeat: Infinity }}
        />
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
            <span className="text-white">Skontaktuj się </span>
            <span className="text-gradient">z nami</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Masz pytania o proces rekrutacji lub chcesz dowiedzieć się więcej o pracy w TechFlow? Napisz do nas!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="bg-tech-gray/30 border-white/10 backdrop-blur-sm">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-white mb-6">
                  Aplikuj lub zadaj pytanie
                </h3>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name" className="text-gray-300">Imię i nazwisko</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="bg-tech-dark/50 border-white/20 text-white focus:border-tech-blue"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="email" className="text-gray-300">Email</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="bg-tech-dark/50 border-white/20 text-white focus:border-tech-blue"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="position" className="text-gray-300">Interesująca Cię pozycja</Label>
                    <select
                      id="position"
                      name="position"
                      value={formData.position}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 bg-tech-dark/50 border border-white/20 text-white rounded-md focus:border-tech-blue focus:outline-none"
                    >
                      <option value="">Wybierz pozycję</option>
                      <option value="frontend">Senior Frontend Developer</option>
                      <option value="devops">DevOps Engineer</option>
                      <option value="designer">Product Designer</option>
                      <option value="backend">Backend Developer</option>
                      <option value="other">Inna / Ogólne pytanie</option>
                    </select>
                  </div>

                  <div>
                    <Label htmlFor="message" className="text-gray-300">Wiadomość</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={4}
                      className="bg-tech-dark/50 border-white/20 text-white focus:border-tech-blue resize-none"
                      placeholder="Opowiedz nam o swoim doświadczeniu lub zadaj pytanie..."
                    />
                  </div>

                  {/* File Upload */}
                  <div>
                    <Label className="text-gray-300">CV (opcjonalnie)</Label>
                    <motion.div
                      className={`mt-2 border-2 border-dashed rounded-lg p-6 text-center transition-all duration-300 ${
                        dragActive 
                          ? 'border-tech-blue bg-tech-blue/10' 
                          : 'border-white/20 hover:border-white/40'
                      }`}
                      onDragEnter={() => setDragActive(true)}
                      onDragLeave={() => setDragActive(false)}
                      onDragOver={(e) => e.preventDefault()}
                      onDrop={handleDrop}
                      whileHover={{ scale: 1.01 }}
                    >
                      {formData.cv ? (
                        <div className="flex items-center justify-center text-tech-blue">
                          <CheckCircle className="w-6 h-6 mr-2" />
                          <span>{formData.cv.name}</span>
                        </div>
                      ) : (
                        <>
                          <Upload className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                          <p className="text-gray-400">
                            Przeciągnij plik CV tutaj lub{' '}
                            <label className="text-tech-blue cursor-pointer hover:underline">
                              wybierz plik
                              <input
                                type="file"
                                className="hidden"
                                accept=".pdf,.doc,.docx"
                                onChange={(e) => e.target.files?.[0] && handleFileUpload(e.target.files[0])}
                              />
                            </label>
                          </p>
                          <p className="text-sm text-gray-500 mt-1">PDF, DOC, DOCX (max 5MB)</p>
                        </>
                      )}
                    </motion.div>
                  </div>

                  {/* GDPR Checkbox */}
                  <div className="flex items-start space-x-3">
                    <input
                      type="checkbox"
                      id="agreement"
                      name="agreement"
                      checked={formData.agreement}
                      onChange={handleInputChange}
                      className="mt-1 w-4 h-4 text-tech-blue bg-tech-dark border-white/20 rounded focus:ring-tech-blue focus:ring-2"
                      required
                    />
                    <Label htmlFor="agreement" className="text-sm text-gray-300 leading-relaxed">
                      Wyrażam zgodę na przetwarzanie moich danych osobowych przez TechFlow 
                      w celu przeprowadzenia procesu rekrutacji zgodnie z RODO.
                    </Label>
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-tech-blue to-tech-teal text-tech-dark font-semibold py-3 hover:shadow-lg hover:shadow-tech-blue/25 transition-all duration-300"
                  >
                    {isSubmitting ? (
                      <motion.div
                        className="flex items-center justify-center"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                      >
                        <div className="w-5 h-5 border-2 border-tech-dark/30 border-t-tech-dark rounded-full animate-spin mr-2" />
                        Wysyłanie...
                      </motion.div>
                    ) : (
                      'Wyślij aplikację'
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>

          {/* Contact Info + Map */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {/* Contact Info */}
            <Card className="bg-tech-gray/30 border-white/10 backdrop-blur-sm">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-white mb-6">
                  Informacje kontaktowe
                </h3>
                
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <MapPin className="w-5 h-5 text-tech-blue flex-shrink-0" />
                    <div>
                      <p className="text-white font-medium">Adres</p>
                      <p className="text-gray-400">ul. Technologiczna 42, 43-300 Bielsko-Biała</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <Clock className="w-5 h-5 text-tech-teal flex-shrink-0" />
                    <div>
                      <p className="text-white font-medium">Godziny pracy</p>
                      <p className="text-gray-400">Pon-Pt: 9:00 - 17:00</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <Calendar className="w-5 h-5 text-tech-green flex-shrink-0" />
                    <div>
                      <p className="text-white font-medium">Czas odpowiedzi</p>
                      <p className="text-gray-400">Do 2 dni roboczych</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-white/10">
                  <p className="text-sm text-gray-400 leading-relaxed">
                    <strong className="text-tech-blue">HR Team:</strong> hr@techflow.dev<br />
                    <strong className="text-tech-teal">Tech Team:</strong> tech@techflow.dev<br />
                    <strong className="text-tech-green">General:</strong> hello@techflow.dev
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Map Placeholder */}
            <Card className="bg-tech-gray/30 border-white/10 backdrop-blur-sm overflow-hidden">
              <CardContent className="p-0">
                <div className="relative h-64 bg-gradient-to-br from-tech-blue/20 to-tech-teal/20">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <MapPin className="w-12 h-12 text-tech-blue mx-auto mb-2" />
                      <p className="text-white font-medium">TechFlow Office</p>
                      <p className="text-gray-400 text-sm">Bielsko-Biała, Poland</p>
                      <Button 
                        variant="outline" 
                        className="mt-4 border-tech-blue text-tech-blue hover:bg-tech-blue hover:text-tech-dark"
                      >
                        Otwórz w Google Maps
                      </Button>
                    </div>
                  </div>
                  
                  {/* Animated Elements */}
                  <motion.div
                    className="absolute top-4 right-4 w-8 h-8 bg-tech-blue/30 rounded-full"
                    animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.8, 0.5] }}
                    transition={{ duration: 3, repeat: Infinity }}
                  />
                  <motion.div
                    className="absolute bottom-8 left-8 w-6 h-6 bg-tech-teal/30 rounded-full"
                    animate={{ scale: [1.2, 1, 1.2], opacity: [0.8, 0.5, 0.8] }}
                    transition={{ duration: 4, repeat: Infinity }}
                  />
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
