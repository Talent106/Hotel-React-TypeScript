import axios from 'axios';
import { Credential } from '@/actions/App';
import { Products } from '@/actions/products';

const URL = 'http://127.0.0.1:9000/v1/';

const register = (e: Credential) => axios.post(`${URL}auth/register`, e);
const login = (e: Credential) => axios.post(`${URL}auth/login`, e);
const products = (e: Products) => axios.post(`${URL}product`, e);

export default {
    register,
    login,
    products
};