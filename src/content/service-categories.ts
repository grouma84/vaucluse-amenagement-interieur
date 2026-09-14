export const SERVICE_CATEGORIES = [
    {
        value: "isolation",
        label: "Isolation intérieure",
        categoryLabel: "ISOLATION",
        href: "/isolation-interieure-carpentras",
    },
    {
        value: "decoration",
        label: "Placo décoratif",
        categoryLabel: "DÉCORATION",
        href: "/placo-decoratif-carpentras",
    },
    {
        value: "cloisons",
        label: "Cloisons & doublages",
        categoryLabel: "CLOISONS & DOUBLAGES",
        href: "/cloisons-doublages-carpentras",
    },
    {
        value: "faux-plafond",
        label: "Faux plafonds",
        categoryLabel: "FAUX PLAFONDS",
        href: "/faux-plafond-carpentras",
    },
] as const

export type ServiceCategoryValue =
    (typeof SERVICE_CATEGORIES)[number]["value"]

export function getServiceCategory(
    value: string
) {
    return SERVICE_CATEGORIES.find(
        (service) => service.value === value
    )
}