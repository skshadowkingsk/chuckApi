import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {
        jokes: [],texto:""
    },
    mutations: {
        add(state, joke) {
          state.jokes.push(joke);
        },
        change(state, jokes){
            state.jokes = jokes;
        },
        tChange(state, texto){
            state.texto = texto;
        },
    },
    getters: {
      jokes: state => state.jokes,
      texto: state => state.texto
    }
})