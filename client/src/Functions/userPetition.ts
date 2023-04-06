import store from '../App/Store';
import { setUser } from '../App/userSlice';

import axios from './axios';

interface UserData {
  user: any;
  token: string;
}

export async function getHello(state: (data: any) => void) {
  try {
    const petition = await axios.get('/');
    state(petition.data);
    return;
  } catch (error) {
    // Handle error here
    console.log(error);
    throw new Error('algo salio mal :(');
  }
}

export async function registerUser(body: any) {
  try {
    const petition = await axios.post('/users/register', body);
    store.dispatch(setUser(petition?.data.user));
    localStorage.setItem('tkn', petition?.data.token);
    window.alert('Usuario creado con exito');
    return;
  } catch (error) {
    // Handle error here
    console.log(error);
    throw new Error('algo salio mal :(');
  }
}

export async function loginUser(body: any) {
  try {
    const petition = await axios.post<UserData>('/user/login', body);
    store.dispatch(setUser(petition?.data.user));
    localStorage.setItem('tkn', petition?.data.token);
    window.alert('Usuario logeado con exito');
  } catch (error) {
    // Handle error here
    console.log(error);
    throw new Error('algo salio mal :(');
  }
}

export async function authUser(): Promise<void> {
  const token = localStorage.getItem('tkn') ?? '';

  if (!token) {
    window.location.pathname = '/';
    return;
  }
  try {
    const petition = await axios.get('/users/auth', {
      headers: {
        authorization: `Bearer ${token}`,
      },
    });
    store.dispatch(setUser(petition.data));
    return;
  } catch (error) {
    // Handle error here
    console.log(error);
    localStorage.removeItem('tkn');
  }
}
