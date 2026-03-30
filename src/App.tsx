import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen relative selection:bg-cyan-500/30 selection:text-cyan-200">
      <Navbar />
      
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Contact />
      </main>

      <footer className="py-8 border-t border-white/10 bg-[#050505] text-center text-gray-500 text-sm">
        <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} Abhishek Kumar. All rights reserved.</p>
          <p className="flex items-center gap-1">
            Built with React & Tailwind
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;