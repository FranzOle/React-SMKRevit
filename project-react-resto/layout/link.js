const url = "http://localhost:8000/api";
let token = "vZlIw73o6jfiOs3C6Zn6SXs9vgaW06bLANZZQDbv";
    
export const link = axios.create({
    baseURL: url,
    headers:{
        'api_token': token
    }
});