import axios from "axios";

const internalApiPostPath = 'http://localhost:3000/api/upload';

const internalPostRequest = async (data: any) => {
  return await axios.post(internalApiPostPath, { base64img: data.base64img });
};

export { internalPostRequest };
