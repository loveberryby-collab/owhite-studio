import { services } from "@/data/services";

export default function Services() {
  return (
    <section id="services" className="bg-[#0b1120] py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Что я делаю
          </h2>
          <p className="mt-4 text-lg text-gray-400">
            Комплексные решения для автоматизации и digital-развития бизнеса
          </p>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.title}
              className="group rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-sm transition-all hover:border-cyan-500/30 hover:bg-white/[0.06]"
            >
              <div className="mb-4 inline-flex rounded-xl bg-gradient-to-br from-cyan-500/20 to-blue-600/20 p-3">
                <service.icon className="h-6 w-6 text-cyan-400" />
              </div>
              <h3 className="mb-3 text-lg font-semibold text-white">
                {service.title}
              </h3>
              <p className="mb-4 text-sm leading-relaxed text-gray-400">
                {service.description}
              </p>
              <ul className="flex flex-wrap gap-2">
                {service.features.map((f) => (
                  <li
                    key={f}
                    className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-gray-300"
                  >
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
