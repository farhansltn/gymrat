export const exerciseOptions= {
  method: 'GET',
  headers: {
    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
    'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
        },
    };

export const youtubeOptions = {
        method: 'GET',
        headers: {
          'X-RapidAPI-Key': 'e4da3b1301mshe36dc3d28237594p13ff98jsn371780020b79',
          'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
        }
      };

export const fetchData= async(url,options) => {
    const response = await fetch(url,options);
    const data = await response.json();

    return data;
}