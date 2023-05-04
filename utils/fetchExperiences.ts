// import { el } from 'date-fns/locale';
import { Experience } from '../typings';

import axios from 'axios';

export const fetchExperiences = async () => {
  const requestUrl = `${process.env.NEXT_PUBLIC_BASE_URL || 'http://0.0.0.0:3000'}/api/getExperiences`;
  const axiosEnabled = true;

  if (axiosEnabled) {
    const resAxios = axios(requestUrl)
      .then((resp) => {
        // console.log(resp.data);
        return resp.data;
      })
      .catch(function (error) {
        console.log('ERROR fetching fetchExperiences');
        if (error.response) {
          // The request was made and the server responded with a status code
          // that falls out of the range of 2xx
          console.log(error.response.data);
          console.log(error.response.status);
          console.log(error.response.headers);
        } else if (error.request) {
          // The request was made but no response was received
          // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
          // http.ClientRequest in node.js
          console.log(error.request);
        } else {
          // Something happened in setting up the request that triggered an Error
          console.log('Error', error.message);
        }
        console.log(error.config);
      });
    const dataAxios = await resAxios;
    return dataAxios.experiences;
    // console.log(data2);
  } else {
    const res = await fetch(requestUrl);
    const data = await res.json();
    return data.experiences;
  }
};
