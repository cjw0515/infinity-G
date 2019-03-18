import { apiurl } from '@/config/runtimeconfig.json'

let baseURL

if(process.env.VUE_APP_ENV == "development"){
    baseURL = process.env.VUE_APP_APIURL;        
}else{
    baseURL = apiurl.url;    
}

export{
  baseURL
}