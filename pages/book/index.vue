<template>
    <v-container>
        <v-row>
            <v-col cols="6">
                <v-btn v-bind:to="{ name: 'book-search' }">検索する</v-btn>
            </v-col>
        </v-row>
        <v-row>
            <v-col v-for="(book, index) in books" v-bind:key="book.id" cols="12" md="6">
                <v-card>
                    <v-row>
                        <v-col cols="4">
                            <NuxtImg v-bind:src="book.volumeInfo.imageLinks.thumbnail" />
                        </v-col>
                        <v-col cols>
                            <v-card-title>{{ book.volumeInfo.title }}</v-card-title>
                            {{ shorten(book.volumeInfo.description) }}
                            <v-card-actions>
                                <v-btn icon="mdi-delete" v-on:click="deleteByIndex(index)" />
                            </v-card-actions>
                        </v-col>
                    </v-row>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script setup lang="ts">
const DESCRIPTION_LENGTH = 100

const bookIds = useCookie("bookIds")

let books = []

for (const bookId of bookIds.value) {
    const { data: data } = await useFetch(`/api/${bookId}`)
    books.push(data.value)
}

const shorten = (orig: string) => {
    if (orig.length > 0) {
        return orig.slice(0, DESCRIPTION_LENGTH) + "..."
    }
}

const deleteByIndex = (index: number) => {
    const books = useCookie("bookIds")
    books.value.splice(index, 1)
    navigateTo("book")
}
</script>
