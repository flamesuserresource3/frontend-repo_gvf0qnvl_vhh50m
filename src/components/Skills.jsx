import { Code2, Cpu, Rocket, Star } from 'lucide-react';

const skills = [
  { name: 'React', level: 'Advanced' },
  { name: 'TypeScript', level: 'Advanced' },
  { name: 'Tailwind CSS', level: 'Advanced' },
  { name: 'Next.js', level: 'Proficient' },
  { name: 'Node.js', level: 'Proficient' },
  { name: 'FastAPI', level: 'Proficient' },
  { name: 'MongoDB', level: 'Proficient' },
  { name: 'Framer Motion', level: 'Proficient' },
];

export default function Skills() {
  return (
    <section id="skills" className="relative w-full py-24 bg-gradient-to-b from-white to-indigo-50/40">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between flex-wrap gap-6">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900">Skills</h2>
            <p className="mt-3 text-gray-600">A blend of design systems, modern frameworks, and performance-minded engineering.</p>
          </div>
          <div className="inline-flex items-center gap-2 rounded-full px-3 py-1 bg-white border border-gray-200 shadow-sm text-sm text-gray-700">
            <Cpu className="w-4 h-4" />
            <span>Ship fast, ship quality</span>
          </div>
        </div>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {skills.map((s) => (
            <div key={s.name} className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm hover:shadow-md transition">
              <div className="flex items-center justify-between">
                <div className="font-semibold text-gray-900">{s.name}</div>
                <div className="text-indigo-600">
                  {s.level === 'Advanced' ? <Star className="w-4 h-4" /> : <Code2 className="w-4 h-4" />}
                </div>
              </div>
              <p className="mt-2 text-sm text-gray-600">{s.level}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 flex items-center gap-3 text-sm text-gray-600">
          <Rocket className="w-4 h-4 text-indigo-600" />
          <span>Always learning and exploring new tools.</span>
        </div>
      </div>
    </section>
  );
}
