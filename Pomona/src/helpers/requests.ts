import axios from "axios";

const internalApiPostPath = 'http://localhost:3000/api/upload';

const internalPostRequest = async (data: any) => {
  const form = new FormData();
  form.append('base64img', data.base64img);
  
  return await axios.postForm(internalApiPostPath, form);
};

export { internalPostRequest };
