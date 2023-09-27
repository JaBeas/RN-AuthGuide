import axios from 'axios';

const API_KEY = 'AIzaSyDHhtF7dz19QmXihsTzaF00KkWGxxEPrF0';

async function createUser(email, password) {
  const response = await axios.post(
    'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=' + API_KEY,
    {
      email,
      password,
      returnSecureToken: true,
    }
  );
}
