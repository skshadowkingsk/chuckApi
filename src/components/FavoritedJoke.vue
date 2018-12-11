<template>
  <v-container fluid grid-list-lg>
    <v-flex xs12>
      <v-card color="white" class="black--text">
        <v-layout>
          <v-flex xs2>
            <v-img :src="joke.icon_url" height="150px" contain></v-img>
          </v-flex>
          <v-flex xs10>
            <v-card-title primary-title>
              <div>
                <div class="headline">#FunJoke {{index + 1}}</div>
                <div>
                  <blockquote>
                    <p>{{joke.value}}</p>
                  </blockquote>
                </div>
                <div>
                  <v-btn flat right :href="joke.url" target="_blank">
                    <span>Original Joke</span>
                  </v-btn>
                </div>
              </div>
            </v-card-title>
          </v-flex>
        </v-layout>
        <v-divider light></v-divider>
        <v-card-actions class="pa-4">
          <v-spacer></v-spacer>
          <v-icon v-if="joke.favorite" class="mx-2" color="red" @click="favorite(index)">favorite</v-icon>
          <v-icon v-else class="mx-2" color="grey" @click="favorite(index)">favorite</v-icon>
        </v-card-actions>
      </v-card>
    </v-flex>
  </v-container>
</template>

<script>
export default {
  name: 'FavoritedJoke',
  props: {
    joke: Object,
    index: Number
  },
  methods: {
    remove(joke) {
      this.$emit('remove', joke)
    },
    favorite(index) {
      this.$emit('favorite', index)
    }
  }
}
</script>

<style scoped>

blockquote {
  background: #f9f9f9;
  border-left: 10px solid #ccc;
  margin: 1.5em 10px;
  padding: 1.5em 10px;
  quotes: "\201C""\201D""\2018""\2019";
}

blockquote:before {
  color: #ccc;
  content: open-quote;
  font-size: 4em;
  line-height: 0.1em;
  margin-right: 0.25em;
  vertical-align: -0.4em;
}

blockquote p {
  display: inline;
}

.red {
  color: red;
}

.grey {
  color: grey;
}

</style>
