import React, {useState} from 'react'
import axios from '../Functions/axios'

const Dani = () => {
    const [selectedFile, setSelectedFile] = useState<File | null>(null);

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      const file = event.target.files?.[0];
      setSelectedFile(file as File);
    };
  
    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
  
      if (!selectedFile) {
        return;
      }
  
      try {
        const response = await axios.post('/image/upload', {
            file: selectedFile,
        }, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        });
  
        console.log(response.data);
      } catch (error) {
        console.error(error);
      }
    };
  
    return (
      <form onSubmit={handleSubmit}>
        <input type="file" onChange={handleFileChange} />
        <button type="submit">Upload</button>
      </form>
    );
}

export default Dani