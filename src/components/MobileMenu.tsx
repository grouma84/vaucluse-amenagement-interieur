"use client"

import Link from "next/link"
import { useState } from "react"

export function MobileMenu() {
    const [open, setOpen] = useState(false)

    function closeMenu() {
        setOpen(false)
    }

    return (
        <div className="relative md:hidden">
            <button
                type="button"
                onClick={() => setOpen((value) => !value)}
                aria-expanded={open}
                aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
                className="flex h-10 w-10 items-center justify-center rounded-md border border-zinc-300 bg-white text-zinc-950"
            >
                <span className="sr-only">
                    {open ? "Fermer le menu" : "Ouvrir le menu"}
                </span>

                <div className="flex flex-col gap-1.5" aria-hidden="true">
                    <span className="block h-0.5 w-5 bg-zinc-950" />
                    <span className="block h-0.5 w-5 bg-zinc-950" />
                    <span className="block h-0.5 w-5 bg-zinc-950" />
                </div>
            </button>

            {open && (
                <nav
                    aria-label="Navigation mobile"
                    className="fixed left-4 right-4 top-20 z-[60] overflow-hidden rounded-xl border border-zinc-200 bg-white shadow-xl"
                >
                    <div className="flex flex-col p-2">
                        <Link
                            href="/#prestations"
                            onClick={closeMenu}
                            className="rounded-lg px-4 py-3 text-sm font-medium text-zinc-800 hover:bg-zinc-100"
                        >
                            Prestations
                        </Link>

                        <Link
                            href="/#realisations"
                            onClick={closeMenu}
                            className="rounded-lg px-4 py-3 text-sm font-medium text-zinc-800 hover:bg-zinc-100"
                        >
                            Réalisations
                        </Link>

                        <Link
                            href="/actu"
                            onClick={closeMenu}
                            className="rounded-lg px-4 py-3 text-sm font-medium text-zinc-800 hover:bg-zinc-100"
                        >
                            Actu
                        </Link>

                        <Link
                            href="/#professionnels"
                            onClick={closeMenu}
                            className="rounded-lg px-4 py-3 text-sm font-medium text-zinc-800 hover:bg-zinc-100"
                        >
                            Pros & collectivités
                        </Link>

                        <Link
                            href="/#contact"
                            onClick={closeMenu}
                            className="rounded-lg px-4 py-3 text-sm font-medium text-zinc-800 hover:bg-zinc-100"
                        >
                            Contact
                        </Link>
                    </div>
                </nav>
            )}
        </div>
    )
}