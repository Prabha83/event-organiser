import axios from "axios";
import { User } from "../models/user";
const API_BASE_URL = "/api";

export const signUp = async (user: User) => {
    const response = await axios.post(`${API_BASE_URL}/signup`, user);
    console.log(response);
};

export const signIn = async (user: User) => {
    const response = await axios.post(`${API_BASE_URL}/login`, user);
    console.log(response);
};

export const getUsers = async () => {
    const response = await axios.get(`${API_BASE_URL}/users`);
    return response.data;
};
