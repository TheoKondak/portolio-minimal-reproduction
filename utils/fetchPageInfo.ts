import { PageInfo } from '../typings';

import axios from 'axios';

export const fetchPageInfo = async () => {
  const res2 = axios(`${process.env.NEXT_PUBLIC_BASE_URL || 'http://0.0.0.0:3000'}/api/getPageInfo`)
    .then((resp) => {
      // console.log(resp.data);
      return resp.data;
    })
    .catch(function (error) {
      console.log('ERROR fetchingSettings');
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
  const data2 = await res2;
  const pageInfo: PageInfo[] = data2.pageInfo;
  // const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL || 'http://0.0.0.0:3000'}/api/getPageInfo`);
  // const data = await res.json();
  // const pageInfo: PageInfo[] = data.pageInfo;
  //   console.log('Fetching', pageInfos);
  // console.log(pageInfo);
  return pageInfo;
};
