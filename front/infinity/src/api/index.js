import {
  apiurl
} from '@/config/runtimeconfig.json'

let baseURL

baseURL = process.env.VUE_APP_ENV == "development" ? process.env.VUE_APP_APIURL : apiurl.url

export {
  baseURL
}