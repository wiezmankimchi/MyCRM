import {createStore, action} from 'easy-peasy';
export default createStore({
  email: '',
  password: '',
  setEmail: action((state, payload) => {
    state.email = payload;
  }),
  setPassword: action((state, payload) => {
    state.password = payload;
  }),
  userSession: {
    isLoggedIn: false,
    userId: '',
  },
});
