import { createApp } from 'vue'

// import { createStore } from "vuex";

import App from './App.vue'
import router from './router'
import store from './store'

// const mutations = {
//   addToQueue(state) {
//     state.queuer++;
//   },
// };
// const state = {
//   queuer: 0,
// };

// const store = createStore({
//   mutations,
//   state,
//   strict: true,
// });

createApp(App).use(router).use(store).mount('#app')
