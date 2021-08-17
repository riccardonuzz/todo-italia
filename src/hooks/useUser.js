
import { useEffect, useState } from "react";
import useSWR from "swr";
import axiosInstance from "../utils/client";

export const useUser = () => {
    const token = localStorage.getItem('auth_token');
    const { data, error, mutate } = useSWR(token ? '/auth/me' : null, async (url) => {
        const { data } = await axiosInstance.get(url);
        return data;
    });

    const isLoading = !data && !error && !!token;

    // useEffect(() => {
    //     if (data) {
    //       setUser(data);
    //     }
    //     if (error) {
    //       setUser(null);
    //     }
    //   }, [data, error]);

    return {
        user: data,
        isLoading,
        mutate
    };

    // const [user, setUser] = useState(null);
    // const [isLoading, setIsLoading] = useState(true);

    // useEffect(() => {
    //     const findUser = async () => {
    //         try {
    //             const { data: currentUser } = await axiosInstance.get('/auth/me');
    //             setUser(currentUser);
    //             setIsLoading(false);
    //         } catch (error) {
    //             setIsLoading(false);
    //         }

    //     };

    //     if (localStorage.getItem('auth_token')) {
    //         findUser();
    //     } else {
    //         setIsLoading(false);
    //     }

    // }, []);

    // return {
    //     user,
    //     setUser,
    //     isLoading
    // };
}