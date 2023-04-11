import axios from './axios';

interface ownerProps {
  phone: string;
  document: string;
}

export default async function OwnerQuery(props: ownerProps, token: string, id: any) {
  const { phone, document } = props;
  const body = {
    DNI: document,
    phone,
    userId: id,
    address: 'hola',
  };
  try {
    const { data } = await axios.post('/owner', body, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return data;
  } catch (error) {
    console.log(error);
  }
}
