import axios from 'axios'

export const newsApi = {
  url: 'https://api.currentsapi.services/v1',
  key: '5QG87mzeL4Ug_ywNym_xwmZeTWm0KknncOsxZeOkcX8ILfwl',

}

export const api = axios.create({
  baseURL: newsApi.url,
})
