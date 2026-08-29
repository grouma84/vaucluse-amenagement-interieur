import Link from "next/link"
import { HOME_CONTENT } from "@/content/homepage"

export function Services() {
  const services = HOME_CONTENT.services

  return (
    <section
      id="prestations"
      className="bg-white px-6 py-20 text-zinc-950 sm:px-10 lg:py-28"
      aria-labelledby="services-title"
    >
      <div className="mx-auto max-w-7xl">

        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-amber-700">
            Prestations
          </p>

          <h2
            id="services-title"
            className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl"
          >
            {services.title}
          </h2>

          <p className="mt-5 max-w-2xl text-lg leading-8 text-zinc-600">
            {services.intro}
          </p>
        </div>

        <div className="mt-14 grid gap-px overflow-hidden border border-zinc-200 bg-zinc-200 md:grid-cols-2 lg:grid-cols-3">
          {services.items.map((service, index) => (
            <article
              key={service.id}
              className="flex min-h-[330px] flex-col bg-white p-7 sm:p-8"
            >
              <div>
                <span className="text-sm font-semibold tabular-nums text-zinc-400">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <h3 className="mt-5 text-2xl font-semibold tracking-tight">
                  {service.title}
                </h3>

                <p className="mt-3 font-medium leading-7 text-zinc-700">
                  {service.subtitle}
                </p>

                <p className="mt-4 leading-7 text-zinc-600">
                  {service.description}
                </p>
              </div>

              <div className="mt-auto pt-8">
                <Link
                  href="/#contact"
                  className="inline-flex items-center gap-2 font-semibold text-zinc-950 underline decoration-zinc-300 underline-offset-4 transition hover:decoration-zinc-950"
                >
                  {service.cta}
                  <span aria-hidden="true">→</span>
                </Link>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  )
}
