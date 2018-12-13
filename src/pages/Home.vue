<template>
    <div >
        <v-text-field  label="Filter" placeholder="Chuck Norris can make any lesbian go straight." box color="purple" v-model="texto"/>
        <div  v-if="filtered.length">
            <div v-for="(joke) in filtered" :key="joke.id">
            <joke :joke="joke" :index="joke.id" v-on:remove="removeJoke" v-on:favorite="favoriteJoke"/>
            </div>
        </div>
        <div v-else>
            <error/>
        </div>
        <v-footer class="grey darken-4 " fixed bottom>
                <div class="white--text ml-5 text-xs-center ">
                    Chuck Api
                    <v-icon class="purple--text">favorite</v-icon>
                </div>
            <v-btn color="grey" small absolute top right fab v-on:click="getJoke">
                <v-icon color="purple dark-4">add</v-icon>
            </v-btn>
        </v-footer>

        <v-snackbar v-model="snackbar" :bottom="true" :timeout="snackbarTimeout">
            {{ snackbarText }}
            <v-btn color="purple darken" flat @click="snackbar = false">
                Close
            </v-btn>
        </v-snackbar>
    </div>
</template>

<script>
import Joke from '../components/Joke.vue';
import Error from '../components/Error.vue';
import axios from 'axios';

export default {
    name: "Home",
    components: {
        Joke, Error
    },
    data() {
        return {
            snackbar: false,
            snackbarTimeout: 6000,
            snackbarText: "",
            texto: "",
        }
    },
    mounted(){
     setInterval(()=>{if(new Date().getSeconds()=== 30){axios.get("https://api.chucknorris.io/jokes/random").then((response) => {
                    let joke = response.data;
                    this.$store.commit("incrementIndex");
                    joke.id=this.$store.getters.index;
                    joke.favorite = false;
                    this.$store.commit("add", joke);
                    this.$store.commit("increment", joke);
        })
      }
    }, 1000);
    
},
    methods: {
        /*filter: function (todo) {
        let self = this
        if (this.value != "") {
            
          return (todo.value.toLowerCase().includes(self.texto.toLowerCase()) == true || todo.id.toString().includes(self.texto.toLowerCase()) == true)
        }
        return true
      },*/
            getJoke: function () {
                axios.get("https://api.chucknorris.io/jokes/random").then((response) => {
                    let joke = response.data;
                    this.$store.commit("incrementIndex");
                    joke.id=this.index
                    joke.favorite = false;
                    this.$store.commit("add", joke);
                    this.$store.commit("increment", joke);
                },)
            },
        removeJoke: function (toRemove) {
            this.$store.commit("change", 
                this.$store.getters.jokes.filter((a) => {
                    return a.id != toRemove.id
                })
            );
            this.snackbarText = "The joke is gone!";
            this.snackbar = true;
        },
        favoriteJoke(index) {
            index-=1;
            if (this.$store.getters.jokes[index].favorite)
                this.$store.getters.jokes[index].favorite = false;
            else
                this.$store.getters.jokes[index].favorite = true;
        }
    },
    computed:{
        jokes: function(){
            return this.$store.getters.jokes;
        },
        index: function(){
            return this.$store.getters.index;
        },
        filtered: function() {
            return this.$store.getters.jokes.filter((j)=>{
                return (j.value.toLowerCase().includes(this.texto.toLowerCase()) == true || j.id.toString().includes(this.texto.toLowerCase()) == true);
            });
        }
    }
}
</script>

<style scopped>

    
</style>