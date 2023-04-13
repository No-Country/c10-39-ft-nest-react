import axios from './axios';

import store from '../App/Store';
import { setComplex } from '../App/complexSlice';

export async function GetComplexQuery() {
  try {
    const { data } = await axios.get('/sports-complex/owner');
    store.dispatch(setComplex(data));

    return data;
  } catch (err) {
    console.log(err);
  }
}

interface complexDataType {
  name: string;
  ubication: string;
  day: string;
}

export async function PostComplexQuery(body: complexDataType, id: string) {
  try {
    const { data } = await axios.patch(`/sports-complex/owner/${id}`, body);

    return data;
  } catch (err) {
    console.log(err);
  }
}
