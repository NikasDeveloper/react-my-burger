import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://react-my-burger-e8bb7.firebaseio.com/'
});

export default instance;