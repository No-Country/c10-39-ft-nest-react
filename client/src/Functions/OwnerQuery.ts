import axios from './axios';
import { refreshToken } from './utils';

interface ownerRegisterProps {
  phone: string;
  document: string;
}
interface dataType {
  data: unknown[] | { error: string };
}

export async function OwnerRegisterQuery(props: ownerRegisterProps) {
  const { phone, document } = props;
  const body = {
    DNI: document,
    phone,
    address: 'hola',
  };

  try {
    const { data }: dataType = await axios.post('/owner', body);

    if (!Array.isArray(data) && data.error) throw new Error(`Error: data.error = ${data.error}`);

    await refreshToken();

    return data;
  } catch (error) {
    console.log(error);
  }
}

interface SportFieldProps {
  title: string;
  sportField: string;
  capacity: string;
}

export async function OwnerAddSFQuery(props: SportFieldProps, token: string, id: string) {
  try {
    const { data }: dataType = await axios.post(
      '/sportfields',
      { ...props, id },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    );

    if (!Array.isArray(data) && data.error) throw new Error(`Error: data.error = ${data.error}`);

    return data;
  } catch (error) {
    console.log(error);
  }
}
export async function OwnerEditSFQuery(props: SportFieldProps, token: string, id: string) {
  try {
    const { data }: dataType = await axios.patch(
      '/sportfields',
      { ...props, id },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    );

    if (!Array.isArray(data) && data.error) throw new Error(`Error: data.error = ${data.error}`);

    return data;
  } catch (error) {
    console.log(error);
  }
}
