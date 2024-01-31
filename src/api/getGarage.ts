import axios from 'axios';

interface User {
  garage: string[];
}

const getGarage = async () => {
  const baseUrl = import.meta.env.VITE_APP_API_URL;
  const url = `${baseUrl}/user`;
  const response = await axios.get<User>(url);

  return response.data.garage;
};

export default getGarage;
