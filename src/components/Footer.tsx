import Link from "next/link"

const PHONE_DISPLAY = "07 66 04 42 60"
const EMAIL = "grouma.m@gmail.com"

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-zinc-800 bg-zinc-950 px-6 py-12 text-white sm:px-10">
      <div className="mx-auto max-w-7xl">

        <div className="grid gap-10 md:grid-cols-3">

          <div>
            <p className="text-lg font-semibold tracking-tight">
              VAUCLUSE AMÉNAGEMENT INTÉRIEUR
            </p>

            <p className="mt-3 max-w-xs text-sm leading-6 text-zinc-400">
              Plâtrerie, isolation et transformation intérieure.
              Neuf et rénovation dans le Vaucluse.
            </p>
          </div>

          <div>
            <p className="text-sm font-semibold text-zinc-300">
              Navigation
            </p>

            <nav
              className="mt-4 flex flex-col items-start gap-3 text-sm text-zinc-400"
              aria-label="Navigation pied de page"
            >
              <Link
                href="/#prestations"
                className="transition hover:text-white"
              >
                Prestations
              </Link>

              <Link
                href="/#realisations"
                className="transition hover:text-white"
              >
                Réalisations
              </Link>

              <Link
                href="/#professionnels"
                className="transition hover:text-white"
              >
                Pros & collectivités
              </Link>

              <Link
                href="/#contact"
                className="transition hover:text-white"
              >
                Contact
              </Link>
            </nav>
          </div>

          <div>
            <p className="text-sm font-semibold text-zinc-300">
              Contact
            </p>

            <div className="mt-4 space-y-3 text-sm text-zinc-400">

              <a
                href="tel:+33766044260"
                className="block transition hover:text-white"
              >
                {PHONE_DISPLAY}
              </a>

              <a
                href={`mailto:${EMAIL}`}
                className="block transition hover:text-white"
              >
                {EMAIL}
              </a>

              <p>
                Carpentras • Vaucluse
              </p>

            </div>
          </div>

        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-zinc-800 pt-6 text-xs text-zinc-500 sm:flex-row sm:items-center sm:justify-between">

          <p>
            © {year} VAUCLUSE AMÉNAGEMENT INTÉRIEUR
          </p>

          <Link
            href="/mentions-legales"
            className="transition hover:text-zinc-300"
          >
            Mentions légales
          </Link>

        </div>

      </div>
    </footer>
  )
}

