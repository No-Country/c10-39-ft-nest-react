import { setSportNames } from '../App/sportSlice';
import store from '../App/Store';

import axios from './axios';

interface SportItem {
  id: string;
  name: string;
  images: string[];
}

export async function getAllSports(token: string) {
  try {
    const { data }: { data: SportItem[] } = await axios.get('/sports', {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    });
    return data;
  } catch (error) {
    console.error(error);
  }
}

export async function getAllSportNames(token: string) {
  try {
    const { data }: { data: SportItem[] } = await axios.get('/sports', {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    });
    const names = data.map((item) => item.name);

    store.dispatch(setSportNames(names));

    return names;
  } catch (error) {
    console.error(error);
  }
}
