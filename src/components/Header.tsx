import Image from "next/image"
import Link from "next/link"

export function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-zinc-200 bg-white/95 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-6 px-5 sm:px-8">
        <Link
          href="/"
          className="flex shrink-0 items-center"
          aria-label="Accueil VAUCLUSE AMÉNAGEMENT INTÉRIEUR"
        >
          <Image
            src="/images/branding/logo-vai-horizontal-transparent.png"
            alt=""
            width={1358}
            height={331}
            priority
            className="hidden h-10 w-auto sm:block"
          />

          <Image
            src="/images/branding/logo-vai-icon-transparent.png"
            alt=""
            width={488}
            height={488}
            priority
            className="h-9 w-9 object-contain sm:hidden"
          />
        </Link>

        <nav
          className="hidden items-center gap-7 text-sm font-medium text-zinc-600 md:flex"
          aria-label="Navigation principale"
        >
          <Link
            href="/#prestations"
            className="transition hover:text-zinc-950"
          >
            Prestations
          </Link>

          <Link
            href="/#realisations"
            className="transition hover:text-zinc-950"
          >
            Réalisations
          </Link>

          <Link
            href="/#professionnels"
            className="transition hover:text-zinc-950"
          >
            Pros & collectivités
          </Link>
        </nav>

        <Link
          href="/#contact"
          className="inline-flex min-h-10 items-center justify-center rounded-md bg-zinc-950 px-4 text-sm font-semibold text-white transition hover:bg-zinc-800"
        >
          <span className="hidden sm:inline">
            Demander un devis
          </span>

          <span className="sm:hidden">
            Devis
          </span>
        </Link>
      </div>
    </header>
  )
}
