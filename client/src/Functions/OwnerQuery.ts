import axios from './axios';

interface ownerProps {
  phone: string;
  document: string;
}

export default function OwnerRegister(props: ownerProps) {
  const { data } = axios.post();
}
