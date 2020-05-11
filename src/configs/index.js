import axios from 'axios';
import qs from 'qs';

// REQUEST API
export const requestAPI = ({
  url, 
  method = 'GET', 
  data,
  headers,
  type = null
}) => {
  
  if (!url) return false;

  let formatData = null;
  const axiosConfig = { 
    url,
    method,
    mode: 'no-cors',
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Methods': '*',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers': '*',
      ...headers
    },
    withCredentials: true,
    credentials: 'same-origin',
  }

  switch(method) {
    case 'POST':
    case 'PUT':
    case 'PATCH':
    case 'DELETE':
      formatData = qs.stringify(data);
      if(type === 'FormData') {
        formatData = new FormData();
        if(data) {
          for(let key in data) {
            const value = data[key];``
            formatData.append(key, value);
          }
        }
        axiosConfig.headers = {
          ...headers,
          'Content-Type': 'multipart/form-data'
        }
      }
      break;

    default:
      const urlQueryObj = queryStringBuilder(data);
      axiosConfig.url = `${url}${urlQueryObj}`;
      break;
  }
  
  axiosConfig.data = formatData;

  try { 
    return axios(axiosConfig);
  } catch (error) {
    console.error(error);
  }
};

function queryStringBuilder(urlQueryObj) {
  return (typeof urlQueryObj === 'object' && Object.entries(urlQueryObj).length > 0)
  ? `?${Object.keys(urlQueryObj).map(key =>
  (Array.isArray(urlQueryObj[key])
      ? urlQueryObj[key].map((item, idx) => `${key}[${idx}]=${item}`).join('&')
      : `${key}=${urlQueryObj[key]}`)).join('&')}`
  : '';
}

export const API = {
  BASE_URL: 'https://www.voog.com/admin/api'
}