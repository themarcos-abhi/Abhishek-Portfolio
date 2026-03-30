import { motion } from 'framer-motion';
import { Award, Briefcase, ExternalLink } from 'lucide-react';

const experiences = [
  {
    type: 'Internship',
    title: 'Palo Alto Cybersecurity Virtual Internship',
    organization: 'Eduskills Foundation',
    duration: '2 Months',
    description: 'Gained foundational knowledge in network security, threat modeling, and cybersecurity principles. Worked with concepts like IDS/IPS, network monitoring, and incident response. Developed hands-on understanding of identifying and mitigating security threats.',
    certificateUrl: '#', // Replace with actual path like '/certificates/palo-alto.pdf'
    icon: Briefcase
  },
  {
    type: 'Internship',
    title: 'Zscaler Zero Trust Cloud Security Virtual Internship',
    organization: 'Eduskills Foundation',
    duration: '2 Months',
    description: 'Learned core concepts of Zero Trust Architecture and cloud security principles. Gained understanding of secure access models, identity-based authentication, and network protection.',
    certificateUrl: '#', // Replace with actual path
    icon: Briefcase
  },
  {
    type: 'Certification',
    title: 'Zero Trust Cyber Associate (ZTCA)',
    organization: 'Zscaler',
    duration: '',
    description: 'Validated expertise in Zero Trust architecture, secure access service edge (SASE) principles, and modern cloud security frameworks.',
    certificateUrl: '#', // Replace with actual path
    icon: Award
  },
  {
    type: 'Certification',
    title: 'CCNA: Introduction to Networks',
    organization: 'Cisco',
    duration: '',
    description: 'Developed foundational knowledge in networking concepts, routing, switching, and network security fundamentals.',
    certificateUrl: '#', // Replace with actual path
    icon: Award
  },
  {
    type: 'Certification',
    title: 'IBM Data Fundamentals',
    organization: 'IBM',
    duration: '',
    description: 'Acquired core knowledge in data analytics, data science methodologies, and fundamental database concepts.',
    certificateUrl: '#', // Replace with actual path
    icon: Award
  }
];

const Experience = () => {
  return (
    <section id="experience" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Experience & Certifications</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {experiences.map((exp, index) => {
            const Icon = exp.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex flex-col p-8 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all group"
              >
                <div className="flex items-start justify-between mb-6">
                  <div className="p-3 bg-cyan-500/10 rounded-xl text-cyan-400 group-hover:scale-110 transition-transform">
                    <Icon size={24} />
                  </div>
                  <span className="text-xs font-medium px-3 py-1 bg-white/5 rounded-full text-gray-400 border border-white/10">
                    {exp.type}
                  </span>
                </div>
                
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                  {exp.title}
                </h3>
                
                <div className="flex items-center gap-2 text-sm text-gray-400 mb-4">
                  <span className="font-medium text-purple-400">{exp.organization}</span>
                  {exp.duration && (
                    <>
                      <span className="w-1 h-1 rounded-full bg-gray-600" />
                      <span>{exp.duration}</span>
                    </>
                  )}
                </div>
                
                <p className="text-gray-400 text-sm mb-8 flex-1">
                  {exp.description}
                </p>

                <a
                  href={exp.certificateUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-white/5 text-white text-sm font-medium hover:bg-cyan-500 hover:text-black transition-all group/btn mt-auto"
                >
                  View Certificate
                  <ExternalLink size={16} className="group-hover/btn:-translate-y-0.5 group-hover/btn:translate-x-0.5 transition-transform" />
                </a>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Experience;