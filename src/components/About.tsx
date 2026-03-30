import { motion } from 'framer-motion';
import { Code2, Server, Terminal, Database, Shield, Layout, Download, GraduationCap } from 'lucide-react';

const skills = [
  { name: 'Languages', icon: Terminal, desc: 'Java, Python, JavaScript, SQL' },
  { name: 'Frontend', icon: Layout, desc: 'React, HTML, CSS, Tailwind' },
  { name: 'Backend', icon: Server, desc: 'Node.js, Express.js, Spring Boot' },
  { name: 'Database', icon: Database, desc: 'MySQL, MongoDB' },
  { name: 'Cybersecurity', icon: Shield, desc: 'Network Security, Zero Trust' },
  { name: 'Tools', icon: Code2, desc: 'Git, GitHub, VS Code, Postman' },
];

const About = () => {
  return (
    <section id="about" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">About Me</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Bio Side */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="space-y-6 text-gray-400 text-lg leading-relaxed"
          >
            <p>
              Hello! I'm Abhishek Kumar, a final-year BCA student at Galgotias University, currently holding an 8.89 CGPA.
            </p>
            <p>
              I have practical experience in web application development using the MERN stack and a solid foundation in cybersecurity. I am highly passionate about Artificial Intelligence and Machine Learning, with a strong focus on building efficient, intelligent, and user-centric solutions.
            </p>
            
            <div className="py-4 space-y-4">
              <h3 className="text-white font-semibold flex items-center gap-2">
                <GraduationCap className="text-cyan-400" size={20} />
                Education
              </h3>
              <ul className="space-y-3 text-sm">
                <li className="border-l-2 border-white/10 pl-4">
                  <span className="text-white block">Bachelor of Computer Application</span>
                  Galgotias University • July 2023 – Present • 8.89 CGPA
                </li>
                <li className="border-l-2 border-white/10 pl-4">
                  <span className="text-white block">ITI Diploma in Electronics Mechanic</span>
                  Industrial Training Institute • July 2019 – Sept 2022 • 80.29%
                </li>
              </ul>
            </div>
            
            <div className="pt-4 border-t border-white/10">
              <a 
                href="#" 
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-cyan-500/10 text-cyan-400 font-medium hover:bg-cyan-500/20 transition-all border border-cyan-500/20"
              >
                <Download size={18} />
                View My Resume
              </a>
            </div>
          </motion.div>

          {/* Image & Skills Side */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden aspect-square max-w-md mx-auto mb-12 group">
              <div className="absolute inset-0 bg-cyan-500/20 mix-blend-overlay z-10 group-hover:bg-transparent transition-colors duration-500" />
              <img
                src="/images/profile.jpg"
                alt="Profile"
                className="object-cover w-full h-full grayscale group-hover:grayscale-0 transition-all duration-500 scale-105 group-hover:scale-100"
              />
              <div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-2xl z-20" />
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {skills.map((skill) => {
                const Icon = skill.icon;
                return (
                  <div
                    key={skill.name}
                    className="p-4 rounded-xl bg-white/5 border border-white/5 hover:bg-white/10 hover:border-white/20 transition-all group"
                  >
                    <Icon className="w-6 h-6 text-cyan-400 mb-3 group-hover:scale-110 transition-transform" />
                    <h3 className="text-white font-medium text-sm mb-1">{skill.name}</h3>
                    <p className="text-xs text-gray-500">{skill.desc}</p>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;