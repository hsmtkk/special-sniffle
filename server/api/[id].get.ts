export default defineEventHandler(async (event) => {
    console.log("/api/:id")

    const id = event.context.params.id
    console.log("id")
    console.log(id)

    const url = `https://www.googleapis.com/books/v1/volumes/${id}`
    const config = useRuntimeConfig()
    const key = config.API_KEY
    const params = {
        key,
    }
    const resp = await $fetch(url, { params })

    console.log("resp")
    console.log(resp)
    return resp.volumeInfo
})