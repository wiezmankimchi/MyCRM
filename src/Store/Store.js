import {createStore, action} from 'easy-peasy';
export default createStore({
  email: '',
  password: '',
  setEmail: action((state, payload) => {
    console.log(`action.setEmail:${payload}`);
    state.email = payload;
  }),
  setPassword: action((state, payload) => {
    console.log(`action.setPassword:${payload}`);
    state.password = payload;
  }),
  userSession: {
    isLoggedIn: false,
    userId: '',
  },
});
