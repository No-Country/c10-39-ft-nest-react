import axios from './axios';

export async function PostFile(file: File) {
  try {
    const { data } = await axios.post<{ data: string }>('/image/upload', {
      file,
    });
    return data;
  } catch (error) {
    console.error(error);
  }
}
