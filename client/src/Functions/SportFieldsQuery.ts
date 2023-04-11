import { type sportData } from '../types/Sport.type';

import axios from './axios';

export async function getSportFieldsWithSport(sport: string, token: string) {
  try {
    const { data }: { data: sportData[] } = await axios.get(`/sportfields/sport/${sport}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return data;
  } catch (error) {
    console.error(error);
  }
}

export async function getSportDetail(id: string, token: string) {
  try {
    const { data }: { data: sportData } = await axios.get(`/sportfields/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return data;
  } catch (error) {
    console.error(error);
  }
}
