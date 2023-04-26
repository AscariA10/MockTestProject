import axios from 'axios';

axios.defaults.baseURL = 'https://6445923e0431e885f00063be.mockapi.io';

export async function getUsers() {
   try {
      const response = await axios.get('/users');
      return response.data;
   } catch (error) {
      console.error(error);
   }
}
