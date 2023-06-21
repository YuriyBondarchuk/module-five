import axios from "axios";
import { AppEndpoints } from "../enums/AppEndpoints.enum";

const _getApiEndpoint = (): string => {
    return process.env.REACT_APP_API_URL ? process.env.REACT_APP_API_URL : '';
}

const _getFinallyEnpoint = (type: AppEndpoints, id?: string): string => {
    const apiUrl: string  = _getApiEndpoint();

    return apiUrl + type + (id ? '/' + id : '');
}

export const getEndpint = (type: AppEndpoints, id?: string): Promise<any> => {
    return axios({
        url: _getFinallyEnpoint(type, id)
    })
    .then((response) => response.data)
    .catch(error => {throw(error)})
}

export const getProductsFilters = (category: string, sort: string) => {
    return axios({
        url:
        _getApiEndpoint() +
       (category && category !== '' ? (AppEndpoints.oneProductCategory + '/' + category) :
        AppEndpoints.products) +
        '?sort=' + sort
    })
    .then(response => response.data)
    .catch(error => {throw(error)})
}


export const getEndpintSort = (sort: string): Promise<any> => {
    return axios({
        url: _getApiEndpoint() + AppEndpoints.products + '?sort=' + sort
    })
    .then(response => response.data)
    .catch(error => {throw(error)})
}

export const getEndpintCategory = (category: string): Promise<any> => {
    return axios({
        url: _getApiEndpoint() + AppEndpoints.oneProductCategory + '/' + category
    })
    .then(response => response.data)
    .catch(error => {throw(error)})
}