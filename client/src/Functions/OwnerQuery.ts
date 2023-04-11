import axios from './axios';

interface ownerRegisterProps {
  phone: string;
  document: string;
}
interface dataType {
  data: unknown[] | { error: string };
}

export async function OwnerRegisterQuery(props: ownerRegisterProps, token: string, id: any) {
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

interface AddSportFieldProps {
  title: string;
  sportField: string;
  capacity: string;
}

export async function OwnerAddSFQuery(props: AddSportFieldProps, token: string, id: any) {
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
