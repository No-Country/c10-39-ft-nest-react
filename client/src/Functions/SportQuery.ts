import { setSport } from '../App/sportSlice';
import store from '../App/Store';

import axios from './axios';

interface SportItem {
  id: string;
  name: string;
  images: string[];
  types: string[];
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

export async function getAllSport() {
  try {
    const { data }: { data: SportItem[] } = await axios.get('/sports');
    const sportData = data.map((item) => {
      return {
        name: item.name,
        types: item.types,
      };
    });
    store.dispatch(setSport(sportData));

    return sportData;
  } catch (error) {
    console.error(error);
  }
}
