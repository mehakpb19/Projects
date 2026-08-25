import axios  from 'axios';
const Fetchphoto = async (query) => {
    const key = import.meta.env.VITE_UNSPLACH_KEY;    
  let res = await axios.get("https://api.unsplash.com/search/photos", {
    params: {query},
    headers: {'Authorization': `Client-ID ${key}`},
  });
  let data = res.data.results.map((e)=>{
        return {titel:e.alt_description,thumbline:e.urls.small,id:e.id}
       })
  return data
};
export {Fetchphoto} 