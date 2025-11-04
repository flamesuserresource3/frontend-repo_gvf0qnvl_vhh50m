import { User, Mail } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="relative w-full py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <div className="order-2 md:order-1">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900">About Me</h2>
          <p className="mt-6 text-gray-600 leading-relaxed">
            I’m a passionate developer with a love for clean design and performant code. My focus is crafting
            interactive interfaces, component systems, and scalable architectures. I enjoy collaborating with teams
            to turn ideas into polished, real-world products.
          </p>
          <div className="mt-8 grid sm:grid-cols-3 gap-4">
            <div className="rounded-xl border border-gray-200 p-4">
              <p className="text-3xl font-extrabold text-gray-900">5+</p>
              <p className="text-sm text-gray-600">Years Experience</p>
            </div>
            <div className="rounded-xl border border-gray-200 p-4">
              <p className="text-3xl font-extrabold text-gray-900">30+</p>
              <p className="text-sm text-gray-600">Projects Delivered</p>
            </div>
            <div className="rounded-xl border border-gray-200 p-4">
              <p className="text-3xl font-extrabold text-gray-900">100%</p>
              <p className="text-sm text-gray-600">Client Focused</p>
            </div>
          </div>
          <div className="mt-8 flex items-center gap-4">
            <a href="mailto:you@example.com" className="inline-flex items-center gap-2 text-indigo-600 font-semibold hover:underline">
              <Mail className="w-4 h-4" />
              Get in touch
            </a>
          </div>
        </div>
        <div className="order-1 md:order-2">
          <div className="aspect-square rounded-2xl bg-gradient-to-br from-indigo-100 via-white to-fuchsia-100 p-1">
            <div className="h-full w-full rounded-2xl bg-white/70 backdrop-blur flex items-center justify-center border border-gray-100">
              <div className="flex flex-col items-center text-center p-8">
                <div className="w-24 h-24 rounded-full bg-gradient-to-tr from-indigo-500 to-fuchsia-500 flex items-center justify-center text-white shadow-lg">
                  <User className="w-10 h-10" />
                </div>
                <p className="mt-4 text-gray-700">
                  Based in Anywhere, available for remote work.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
