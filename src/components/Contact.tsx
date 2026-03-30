import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Send, Github, Linkedin } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    console.log('Form submitted:', formData);
    alert("Thanks for reaching out! I'll get back to you soon.");
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Get In Touch</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full mx-auto mb-6" />
          <p className="text-gray-400 max-w-2xl mx-auto">
            Currently open for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12 items-start">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-2 space-y-8"
          >
            <div className="p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
              <h3 className="text-xl font-bold text-white mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <a href="mailto:ytabhishek2002@gmail.com" className="flex items-center gap-4 text-gray-400 hover:text-cyan-400 transition-colors group">
                  <div className="p-3 bg-white/5 rounded-full group-hover:bg-cyan-500/10 group-hover:text-cyan-400 transition-colors">
                    <Mail size={20} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 mb-1">Email</p>
                    <p className="font-medium">ytabhishek2002@gmail.com</p>
                  </div>
                </a>
                
                <div className="flex items-center gap-4 text-gray-400">
                  <div className="p-3 bg-white/5 rounded-full">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 mb-1">Location</p>
                    <p className="font-medium">India</p>
                  </div>
                </div>
              </div>

              <div className="mt-10 pt-8 border-t border-white/10">
                <p className="text-sm text-gray-500 mb-4">Follow Me</p>
                <div className="flex gap-4">
                  {[
                    { icon: Github, href: 'https://github.com' },
                    { icon: Linkedin, href: 'https://linkedin.com' }
                  ].map((social, i) => {
                    const Icon = social.icon;
                    return (
                      <a
                        key={i}
                        href={social.href}
                        className="p-3 bg-white/5 rounded-full text-gray-400 hover:text-white hover:bg-white/10 hover:-translate-y-1 transition-all"
                      >
                        <Icon size={20} />
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-3"
          >
            <form onSubmit={handleSubmit} className="p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-gray-400">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-[#0a0a0a] border border-white/10 rounded-xl focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/50 transition-all text-white"
                    placeholder="John Doe"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-gray-400">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-[#0a0a0a] border border-white/10 rounded-xl focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/50 transition-all text-white"
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-gray-400">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-[#0a0a0a] border border-white/10 rounded-xl focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/50 transition-all text-white resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>

              <button
                type="submit"
                className="w-full sm:w-auto px-8 py-4 bg-white text-black font-semibold rounded-xl hover:bg-gray-200 transition-colors flex items-center justify-center gap-2 group"
              >
                Send Message
                <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;