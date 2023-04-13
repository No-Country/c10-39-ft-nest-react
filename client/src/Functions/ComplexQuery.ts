import axios from './axios';

import store from '../App/Store';
import { setComplex } from '../App/complexSlice';

export async function GetComplexQuery(state : ( state : any ) => any) {
  try {
    const { data } = await axios.get('/sports-complex/owner');
    console.log(data);
    
    store.dispatch(setComplex(data));
    state({
      id: data.id || '',
      name: data.name || '',
      ubication: data.address || '',
      day: data.day || '',
    })
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
