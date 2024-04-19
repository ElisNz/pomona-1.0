import axios from "axios";

const host = process.env.API_HOST || 'http://localhost:3000';
const internalApiPostPath = `${host}/api/upload/single`;

const internalPostRequest = async (data: any) => {
  return await axios.post(internalApiPostPath, { base64img: data.base64img });
};

export { internalPostRequest };
