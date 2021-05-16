import axios, {AxiosResponse} from "axios";
import base64 from "base-64";
import {CustomerApiResponse} from "../models/ApiResponse";

const getCustomersFromApi = ()=> {
    return axios.get('/api/queue/gj9fs', {
        headers: {
            'Authorization': `Basic ${base64.encode("codetest1:codetest100")}`
        }
    }).then(function (response:AxiosResponse<CustomerApiResponse>) {
            return response.data;
        }).catch(err=> {
            throw new Error("Error happened during customer list fetch")
    });
}

export {
    getCustomersFromApi
}