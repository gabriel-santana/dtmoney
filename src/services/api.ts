import axios from "axios";

export const api = axios.create({
  baseURL: 'https://gabriel-santana.github.io/dtmoney/api',
})