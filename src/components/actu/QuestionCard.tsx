import Link from "next/link"

type QuestionCardProps = {
    question: string
    answer: string
    href: string
}

export default function QuestionCard({
    question,
    answer,
    href,
}: QuestionCardProps) {
    return (
        <article className="flex h-full min-h-[360px] flex-col justify-between rounded-2xl border border-zinc-200 bg-[#f6f4ef] p-8 sm:p-10">
            <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-amber-700">
                    Question client
                </p>

                <h3 className="mt-6 text-3xl font-semibold tracking-tight">
                    « {question} »
                </h3>

                <p className="mt-6 leading-7 text-zinc-600">
                    {answer}
                </p>
            </div>

            <Link
                href={href}
                className="mt-8 inline-flex w-fit items-center gap-2 font-semibold underline decoration-zinc-300 underline-offset-4 transition hover:decoration-zinc-950"
            >
                Voir la réponse
                <span aria-hidden="true">→</span>
            </Link>
        </article>
    )
}