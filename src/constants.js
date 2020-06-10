import axios from 'axios'

export const newsApi = {
  url: 'https://newsapi.org/v2/',
  cantry: 'us',
  key: 'd0a98c7bc6be488cabf56ee0e965b091',
}

export const api = axios.create({
  baseURL: newsApi.url,
})