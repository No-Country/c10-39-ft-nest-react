import axios from './axios';

export async function GetReservations() {
  try {
    const { data } = await axios.get('/sportfields/user/reservations');
    return data;
  } catch (err) {
    console.log(err);
  }
}

interface reservationData {
  sportfieldId: string;
  hour: number;
  date: string;
  userEmail: string;
}

export async function PostReservations(body: reservationData) {
  try {
    const { data } = await axios.post('/reservation', body);
    return data;
  } catch (err) {
    console.log(err);
  }
}
