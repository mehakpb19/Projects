import  axios from 'axios';

export async function getdata() {
   const {data}= await axios.get('https://fakestoreapi.com/products')
   return data
}