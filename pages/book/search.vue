<template>
    <v-container>
        <v-row>
            <v-col cols="6">
                <v-text-field v-model="keyword" label="本のタイトルを検索" />
            </v-col>
        </v-row>
        <v-row>
            <v-col cols="3">
                <v-btn v-on:click="search">検索する</v-btn>
            </v-col>
            <v-col cols="3">
                <v-btn v-bind:to="{ name: 'book' }">一覧に戻る</v-btn>
            </v-col>
        </v-row>

        <v-row>
            <v-col v-for="(item, index) in items" v-bind:key="index" cols="12" md="6">
                <v-card class="mx-auto mb-4">
                    <v-row>
                        <v-col cols="4">
                            <NuxtImg v-bind:src="item.volumeInfo.imageLinks.thumbnail" />
                        </v-col>
                        <v-col cols="8">
                            <v-card-title>{{ item.volumeInfo.title }}</v-card-title>
                            <v-divider />
                            {{ shorten(item.volumeInfo.description) }}
                            <v-card-actions>
                                <v-btn icon="mdi-plus"></v-btn>
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

const keyword = ref("")
const items = ref("")

const search = async () => {
    console.log("search")
    const { data } = await useFetch("/api/search", { params: { q: keyword.value } })
    console.log("data")
    console.log(data)
    items.value = data.value
}

const shorten = (orig: string) => {
    return orig.slice(0, DESCRIPTION_LENGTH) + "..."
}

</script>
