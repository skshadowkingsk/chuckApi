import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {
        jokes: [],isAuth:false,index:0, chartdata: {
            labels: [],
            datasets: [{
                label: 'Characters in the joke',
                data: [],
                backgroundColor: [
                    'rgba(102,51,153, 0.6)',
                ],
                borderColor: [
                    'rgba(o,o,o,1)'
                ],
                borderWidth: 1
            }]
        }
    },
    mutations: {
        login(state){
            state.isAuth=true;
        },
        logout(state){
            state.isAuth=false;
        },
        add(state, joke) {
          state.jokes.push(joke);
        },
        change(state, jokes){
            state.jokes = jokes;
        },
        increment(state, joke){
            state.chartdata.labels.push(state.jokes.length);
            state.chartdata.datasets[0].data.push(joke.value.length);
        },
        incrementIndex(state){
            state.index+=1;
        },
        changeIndex(state, index){
            state.index = index;
        }
    },
    getters: {
      isAuth: state => state.isAuth,
      jokes: state => state.jokes,
      index: state => state.index,
      chartDatas: state => state.chartdata
    },
    actions:{
        login (state) {
            state.commit('login')
          },
        logout (state) {
            state.commit('logout')
          }
    }
})