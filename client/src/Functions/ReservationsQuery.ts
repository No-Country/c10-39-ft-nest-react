import axios from './axios';

export async function GetReservations(token: string) {
  try {
    const { data } = await axios.get('/reservation', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return data;
  } catch (err) {
    console.log(err);
  }
}
