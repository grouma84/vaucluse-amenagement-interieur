import Image from "next/image"
import Link from "next/link"

type BeforeAfterCardProps = {
    beforeImage: string
    afterImage: string
    beforeAlt: string
    afterAlt: string
    title: string
    href: string
}

export default function BeforeAfterCard({
    beforeImage,
    afterImage,
    beforeAlt,
    afterAlt,
    title,
    href,
}: BeforeAfterCardProps) {
    return (
        <article className="overflow-hidden rounded-2xl border border-zinc-200 bg-white">
            <div className="grid grid-cols-2">
                <div className="relative aspect-[4/3]">
                    <Image
                        src={beforeImage}
                        alt={beforeAlt}
                        fill
                        className="object-cover"
                    />

                    <span className="absolute left-3 top-3 rounded-full bg-black/75 px-3 py-1 text-xs font-semibold text-white">
                        Avant
                    </span>
                </div>

                <div className="relative aspect-[4/3]">
                    <Image
                        src={afterImage}
                        alt={afterAlt}
                        fill
                        className="object-cover"
                    />

                    <span className="absolute left-3 top-3 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-zinc-950">
                        Après
                    </span>
                </div>
            </div>

            <div className="p-7">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-amber-700">
                    Avant / Après
                </p>

                <h3 className="mt-3 text-2xl font-semibold tracking-tight">
                    {title}
                </h3>

                <Link
                    href={href}
                    className="mt-5 inline-flex items-center gap-2 font-semibold underline decoration-zinc-300 underline-offset-4"
                >
                    Voir la transformation
                    <span aria-hidden="true">→</span>
                </Link>
            </div>
        </article>
    )
}