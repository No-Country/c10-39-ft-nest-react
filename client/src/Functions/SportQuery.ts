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
