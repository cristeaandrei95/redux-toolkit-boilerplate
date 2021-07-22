import axios from 'axios';

const BASE_URL = process.env.REACT_APP_BASE_URL;

export const POST = async (endpoint: string, data: any) => {
  try {
    const res = await axios.post(BASE_URL + endpoint, data);

    return res.data;
  } catch (e) {
    console.error(e);
  }
};

export const GET = async (endpoint: string) => {
  try {
    const res = await axios.get(BASE_URL + endpoint);

    return res.data;
  } catch (e) {
    console.error(e);
  }
};
