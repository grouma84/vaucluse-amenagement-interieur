import Link from "next/link"

type ReelCardProps = {
    video: string
    category: string
    title: string
    href: string
}

export default function ReelCard({
    video,
    category,
    title,
    href,
}: ReelCardProps) {
    return (
        <article className="group">
            <div className="mx-auto aspect-[9/16] w-full max-w-[320px] overflow-hidden rounded-2xl bg-zinc-950">
                <video
                    className="h-full w-full object-cover"
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="metadata"
                >
                    <source src={video} type="video/mp4" />
                </video>
            </div>

            <div className="mx-auto mt-5 max-w-[320px]">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-amber-700">
                    {category}
                </p>

                <h3 className="mt-2 text-xl font-semibold tracking-tight">
                    {title}
                </h3>

                <Link
                    href={href}
                    className="mt-4 inline-flex items-center gap-2 text-sm font-semibold underline decoration-zinc-300 underline-offset-4 transition hover:decoration-zinc-950"
                >
                    Voir le projet
                    <span aria-hidden="true">→</span>
                </Link>
            </div>
        </article>
    )
}