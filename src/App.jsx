import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import { Github, Mail } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Simple sticky navigation */}
      <header className="sticky top-0 z-20 bg-white/80 backdrop-blur border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <a href="#home" className="font-extrabold tracking-tight text-lg">
            <span className="bg-gradient-to-r from-indigo-600 to-fuchsia-600 bg-clip-text text-transparent">YourName</span>
          </a>
          <nav className="hidden sm:flex items-center gap-6 text-sm font-medium text-gray-700">
            <a href="#about" className="hover:text-gray-900">About</a>
            <a href="#skills" className="hover:text-gray-900">Skills</a>
            <a href="#projects" className="hover:text-gray-900">Projects</a>
            <a href="#contact" className="hover:text-gray-900">Contact</a>
          </nav>
          <div className="flex items-center gap-3">
            <a href="mailto:you@example.com" className="hidden sm:inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-gray-900 text-white text-sm font-semibold hover:bg-gray-800">
              <Mail className="w-4 h-4" /> Contact
            </a>
            <a href="https://github.com/" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center w-9 h-9 rounded-lg border border-gray-200 hover:bg-gray-50">
              <Github className="w-5 h-5" />
            </a>
          </div>
        </div>
      </header>

      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
      </main>

      {/* Footer */}
      <footer id="contact" className="border-t border-gray-200 bg-white">
        <div className="max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h4 className="text-lg font-semibold">Let’s build something great</h4>
            <p className="mt-2 text-gray-600">Open to freelance, full-time, and collaborative opportunities.</p>
          </div>
          <div className="flex md:justify-end gap-3">
            <a href="mailto:you@example.com" className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-900 text-white font-semibold hover:bg-gray-800">
              <Mail className="w-4 h-4" /> Email me
            </a>
            <a href="https://github.com/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-gray-200 font-semibold hover:bg-gray-50">
              <Github className="w-4 h-4" /> GitHub
            </a>
          </div>
        </div>
        <div className="px-6 pb-10 text-center text-sm text-gray-500">© {new Date().getFullYear()} Your Name. All rights reserved.</div>
      </footer>
    </div>
  );
}

export default App;
