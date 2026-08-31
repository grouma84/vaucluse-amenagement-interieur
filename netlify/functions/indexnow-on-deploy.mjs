const host = "www.vaucluse-amenagement-interieur.fr"
const key = "4672ba7945d645bbb787ce488bba1b4e"

const urlList = [
  "https://www.vaucluse-amenagement-interieur.fr/",
  "https://www.vaucluse-amenagement-interieur.fr/realisations",
  "https://www.vaucluse-amenagement-interieur.fr/mentions-legales",
]

export default {
  async deploySucceeded(event) {
    if (event.deploy.context !== "production") {
      console.log(`IndexNow skipped for context: ${event.deploy.context}`)
      return
    }

    const response = await fetch("https://api.indexnow.org/indexnow", {
      method: "POST",
      headers: {
        "Content-Type": "application/json; charset=utf-8",
      },
      body: JSON.stringify({
        host,
        key,
        keyLocation: `https://${host}/${key}.txt`,
        urlList,
      }),
    })

    console.log(`IndexNow after deploy: ${response.status} ${response.statusText}`)

    if (!response.ok) {
      throw new Error(`IndexNow failed with status ${response.status}`)
    }
  },
}
