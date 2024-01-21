import axios from 'axios';

const getManufacturers = async () => {
  const baseUrl = import.meta.env.VITE_APP_API_URL;
  const url = `${baseUrl}/manufacturers`;
  const response = await axios.get<string[]>(url);

  return response.data;
};

export default getManufacturers;
