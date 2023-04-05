// import { SiteSettings } from '../typings';

import axios from 'axios';

export const fetchSettings = async () => {
  const requestUrl = `${process.env.NEXT_PUBLIC_BASE_URL || 'http://0.0.0.0:3000'}/api/getSettings`;

  const axiosEnabled = true; // Experimenting to see if something is different using Axios.
  let settings: any = null;
  let settingsAxios: any = null;

  if (axiosEnabled) {
    console.log('Requesting siteSettings using Axios');
    console.log(`Fetching: ${requestUrl}`);
    console.log('---');
    const res2 = axios
      .get(requestUrl)
      .then((resp) => {
        console.log('Response Data:');
        console.log(resp.data);
        console.log('---');
        return resp.data;
      })
      .catch(function (error) {
        if (error.response) {
          // The request was made and the server responded with a status code
          // that falls out of the range of 2xx
          console.log('ERROR OCCURED');
          console.log('Error Response Data');
          console.log(error.response.data);
          console.log('---');
          console.log('Error Response Status');
          console.log(error.response.status);
          console.log('---');
          console.log('Error Response Headers');
          console.log(error.response.headers);
          console.log('---');
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
    const data2 = await res2;
    settingsAxios = data2.settings;
  } else {
    console.log('Requesting siteSettings using HTTP request');
    console.log(`Fetching: ${requestUrl}`);
    const res = await fetch(requestUrl);
    const data = await res.json();
    console.log(`Received Data: `);
    console.log(data);
    settings = data.settings;
    console.log(settings);
  }

  return axiosEnabled ? settingsAxios : settings;
};
