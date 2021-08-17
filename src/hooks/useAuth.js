import { useContext, useState } from "react";
import { AuthContext } from "../contexts/AuthContext";
import axios from "../utils/client";
import { useUser } from "./useUser";

const useAuth = () => {
    const { mutate } = useUser();
    const [error, setError] = useState(null);

    const loginUser = async (credentials, callback) => {
        try {
            const response = await axios.post('/auth/login', credentials);
            localStorage.setItem('auth_token', response.data.access_token);
            callback();
        } catch (error) {
            setError(error);
        }
    };

    const logoutUser = async (callback) => {
        try {
            await axios.post('/auth/logout');
            localStorage.removeItem('auth_token');
            mutate('/auth/me', null);
            callback();
        } catch (error) {
            setError(error);
        }
    };

    return {
        loginUser,
        logoutUser,
        error
    };
};

export default useAuth;
