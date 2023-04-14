import axios from './axios';

import store from '../App/Store';
import { setComplex } from '../App/complexSlice';
import ComplexType from '../types/Complex.type';

export async function GetComplexQuery(state: (state: any) => any) {
  try {
    const { data } = await axios.get<ComplexType>('/sports-complex/owner');
    console.log(data);

    store.dispatch(setComplex(data));
    state({
      id: data.id || '',
      name: data.name || '',
      address: data.address || '',
      email: data.email || '',
      phone: data.phone || '',
      // day: data.day || '',
      grills: !!data.grills,
      locker: !!data.locker,
      showers: !!data.showers,
      restobar: !!data.restobar,
      parking: !!data.parking,
      availability: [],
    });
    return data;
  } catch (err) {
    console.log(err);
  }
}

interface complexDataType extends Omit<ComplexType, 'id'> {
  id?: string;
}

export async function CreateComplexQuery(body: complexDataType) {
  try {
    const { data } = await axios.post('/sports-complex', body);

    return data;
  } catch (err) {
    console.log(err);
  }
}

export async function UpdateComplexQuery(body: complexDataType, id: string) {
  try {
    const { data } = await axios.patch(`/sports-complex/${id}`, body);

    return data;
  } catch (err) {
    console.log(err);
  }
}
