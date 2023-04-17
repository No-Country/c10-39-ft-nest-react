import type ComplexType from '../types/Complex.type';

import axios from './axios';

export async function GetComplexQuery() {
  try {
    let { data } = await axios.get<ComplexType>('/sports-complex/owner');

    if (data.owner) {
      const { owner, ...filteredData } = data;
      data = filteredData;
    }

    return { ...data };
  } catch (err) {
    console.log(err);
  }
}

interface complexDataType extends Omit<ComplexType, 'id'> {
  id?: string;
}

export async function CreateComplexQuery(body: complexDataType) {
  try {
    let { data } = await axios.post<ComplexType>('/sports-complex', body);

    if (data.owner) {
      const { owner, ...filteredData } = data;
      data = filteredData;
    }

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
