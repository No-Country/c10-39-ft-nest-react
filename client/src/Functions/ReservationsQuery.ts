import axios from './axios';

export async function GetReservations() {
  try {
    const { data } = await axios.get('/sportfields/user/reservations');
    return data;
  } catch (err) {
    console.log(err);
  }
}
