import axios from 'axios'

export const newsApi = {
  url: 'https://newsapi.org/v2',
  key: '073c1851e1cc4c8ba0f5f4ea382ce4a4',

}
// /sources - search
// /everything - last news

export const api = axios.create({
  baseURL: newsApi.url,
})
