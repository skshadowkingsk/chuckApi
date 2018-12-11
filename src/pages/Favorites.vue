<template>
    <v-content>
        <div v-for="(joke, index) in jokes" :key="joke.id">
            <joke :joke="joke" :index="index" v-on:remove="removeJoke" v-on:favorite="favoriteJoke" />
        </div>
        <v-footer class="grey darken-4 text-xs-center" fixed bottom>
            <div class="white--text ml-3 text-xs-center">
                Chuck Api
                <v-icon class="red--text">favorite</v-icon>
            </div>
        </v-footer>
    </v-content>
</template>

<script>
import Joke from '../components/FavoritedJoke.vue';

export default {
    name: "Favorites",
    components: {
        Joke
    },
    data() {
        return {
            snackbar: false,
            snackbarTimeout: 6000,
            snackbarText: ""
        }
    },
    methods: {
        filter: function (todo) {
        let self = this
        if (this.value != "") {
          return todo.value.toLowerCase().includes(self.texto.toLowerCase()) == true;
        }
        return true
      },
        removeJoke: function (toRemove) {
            this.jokes = this.jokes.filter((a) => {
                return a.id != toRemove.id
            });
            this.snackbarText = "The joke is gone!";
            this.snackbar = true;
        },
        favoriteJoke(index) {
            if (this.jokes[index].favorite)
                this.jokes[index].favorite = false;
            else
                this.jokes[index].favorite = true;
        }
    },
    computed: {
        jokes: function() {
            return this.$store.getters.jokes.filter((j)=>{
                return j.favorite;
            });
        }
    }
}
</script>

<style scopped>
    
</style>