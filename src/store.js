// import { createStore } from 'vuex'
// export default createStore({ mutations, state, strict: true })
// const mutations = {
//   updateName(state, name) {
//     state.name = name
//   }
// }

// const state = {
//   name: ''
// }

import { createStore } from 'vuex'

const mutations = {
  addToQueue(state) {
    state.queuer++
  }
}
const state = {
  queuer: 0
}

// const store = createStore({
//   mutations,
//   state,
//   strict: true,
// });

// createApp(App).use(router).use(store).mount("#app");

export default createStore({ mutations, state, strict: true })
