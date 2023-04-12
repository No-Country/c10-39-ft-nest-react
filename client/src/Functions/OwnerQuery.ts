import axios from './axios';

interface ownerRegisterProps {
  phone: string;
  document: string;
}
interface dataType {
  data: unknown[] | { error: string };
}

export async function OwnerRegisterQuery(props: ownerRegisterProps, token: string, id: string) {
  const { phone, document } = props;
  const body = {
    DNI: document,
    phone,
    userId: id,
    address: 'hola',
  };

  try {
    const { data }: dataType = await axios.post('/owner', body, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (!Array.isArray(data) && data.error) throw new Error(`Error: data.error = ${data.error}`);

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

export async function OwnerAddSFQuery(props: SportFieldProps, token: string, id: any) {
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
export async function OwnerEditSFQuery(props: SportFieldProps, token: string, id: any) {
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
