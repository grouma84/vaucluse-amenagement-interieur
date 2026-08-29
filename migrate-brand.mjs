import fs from "node:fs"
import path from "node:path"

const root = path.resolve("src")

function walk(dir) {
  return fs.readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    const full = path.join(dir, entry.name)

    if (entry.isDirectory()) return walk(full)

    return /\.(ts|tsx)$/.test(entry.name) ? [full] : []
  })
}

const oldBrand = "GROUMA PL\u00c2TRERIE"
const newBrand = "VAUCLUSE AM\u00c9NAGEMENT INT\u00c9RIEUR"

for (const file of walk(root)) {
  const normalized = file.replaceAll("\\", "/")

  if (
    normalized.endsWith("/src/config/site.ts") ||
    normalized.endsWith("/src/app/mentions-legales/page.tsx")
  ) {
    continue
  }

  const before = fs.readFileSync(file, "utf8")
  let after = before.replaceAll(oldBrand, newBrand)

  after = after.replaceAll(
    "Qui est derri\u00e8re GROUMA ?",
    "Qui est derri\u00e8re l\u2019entreprise ?"
  )

  after = after.replaceAll(
    "Particuliers \u2022 Architectes \u2022 Ma\u00eetres d\u2019\u0153uvre \u2022 Entreprises \u2022 SCI",
    "Particuliers \u2022 Entreprises \u2022 Ma\u00eetrise d\u2019\u0153uvre \u2022 SCI \u2022 Collectivit\u00e9s"
  )

  if (after !== before) {
    fs.writeFileSync(file, after, "utf8")
    console.log("MODIFIE :", normalized)
  }
}

const siteFile = path.join(root, "config", "site.ts")
let site = fs.readFileSync(siteFile, "utf8")

site = site.replace(
  'name: "GROUMA PL\u00c2TRERIE",',
  'name: "VAUCLUSE AM\u00c9NAGEMENT INT\u00c9RIEUR",'
)

site = site.replace(
  '"GROUMA PL\u00c2TRERIE r\u00e9alise vos travaux de pl\u00e2trerie, cloisons, plafonds, isolation int\u00e9rieure, peinture et am\u00e9nagement int\u00e9rieur \u00e0 Carpentras et dans le Vaucluse."',
  '"Vaucluse Am\u00e9nagement Int\u00e9rieur r\u00e9alise vos travaux de pl\u00e2trerie, isolation, peinture, agencement et transformation int\u00e9rieure \u00e0 Carpentras et dans le Vaucluse."'
)

site = site.replace(
  '"Pl\u00e2trerie, isolation, peinture et transformation int\u00e9rieure."',
  '"Pl\u00e2trerie \u2022 Isolation \u2022 Peinture \u2022 Agencement"'
)

site = site.replace(
  '"Plaquiste \u00e0 Carpentras | GROUMA PL\u00c2TRERIE"',
  '"Plaquiste \u00e0 Carpentras | Vaucluse Am\u00e9nagement Int\u00e9rieur"'
)

fs.writeFileSync(siteFile, site, "utf8")

const legalFile = path.join(root, "app", "mentions-legales", "page.tsx")
let legal = fs.readFileSync(legalFile, "utf8")

if (!legal.includes("Site exploit\u00e9 sous le nom")) {
  legal = legal.replace(
    "<p>GROUMA PL\u00c2TRERIE & AM\u00c9NAGEMENT VAUCLUSE</p>",
    "<p>GROUMA PL\u00c2TRERIE & AM\u00c9NAGEMENT VAUCLUSE</p>\n              <p>Site exploit\u00e9 sous le nom : VAUCLUSE AM\u00c9NAGEMENT INT\u00c9RIEUR</p>"
  )
}

fs.writeFileSync(legalFile, legal, "utf8")

console.log("Migration UTF-8 terminee.")
