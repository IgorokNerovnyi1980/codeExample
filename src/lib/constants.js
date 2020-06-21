import axios from 'axios'

export const newsAccess = {
  url: 'https://newsapi.org/v2',
  key: '073c1851e1cc4c8ba0f5f4ea382ce4a4',

}

export const weatherAccess = {
  key: 'caaf7cee5e9b75b5c23bef506ab921cd',
  url: 'https://api.weatherstack.com',
}

export const weatherApi = axios.create({
  baseURL: weatherAccess.url,
})

export const newsApi = axios.create({
  baseURL: newsAccess.url,
})

export const AutorizationData = {
  login: 'user',
  password: '123',
}
