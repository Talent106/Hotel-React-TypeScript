import axios from 'axios';
import { Credential } from '@/actions/App';

const URL = 'http://127.0.0.1:9000/v1/';

const register = (e: Credential) => axios.post(`${URL}auth/register`, e);
const login = (e: Credential) => axios.post(`${URL}auth/login`, e);

export default {
    register,
    login
};