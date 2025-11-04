import { Github, ExternalLink } from 'lucide-react';

const projects = [
  {
    title: 'Interactive Dashboard',
    description: 'Real-time analytics dashboard with clean UI and blazing-fast performance.',
    tags: ['React', 'Tailwind', 'FastAPI'],
    demo: '#',
    repo: '#',
    color: 'from-indigo-500 to-fuchsia-500',
  },
  {
    title: 'E-commerce Experience',
    description: 'Conversion-focused storefront with accessible components and SSR.',
    tags: ['Next.js', 'TypeScript', 'Stripe'],
    demo: '#',
    repo: '#',
    color: 'from-emerald-500 to-cyan-500',
  },
  {
    title: 'Design System Starter',
    description: 'Composable UI kit with tokens, themes, and strong developer ergonomics.',
    tags: ['Storybook', 'React', 'Radix UI'],
    demo: '#',
    repo: '#',
    color: 'from-amber-500 to-rose-500',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="relative w-full py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-end justify-between gap-6 flex-wrap">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900">Selected Projects</h2>
            <p className="mt-3 text-gray-600">A few highlights that reflect my approach to product and craft.</p>
          </div>
          <a href="#" className="text-indigo-600 font-semibold hover:underline">View full portfolio</a>
        </div>

        <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p) => (
            <article key={p.title} className="group rounded-2xl border border-gray-200 overflow-hidden bg-white shadow-sm hover:shadow-md transition">
              <div className={`h-40 bg-gradient-to-br ${p.color}`} />
              <div className="p-5">
                <h3 className="text-lg font-semibold text-gray-900 group-hover:text-indigo-700 transition">{p.title}</h3>
                <p className="mt-2 text-sm text-gray-600">{p.description}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span key={t} className="text-xs px-2 py-1 rounded-full bg-gray-100 text-gray-700 border border-gray-200">{t}</span>
                  ))}
                </div>
                <div className="mt-5 flex items-center gap-3">
                  <a href={p.demo} className="inline-flex items-center gap-1 text-sm font-semibold text-gray-900 hover:underline">
                    <ExternalLink className="w-4 h-4" /> Live demo
                  </a>
                  <a href={p.repo} className="inline-flex items-center gap-1 text-sm font-semibold text-gray-900 hover:underline">
                    <Github className="w-4 h-4" /> Code
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
