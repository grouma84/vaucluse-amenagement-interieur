import Image from "next/image"
import Link from "next/link"

type ChantierCardProps = {
    image: string
    imageAlt: string
    category: string
    title: string
    excerpt: string
    href: string
}

export default function ChantierCard({
    image,
    imageAlt,
    category,
    title,
    excerpt,
    href,
}: ChantierCardProps) {
    return (
        <article className="group overflow-hidden rounded-2xl border border-zinc-200 bg-white lg:grid lg:grid-cols-[1.15fr_0.85fr]">
            <div className="relative min-h-[320px] overflow-hidden">
                <Image
                    src={image}
                    alt={imageAlt}
                    fill
                    sizes="(max-width: 1024px) 100vw, 60vw"
                    className="object-cover transition duration-700 group-hover:scale-[1.02]"
                />
            </div>

            <div className="flex flex-col justify-center p-8 sm:p-10 lg:p-12">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-amber-700">
                    {category}
                </p>

                <h3 className="mt-4 text-3xl font-semibold tracking-tight">
                    {title}
                </h3>

                <p className="mt-5 leading-7 text-zinc-600">
                    {excerpt}
                </p>

                <Link
                    href={href}
                    className="mt-7 inline-flex w-fit items-center gap-2 font-semibold underline decoration-zinc-300 underline-offset-4 transition hover:decoration-zinc-950"
                >
                    Voir le chantier
                    <span aria-hidden="true">→</span>
                </Link>
            </div>
        </article>
    )
}