export default defineEventHandler(async (event) => {
    console.log("/api/search")

    const query = getQuery(event)
    const q = query.q
    const MAX_RESULTS = 10
    const config = useRuntimeConfig()
    const key = config.API_KEY

    const url = "https://www.googleapis.com/books/v1/volumes"
    const params = {
        q,
        maxResults: MAX_RESULTS,
        key,
    }
    const resp = await $fetch(url, { params })
    return resp.items
})