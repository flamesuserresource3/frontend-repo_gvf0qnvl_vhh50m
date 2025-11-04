import Spline from '@splinetool/react-spline';
import { Rocket, Github } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative w-full min-h-[80vh] flex flex-col justify-center overflow-hidden">
      {/* Background 3D Scene */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Soft gradient overlay for readability (does not block interactions) */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/70 via-white/40 to-white/90" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-24">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/80 text-white text-xs font-medium mb-6">
            <Rocket className="w-4 h-4" />
            <span>Tech • Interactive • Modern</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-gray-900 leading-tight">
            Hi, I’m <span className="bg-gradient-to-r from-indigo-600 to-fuchsia-600 bg-clip-text text-transparent">Your Name</span> —
            I craft modern experiences for the web.
          </h1>
          <p className="mt-6 text-lg text-gray-600 max-w-2xl">
            Frontend-focused developer blending delightful UX with robust engineering. I build fast, accessible, and beautiful web apps.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-lg bg-gray-900 text-white px-5 py-3 font-semibold shadow-sm hover:bg-gray-800 transition"
            >
              View Projects
            </a>
            <a
              href="https://github.com/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-lg bg-white/80 backdrop-blur text-gray-900 px-5 py-3 font-semibold ring-1 ring-gray-200 hover:bg-white transition"
            >
              <Github className="w-5 h-5" />
              GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
