import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: 'Social Aid | Disaster Management',
    description: 'A full-stack disaster management platform designed for users to report incidents, request help, and access nearby shelters. Integrated location-based services (Leaflet.js) to improve response coordination.',
    image: '/images/project1.jpg',
    tags: ['MongoDB', 'Express.js', 'React', 'Node.js', 'Leaflet.js'],
    links: {
      live: '#',
      github: '#'
    }
  },
  {
    title: 'Hand Gesture Game Controller',
    description: 'A real-time hand gesture controller mapping inputs via MediaPipe and PyAutoGUI. Implemented gesture recognition for throttle, brake, and directional control with latency under 200ms.',
    image: '/images/project3.jpg',
    tags: ['Python', 'MediaPipe', 'PyAutoGUI', 'AI/ML'],
    links: {
      live: '#',
      github: '#'
    }
  },
  {
    title: 'Personal Portfolio Website',
    description: 'A fully responsive personal portfolio website with modern UI/UX principles, featuring a dark mode aesthetic and smooth animations. Deployed on Vercel.',
    image: '/images/project4.jpg',
    tags: ['HTML', 'Tailwind CSS', 'React', 'TypeScript'],
    links: {
      live: '#',
      github: '#'
    }
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-24 relative z-10 bg-[#050505]">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Selected Works</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative rounded-2xl overflow-hidden bg-white/5 border border-white/10 flex flex-col"
            >
              {/* Image Container */}
              <div className="relative h-64 sm:h-80 overflow-hidden">
                <div className="absolute inset-0 bg-[#0a0a0a]/20 group-hover:bg-transparent transition-colors z-10" />
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                />
                
                {/* Overlay Links */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20 flex items-center justify-center gap-4 backdrop-blur-sm">
                  <a href={project.links.live} className="p-3 bg-white text-black rounded-full hover:scale-110 transition-transform" title="Live Site">
                    <ExternalLink size={20} />
                  </a>
                  <a href={project.links.github} className="p-3 bg-white/10 text-white rounded-full hover:bg-white/20 hover:scale-110 transition-all border border-white/20" title="Source Code">
                    <Github size={20} />
                  </a>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 sm:p-8 flex-1 flex flex-col">
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-400 mb-6 flex-1 line-clamp-3">
                  {project.description}
                </p>
                
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tags.map(tag => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-xs font-medium text-cyan-300 bg-cyan-950/30 border border-cyan-800/30 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;