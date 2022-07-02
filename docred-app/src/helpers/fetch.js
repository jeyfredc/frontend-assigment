import {url} from "../config/variables"

export const peticionGET = (endpoint, method) =>{
    const baseUrl = `${url}/${endpoint}`;
    return fetch(baseUrl,{
        method : method,
        headers: {
            Accept: "*/*",
            "Content-Type": "application/json",
            "Accept-Encoding": "gzip, deflate, br",
            "Access-Control-Allow-Origin": "*"
          },
          mode: "cors"
    })

}