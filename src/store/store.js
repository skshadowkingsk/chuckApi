import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {
        jokes: [], chartdata: {
            labels: [],
            datasets: [{
                label: 'Characters per joke',
                data: [],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                ],
                borderColor: [
                    'rgba(255,99,132,1)'
                ],
                borderWidth: 1
            }]
        }
    },
    mutations: {
        add(state, joke) {
          state.jokes.push(joke);
        },
        change(state, jokes){
            state.jokes = jokes;
        },
        increment(state, joke){
            state.chartdata.labels.push(state.jokes.length);
            state.chartdata.datasets[0].data.push(joke.value.length);
        }
    },
    getters: {
      jokes: state => state.jokes,
      chartDatas: state => state.chartdata
    }
})