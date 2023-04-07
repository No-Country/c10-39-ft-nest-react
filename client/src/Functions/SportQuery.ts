import axios from './axios';

interface SportItem {
  id: string;
  name: string;
  image: string;
}

export async function getAllSports() {
  try {
    const data: SportItem[] | [] = await axios('/sports');

    if (!data) throw new Error('data is undefined');

    return data;
  } catch (error) {
    console.error(error);
  }
}
