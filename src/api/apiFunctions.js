import axios from 'axios';

axios.defaults.baseURL = 'https://6445923e0431e885f00063be.mockapi.io';

export async function getUsers(page) {
   try {
      const response = await axios.get(`/users?page=${page}&limit=3`);
      return response.data;
   } catch (error) {
      console.error(error);
   }
}
