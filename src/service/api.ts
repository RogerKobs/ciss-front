import axios from 'axios';

const baseURL = process.env.NEXT_PUBLIC_URL_API;

export const api = axios.create({
  baseURL,
  headers: {
    'Content-Type': 'application/vnd.api+json',
    Accept: 'application/vnd.api+json',
  },
});
